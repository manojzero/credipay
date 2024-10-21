const db = require("../config/dbconfig");
const Sequelize = require('sequelize');
const ApiError = require('../utils/ApiError');
const httpStatus = require("http-status");
const { Op, where } = require("sequelize");
const fileprocessor = require("../utils/fileprocessor")
const config=require('../config/config');
const debiteurs = require("../models/debiteurs");
const emailService = require("../utils/emailservice");
// const facturen = require("../models/facturen");

const getDossierDetails = async (dossier_id) => {
    try {
        const { dossiers, facturen, klanten } = db;
        let result = await dossiers.findOne({
            where: {
                id: dossier_id
            },
            attributes: ['id', 'hoofdsom', 'intrest', 'schadebeding', 'inningskost', 'openstaandbedrag', 'klant'],
        });
        let result1 = "";
        console.log("-----------", result);
        if (result) {
            result1 = await klanten.findOne({
                where: {
                    id: result?.klant
                },
                attributes: ['id', 'firmanaam']
            });
        }
        let final_result = {
            'id': result?.id,
            'hoofdsom': "€ " + result?.hoofdsom ,
            'intrest': "€ " + result?.intrest ,
            'schadebeding': "€ "+ result?.schadebeding ,
            'inningskost':  "€ " +result?.inningskost ,
            'openstaandbedrag': "€ "+ result?.openstaandbedrag ,
            'klant': result1?.id,
            'firmanaam': result1?.firmanaam,
            'total_pay': result?.openstaandbedrag, 
        };
        return final_result;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
}
const getDossierFacturenDetails = async (dossier_id) => {
    try {
        let final_result = [];
        const { dossiers, facturen, klanten, betalingen } = db;

        // betalingen.belongsTo(facturen, {  foreignKey: "factuur" });
        // facturen.hasMany(betalingen, {  foreignKey: "factuur" });
      

        let result = await facturen.findAll({
            attributes: {
                
                include: [
                    [
                        Sequelize.literal('(select sum(aanincasso)+ sum(aanklant) as totalamount from  betalingen WHERE `factuur` = `facturen`.`id`)'),
                        'paymentdone',
                    ],
                ]},
            // include:{
            //     model: betalingen,
            // },
            where: {
                dossier: dossier_id
            },
            order: [
                ['datum', 'ASC'],
            ],
            // attributes: ['id', 'referentie', 'datum', 'hoofdsom', 'intrest', 'schadebeding', 'inningskost', 'totaal', 'betaaldincasso', 'rest','reedsbetaaldvoorincasso', 'paymentdone'],
        });

        let dossiers_data = await dossiers.findOne({
            where: {
                id: dossier_id
            }
        })
        
        let transaction_id = dossier_id +"_"+ dossiers_data?.debiteur+"100";

        let Somme_principle = 0.00;
        let Interest = 0.00;
        let Num_Interests_damages_clause = 0.00;
        let Total = 0.00;
        let Pay = 0.00;
        let Total_paid = 0.00;
        let Total_Collection_Cost = 0.00;
        result.forEach(element => {
            element =JSON.stringify(element);
            element =JSON.parse(element);

         
            let Interests_damages_clause = "--";
            let Collection_costs = "--";
            let Payments_made = "--";

            if (element?.schadebeding != '0.00') {
                Interests_damages_clause = "€ " + element?.schadebeding
                Num_Interests_damages_clause = Number(Num_Interests_damages_clause) + Number(element?.schadebeding);
            }
            if (element?.inningskost != '0.00') {
                Collection_costs = "€ " + element?.inningskost;
                Total_Collection_Cost = Number(Total_Collection_Cost) + Number(element?.inningskost);
            }
            if (element?.paymentdone != '0.00' && element?.paymentdone) {
                Payments_made = "€ " + element?.paymentdone;
                Total_paid = Number(Total_paid) + Number(element?.paymentdone);
            }
            if (element?.hoofdsom != '0.00') {
                Somme_principle = Number(Somme_principle) + Number(element?.hoofdsom);
            }
            if (element?.intrest != '0.00') {
                Interest = Number(Interest) + Number(element?.intrest);
            }
            if (element?.totaal != '0.00') {
                Total = Number(Total) + Number(element?.totaal);
            }
            if (element?.rest != '0.00') {
                Pay = Number(Pay) + Number(element?.rest);
            }
            let json = {
                "Dossier": dossier_id,
                "Invoice_Reference": element?.referentie,
                "Date_decheance": element?.datum,
                "Somme_principle": "€ " + element?.hoofdsom,
                "Interest": "€ " + element?.intrest,
                "Interests_damages_clause": Interests_damages_clause,
                "Collection_costs": Collection_costs,
                "Total": "€ " + element?.totaal,
                "Payments_made": Payments_made,
                "Pay": "€ " + (element?.totaal-element?.paymentdone).toFixed(2),
            }
            final_result.push(
                json
            );
           
        });
        if (Num_Interests_damages_clause == 0.00) {
            Num_Interests_damages_clause = "--"
        } else {
            Num_Interests_damages_clause = '€ ' + Num_Interests_damages_clause.toFixed(2)
        }


        let dossierTotalDetails = [
            { Dossier: "SUB-TOTAL", Somme_principle: '€ ' + Somme_principle.toFixed(2), Interest: '€ ' + Interest.toFixed(2), Interests_damages_clause: Num_Interests_damages_clause, Collection_costs: Total_Collection_Cost.toFixed(2), Total: '€ ' + Total.toFixed(2), Payments_made:Total_paid.toFixed(2), Pay: '€ ' + (Pay.toFixed(2) - Total_paid.toFixed(2)).toFixed(2)},
            { Dossier: "Payments received during the recovery procedure", Somme_principle: '', Interest: '', Interests_damages_clause: '', Collection_costs: '', Total: '', Payments_made: '', Pay: '--' },
            { Dossier: "A PAYER", Somme_principle: '', Interest: '', Interests_damages_clause: '', Collection_costs: '', Total: '', Payments_made: '', Pay: '€ ' + (Pay.toFixed(2) - Total_paid.toFixed(2)).toFixed(2) },
        ]

        let payment_link = config.paymentConfig.payment_url +"/execute?requesterVAT="+ config.paymentConfig.vat_number+"&language=XXXlanguageXXX&remittanceInfo="+transaction_id+"&amountInCents="+((Pay.toFixed(2) - Total_paid.toFixed(2))*100)+"&confirmationURL="+ config.paymentConfig.payment_success_url+"&errorURL="+config.paymentConfig.payment_error_url+"&cancelURL="+config.paymentConfig.payment_cancel_url;
        let paymentbutton_link = config.paymentConfig.payment_url +"?requesterVAT="+ config.paymentConfig.vat_number+"&language=XXXlanguageXXX&remittanceInfo="+transaction_id+"&amountInCents="+((Pay.toFixed(2) - Total_paid.toFixed(2))*100)+"&confirmationURL="+ config.paymentConfig.payment_success_url+"&errorURL="+config.paymentConfig.payment_error_url+"&cancelURL="+config.paymentConfig.payment_cancel_url;


        let final_data = [{
            "dossierDetails": final_result,
            "dossierTotalDetails": dossierTotalDetails,
            "Outstanding_Balance": '€ ' + (Pay.toFixed(2) - Total_paid.toFixed(2)).toFixed(2),
            "paymentLink": payment_link,
            "paymentButtonLink":paymentbutton_link
        }]
        return final_data;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
}


const getDossierPaymentPlanCalculation = async (dossier_id, amount) => {

   
    const { credipay_paymentplan } = db;

   
    
    let dossier_data = await getDossierDetails(dossier_id);

    let total_amount = dossier_data?.total_pay;

    let result = await credipay_paymentplan.findOne({
        where: {
            from_price: { [Op.lte]: total_amount },
            to_price: { [Op.gte]: total_amount },
        }
    })


    var return_data = {};

    if (result) {

        var c_plan = (total_amount / amount);
        console.log("c_pl====", typeof (c_plan));
        if (c_plan > result.plan_months || c_plan <= 1) {

            var min_amount = total_amount / result.plan_months;

            min_amount = Math.ceil(min_amount);

            if (Number(total_amount) < Number(amount)) {

                throw new ApiError(httpStatus.BAD_REQUEST, "Amount entered cannot be more than total amount")

            }

            throw new ApiError(httpStatus.BAD_REQUEST, min_amount)
        }
        else {
            return_data.months = Math.trunc(c_plan);
            return_data.amount = amount;
            return_data.remaining_amount = (total_amount % amount);
        }

    }
    else {
        throw new ApiError(httpStatus.BAD_REQUEST, "Your amount is high to provide the payment plan, please contact at the below number – 0032 15 690 390")
    }

    return return_data;

}

const eligibleDossierPaymentPlancheck = async (dossier_id) => {
    try{
        const { credipay_paymentplan, credipay_transaction_payments } = db;

        let dossier_data = await getDossierDetails(dossier_id);

        let payment_plan_check = await credipay_transaction_payments.findOne({
            where : {
                dossier_id : dossier_id , type : 'Payment Plan' , status :'Success'
            }
        })

        let is_already_paid = await credipay_transaction_payments.findOne({
            where : {
                dossier_id : dossier_id , type : 'Online' , status :'Success'
            }
        })
        
        if(payment_plan_check || is_already_paid){
            throw new ApiError(httpStatus.BAD_REQUEST, "You have already opted for Payment plan and its under review. Please contact at the below number – 0032 15 690 390 for more details.")
        }

        let result = await credipay_paymentplan.findOne({
            where: {
                from_price: { [Op.lte]: dossier_data?.total_pay },
                to_price: { [Op.gte]: dossier_data?.total_pay },
            }
        });

        if (!result) {
            throw new ApiError(httpStatus.BAD_REQUEST, "Your amount is high to provide the payment plan, please contact at the below number – 0032 15 690 390")
        }

        return result;
    }catch(error){
        console.log("error===========>", error);
        throw new ApiError(httpStatus.BAD_REQUEST, error.message);
    }
}


const updatelogBook = async (createbody, type, dossier_id) => {
    const { logboek, templatestreinen,dossiers,debiteurs,sequelize } = db;
    try {
        
        // let filepath = "";
        let description = "";
        let debiteur_id = "";
        let modified_by = "";

        const dossier = await dossiers.findOne({
            where: {
                id: dossier_id
            },
        });

        const debiteur = await debiteurs.findOne({
            where: {
                id : dossier.debiteur  
            },
        });
        
        if(debiteur.naam != ''){
            modified_by = debiteur.naam
        }else{
            modified_by = debiteur.firmanaam
        }

        debiteur_id = debiteur.id;
        
        if(type == 'alreadypaid'){
            console.log("sfsdfsdgsdfsdffsfd");
            
            for (let index = 0; index < createbody.datas.length; index++) {
                description = description + "The invoice number is "+createbody.datas[index].id + ',' +createbody.datas[index].date + ',' + createbody.datas[index].amount + ',' + createbody.datas[index].ibanfrom + ',' + createbody.datas[index].ibanto+","; 
            } 
            createbody.filepath ='';  
        }else if(type == 'confirm-paymentplan'){
            description = "Choose a Payment Plan yourself Re-Payment amount "+ createbody.monthly_amount +" for "+ createbody.totalmonths +" months and then another month at "+ createbody.remainingamount + " date "+createbody.paymentDate;
            createbody.filepath =''; 
        }else if(type == 'copyinvoice'){
            console.log("JYGJJHGFHFHFDFHTDHDHDHG");
            
            for (let index = 0; index < createbody.invoicelist.length; index++) {
                description = description + "The Selected Invoice is- "+ createbody.invoicelist[index]+","; 
            }
            createbody.filepath =''; 
        }else if(type == 'user'){
            description = JSON.stringify(createbody);
        }

        console.log("description=====",description);
        

        console.log("filepath" + JSON.stringify(createbody.filepath))
        let date_time = new Date();
        let date = ("0" + date_time.getDate()).slice(-2);
        let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
        let year = date_time.getFullYear();
        let hours = date_time.getHours();
        let minutes = date_time.getMinutes();
        let seconds = date_time.getSeconds();
        let currenttime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
        let createJson = {
            inserted: currenttime,
            modified: currenttime,
            modifiedby: modified_by,
            dossier: ',' + dossier_id + ',',
            omschrijving: description,
            datum: year + "-" + month + "-" + date,
            omschrijvingintern: '',
            bestand: createbody.filepath ? createbody.filepath : '',
            verwerkt: 1,
            template: 0,
            bestand2: '',
            // verwerkingsdatum:'0000-00-00',
            verwerkingsdatum: year + "-" + month + "-" + date,
            debiteur:debiteur_id,
            klant: dossier.klant,
            paginas: 0,
            bezig: 0,
            teldoor: 0,
            smsmsgid: 0,
            smsmsgidtxt: '',
            smsresponse: 0,
            smsfeedback: '',
            adres: ''
        }
        let result = await logboek.create(createJson);
        return result;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }

}

const submitPaymentplan = async (createbody, dossier_id)=>{
    const { dossiers,credipay_transaction_payments, sequelize } = db;
    // const t = await sequelize.transaction();
    try {
        let dossier_update_action = await dossiers.update({ volgendeactie: 60}, // ALARM_PAYMENTPLAN
            {
            where:{
                id : dossier_id
            }
        })

        let date_time = new Date();
        let date = ("0" + date_time.getDate()).slice(-2);
        let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
        let year = date_time.getFullYear();

        let trans_payments_json = {
            dossier_id : dossier_id,
            type : "Payment Plan",
            status : "Success",
            response : JSON.stringify(createbody),
            date : year + "-" + month + "-" + date
        }

        await credipay_transaction_payments.create(trans_payments_json);

        await updatelogBook(createbody, 'confirm-paymentplan', dossier_id);

        return "Payment plan updated Successfully";
    } catch (error) {
        console.log("errror=====",error);        
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
}

const paymentSuccess = async (data) => {
    try {
        const { logboek, dossiers, credipay_transaction_payments } = db;

        let dossier_id = "";
        let debiteur_id = "";

        if(data?.paymentRequestInformation?.remittanceInfo){
            const data_arr = data?.paymentRequestInformation?.remittanceInfo?.split("_");
            dossier_id = data_arr[0];
            debiteur_id = data_arr[1];
        }

        let dossiers_data = await dossiers.findOne({
            where: {
                id: dossier_id
            }
        })

        let date_time = new Date();
        let date = ("0" + date_time.getDate()).slice(-2);
        let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
        let year = date_time.getFullYear();
        let hours = date_time.getHours();
        let minutes = date_time.getMinutes();
        let seconds = date_time.getSeconds();
        let currenttime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds


        let trans_payments_json = {
            dossier_id : dossier_id,
            type : "Online",
            status : "Success",
            response : JSON.stringify(data),
            date : year + "-" + month + "-" + date
        }

        let trans_payments = await credipay_transaction_payments.create( trans_payments_json );

        let createJson = {
            inserted: currenttime,
            modified: currenttime,
            modifiedby: 'creditportal',
            dossier: ',' + dossier_id + ',',
            omschrijving:"Online Payment of euro - "+(data?.paymentRequestInformation?.amountInCents/100)+" is successful through Credipay portal with the transaction ID- "+ data?.paymentRequestInformation?.paymentID,
            datum:data?.paymentRequestInformation?.paymentRequestDate,
            debiteur:debiteur_id,
            klant:dossiers_data?.klant,
            omschrijvingintern:'',
            bestand:'',
            verwerkt: 1,
            template:0,
            bestand2:'',
            paginas: 0,
            bezig: 0,
            teldoor:0,
            smsmsgid: 0,
            smsmsgidtxt:'',
            smsresponse: '',
            smsfeedback:'',
            adres:'',
            verwerkingsdatum: year + "-" + month + "-" + date,
        }
        let result = await logboek.create(createJson);
        return result;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
}

const paymentError = async (data) => {

    try {
        const { logboek, dossiers, credipay_transaction_payments } = db;

        let dossier_id = "";
        let debiteur_id = "";

        if(data?.paymentRequestInformation?.remittanceInfo){
            const data_arr = data?.paymentRequestInformation?.remittanceInfo?.split("_");
            dossier_id = data_arr[0];
            debiteur_id = data_arr[1];
        }

        let dossiers_data = await dossiers.findOne({
            where: {
                id: dossier_id
            }
        })

        let date_time = new Date();
        let date = ("0" + date_time.getDate()).slice(-2);
        let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
        let year = date_time.getFullYear();
        let hours = date_time.getHours();
        let minutes = date_time.getMinutes();
        let seconds = date_time.getSeconds();
        let currenttime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds


        let trans_payments_json = {
            dossier_id : dossier_id,
            type : "Online",
            status : "Error",
            response : JSON.stringify(data),
            date : year + "-" + month + "-" + date
        }

        let trans_payments = await credipay_transaction_payments.create( trans_payments_json );
       
     
        
        let createJson = {
            inserted: currenttime,
            modified: currenttime,
            modifiedby: 'creditportal',
            dossier: ',' + dossier_id + ',',
            omschrijving:"Online Payment of euro - "+(data?.paymentRequestInformation?.amountInCents/100)+" is error through Credipay portal with the transaction ID- "+ data?.paymentRequestInformation?.paymentID,
            datum:data?.paymentRequestInformation?.paymentRequestDate,
            debiteur:debiteur_id,
            klant:dossiers_data?.klant,
            omschrijvingintern:'',
            bestand:'',
            verwerkt: 1,
            template:0,
            bestand2:'',
            paginas: 0,
            bezig: 0,
            teldoor:0,
            smsmsgid: 0,
            smsmsgidtxt:'',
            smsresponse: '',
            smsfeedback:'',
            adres:'',
            verwerkingsdatum: year + "-" + month + "-" + date,
        }
        let result = await logboek.create(createJson);
        return result;
    } catch (error) {
        console.log("error===",error);
        
        throw new ApiError(httpStatus.BAD_REQUEST,error);
    }
}

const getDossierFacturenInvoiceDetails = async (dossier_id) => {
    const { dossiers, facturen, klanten, betalingen } = db;
    try {
        // let dossier = await facturen.findAll({
        //     where:{
        //         dossier : dossier_id
        //     },
        //     attributes :[
        //         ['dossier','dossier'],
        //         ['referentie','invoice_number']
        //     ]
        // })
        let final_result = [];
        let result = await facturen.findAll({
            attributes: {
                
                include: [
                    [
                        Sequelize.literal('(select sum(aanincasso)+ sum(aanklant) as totalamount from  betalingen WHERE `factuur` = `facturen`.`id`)'),
                        'paymentdone',
                    ],
                ]},
            // include:{
            //     model: betalingen,
            // },
            where: {
                dossier: dossier_id
            },
            order: [
                ['datum', 'ASC'],
            ],
            // attributes: ['id', 'referentie', 'datum', 'hoofdsom', 'intrest', 'schadebeding', 'inningskost', 'totaal', 'betaaldincasso', 'rest','reedsbetaaldvoorincasso', 'paymentdone'],
        });

        let dossiers_data = await dossiers.findOne({
            where: {
                id: dossier_id
            }
        })
    
        let Somme_principle = 0.00;
        let Interest = 0.00;
        let Num_Interests_damages_clause = 0.00;
        let Total = 0.00;
        let Pay = 0.00;
        let Total_paid = 0.00;
        let Total_Collection_Cost = 0.00;
        result.forEach(element => {
            element =JSON.stringify(element);
            element =JSON.parse(element);

         
            let Interests_damages_clause = "--";
            let Collection_costs = "--";
            let Payments_made = "--";

            if (element?.schadebeding != '0.00') {
                Interests_damages_clause = "€ " + element?.schadebeding
                Num_Interests_damages_clause = Number(Num_Interests_damages_clause) + Number(element?.schadebeding);
            }
            if (element?.inningskost != '0.00') {
                Collection_costs = "€ " + element?.inningskost;
                Total_Collection_Cost = Number(Total_Collection_Cost) + Number(element?.inningskost);
            }
            if (element?.paymentdone != '0.00' && element?.paymentdone) {
                Payments_made = "€ " + element?.paymentdone;
                Total_paid = Number(Total_paid) + Number(element?.paymentdone);
            }
            if (element?.hoofdsom != '0.00') {
                Somme_principle = Number(Somme_principle) + Number(element?.hoofdsom);
            }
            if (element?.intrest != '0.00') {
                Interest = Number(Interest) + Number(element?.intrest);
            }
            if (element?.totaal != '0.00') {
                Total = Number(Total) + Number(element?.totaal);
            }
            if (element?.rest != '0.00') {
                Pay = Number(Pay) + Number(element?.rest);
            }
            let json = {
                "Dossier": dossier_id,
                "Invoice_Reference": element?.referentie,
                "Date_decheance": element?.datum,
                "Somme_principle": "€ " + element?.hoofdsom,
                "Interest": "€ " + element?.intrest,
                "Interests_damages_clause": Interests_damages_clause,
                "Collection_costs": Collection_costs,
                "Total": "€ " + element?.totaal,
                "Payments_made": Payments_made,
                "Pay": "€ " + (element?.totaal-element?.paymentdone).toFixed(2),
            }
            final_result.push(
                json
            );
           
        });

        return final_result
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
}

const submitQuestions = async ( Userbody, type, dossier_id)=>{
    const { dossiers, dossiermanueleitems, klanten, aansprekingen, debiteurs,facturen } = db;
    try {
        // console.log(",createbody=======",Userbody);
        
        let filepath = "";

        if (type == 'deceased') {

            let dossier_update_action = await dossiers.update({ volgendeactie: 63}, // ALARM_DECEASED
                {
                where:{  id : dossier_id }
            })

            filepath = await fileprocessor.savePublicPDFFile(Userbody.deathcertificate, Userbody.deathcertificatename, "deathCertificate",dossier_id)
            Userbody.filepath = filepath;
            await updatelogBook(Userbody, 'file', dossier_id);

        }else if (type == 'dispute') {
            
            filepath = await fileprocessor.savePublicPDFFile(Userbody.disagrementletter, Userbody.disagrementlettername,"disagrementCertificate",dossier_id)
            Userbody.filepath = filepath;
            let dossier_data = await dossiers.findOne({
                where:{
                    id : dossier_id
                }
            })

            const myDate = new Date(dossier_data.volgendeactiedatum);
            myDate.setDate(myDate.getDate() + 7);// Add 7 days
            console.log(myDate.toISOString().split('T')[0]);
            let updated_date = myDate.toISOString().split('T')[0];

            let json = {
                volgendeactie: 61,// ALARM_DISPUTE
                volgendeactiedatum:updated_date
            }

            let dossier_update_action = await dossiers.update(json,
                {
                where:{  id : dossier_id }
            })

            await updatelogBook(Userbody, 'file', dossier_id);
        }else if (type == 'alreadypaid') {

            let dossier_update_action = await dossiers.update({ volgendeactie: 62}, // ALARM_ALREADYPAID
                {
                where:{ id : dossier_id  }
            })
            await updatelogBook(Userbody, 'alreadypaid', dossier_id);
        }else if (type == 'invoice'){
            let dossier_data = await dossiers.findOne({
                where:{
                    id : dossier_id
                }
            })

            const myDate = new Date(dossier_data.volgendeactiedatum);
            myDate.setDate(myDate.getDate() + 10);// Add 10 days
            console.log(myDate.toISOString().split('T')[0]);
            let updated_date = myDate.toISOString().split('T')[0];

            let json = {
                volgendeactiedatum:updated_date
            }

            let dossier_update_action = await dossiers.update(json,
                {
                where:{  id : dossier_id }
            });

            await updatelogBook(Userbody, 'copyinvoice', dossier_id);


            let result = await dossiers.findOne({
                where: {
                    id: dossier_id
                },
                attributes: ['id', 'hoofdsom', 'intrest', 'schadebeding', 'inningskost', 'openstaandbedrag', 'klant','debiteur'],
            });

            let debiteur_data = await debiteurs.findOne({
                where : { id : result.debiteur}
            })
            let klanten_data = "";
            let title = "";
            console.log("-----------", result);
            if (result) {
                klanten_data = await klanten.findOne({
                    where: {
                        id: result?.klant
                    },
                    attributes: ['id', 'firmanaam','aanspreking','naam','voornaam']
                });

                let title = await aansprekingen.findOne({
                    where : { id : klanten_data.aanspreking}
                })
            }
            let customer_name = "";
            let name = "";
            // let 
            customer_name = title + " " + klanten_data.naam + " " + klanten_data.voornaam
            name = debiteur_data.naam+ " " +debiteur_data.voornaam;
            if(customer_name == "") {
                customer_name = klanten_data.firmanaam
            }
            if(name == ""){
                name = debiteur_data.firmanaam
            }

            let facturen_data = await facturen.findOne({
                where: { dossier : dossier_id}
            })

            let mapObj = {
                XXXKLANTAANSPREEKNAAMXXX : customer_name,
                XXXNAAMXXX : name,
                XXXDOSSIERXXX : dossier_id,
                XXXOPENSTAANDXXX : result.openstaandbedrag,
                XXXFACTURENOVERZICHTXXX : facturen_data.referentie + ", " + facturen_data.datum + ", " + facturen_data.hoofdsom,
                XXXDOSSIERBEHEERDERXXX : name

            }

            emailService.emailsendBytitle(mapObj, 'Opvragen ontbrekende FACTUUR',debiteur_data.taal,debiteur_data.email);
        }
    } catch (error) {
        console.log("error===",error);
        
        throw new ApiError(httpStatus.BAD_REQUEST,error);
    }
}


module.exports = {
    getDossierDetails,
    getDossierFacturenDetails,
    getDossierPaymentPlanCalculation,
    eligibleDossierPaymentPlancheck,
    updatelogBook,
    submitPaymentplan,
    paymentSuccess,
    paymentError,
    getDossierFacturenInvoiceDetails,
    submitQuestions
}