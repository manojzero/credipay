const db = require("../config/dbconfig");
const Sequelize = require('sequelize');
const ApiError = require('../utils/ApiError');
const httpStatus = require("http-status");
const { Op, where } = require("sequelize");
const fileprocessor = require("../utils/fileprocessor")
const config=require('../config/config');

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
        let final_result = [{
            'id': result?.id,
            'hoofdsom': "€ " + result?.hoofdsom ,
            'intrest': "€ " + result?.intrest ,
            'schadebeding': "€ "+ result?.schadebeding ,
            'inningskost':  "€ " +result?.inningskost ,
            'openstaandbedrag': "€ "+ result?.openstaandbedrag ,
            'klant': result1?.id,
            'firmanaam': result1?.firmanaam,
        }];
        return final_result;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
}
const getDossierFacturenDetails = async (dossier_id) => {
    try {
        let final_result = [];
        const { dossiers, facturen, klanten } = db;
        let result = await facturen.findAll({
            where: {
                dossier: dossier_id
            },
            order: [
                ['datum', 'ASC'],
            ],
            attributes: ['id', 'referentie', 'datum', 'hoofdsom', 'intrest', 'schadebeding', 'inningskost', 'totaal', 'betaaldincasso', 'rest','reedsbetaaldvoorincasso'],
        });
        let Somme_principle = 0.00;
        let Interest = 0.00;
        let Num_Interests_damages_clause = 0.00;
        let Total = 0.00;
        let Pay = 0.00;
        result.forEach(element => {
            let Interests_damages_clause = "--";
            let Collection_costs = "--";
            let Payments_made = "--";

            if (element?.schadebeding != '0.00') {
                Interests_damages_clause = "€ " + element?.schadebeding
                Num_Interests_damages_clause = Number(Num_Interests_damages_clause) + Number(element?.schadebeding);
            }
            if (element?.inningskost != '0.00') {
                Collection_costs = "€ " + element?.inningskost
            }
            if (element?.reedsbetaaldvoorincasso != '0.00') {
                Payments_made = "€ " + element?.reedsbetaaldvoorincasso
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
                "Pay": "€ " + element?.rest,
            }
            final_result.push(
                json
            );
            console.log("sooooooooooos" + Somme_principle);
        });
        if (Num_Interests_damages_clause == 0.00) {
            Num_Interests_damages_clause = "--"
        } else {
            Num_Interests_damages_clause = '€ ' + Num_Interests_damages_clause.toFixed(2)
        }
        let dossierTotalDetails = [
            { Dossier: "SUB-TOTAL", Somme_principle: '€ ' + Somme_principle.toFixed(2), Interest: '€ ' + Interest.toFixed(2), Interests_damages_clause: Num_Interests_damages_clause, Collection_costs: '--', Total: '€ ' + Total.toFixed(2), Payments_made: '--', Pay: '€ ' + Pay.toFixed(2) },
            { Dossier: "Payments received during the recovery procedure", Somme_principle: '', Interest: '', Interests_damages_clause: '', Collection_costs: '', Total: '', Payments_made: '', Pay: '--' },
            { Dossier: "A PAYER", Somme_principle: '', Interest: '', Interests_damages_clause: '', Collection_costs: '', Total: '', Payments_made: '', Pay: '€ ' + Pay.toFixed(2) },
        ]

        let payment_link = config.paymentConfig.payment_url +"/execute?requesterVAT="+ config.paymentConfig.vat_number+"&language=XXXlanguageXXX&remittanceInfo=test209&amountInCents="+(Pay.toFixed(2)*100)+"&confirmationURL="+ config.paymentConfig.payment_success_url+"&errorURL="+config.paymentConfig.payment_error_url+"&cancelURL="+config.paymentConfig.payment_cancel_url;
        let paymentbutton_link = config.paymentConfig.payment_url +"?requesterVAT="+ config.paymentConfig.vat_number+"&language=XXXlanguageXXX&remittanceInfo=test209&amountInCents="+(Pay.toFixed(2)*100)+"&confirmationURL="+ config.paymentConfig.payment_success_url+"&errorURL="+config.paymentConfig.payment_error_url+"&cancelURL="+config.paymentConfig.payment_cancel_url;


        let final_data = [{
            "dossierDetails": final_result,
            "dossierTotalDetails": dossierTotalDetails,
            "Outstanding_Balance": '€ ' + Pay.toFixed(2),
            "paymentLink": payment_link,
            "paymentButtonLink":paymentbutton_link
        }]
        return final_data;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
}


const getDossierPaymentPlanCalculation = async (total_amount, amount) => {

    console.log("total_amount", typeof (total_amount));
    console.log("amount", typeof (amount));
    const { credipay_paymentplan } = db;

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

            min_amount = Math.round(min_amount);

            if (Number(total_amount) < Number(amount)) {

                throw new ApiError(httpStatus.BAD_REQUEST, "Amount entered cannot be more than total amount")

            }

            throw new ApiError(httpStatus.BAD_REQUEST, "Amount entered cannot be assigned with the payment plan, the minimum amount is € " + min_amount)
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
const eligibleDossierPaymentPlancheck = async (amount) => {
    const { credipay_paymentplan } = db;
    let result = await credipay_paymentplan.findOne({
        where: {
            from_price: { [Op.lte]: amount },
            to_price: { [Op.gte]: amount },
        }
    })
    if (!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Your amount is high to provide the payment plan, please contact at the below number – 0032 15 690 390")
    }
    return result;
}
const updatelogBook = async (createbody, dossier_id) => {
    try {
        const { logboek, templatestreinen } = db;
        

        let filepath = "";
        if (createbody.deathcertificate) {
            filepath = await fileprocessor.savePublicPDFFile(createbody.deathcertificate, createbody.deathcertificatename)
            let code = "ALARM_DECEASED";
            let templatestreinenCode = await templatestreinen.findOne({
                where: {
                    code: code
                }
            })
            console.log("templatestreinenCode====", templatestreinenCode);
        }
        if (createbody.disputeletter) {
            filepath = await fileprocessor.savePublicPDFFile(createbody.disputeletter, createbody.disputelettername)
            let code = "ALARM_DISPUTE";
            let templatestreinenCode = await templatestreinen.findOne({
                where: {
                    code: code
                }
            })
            console.log("templatestreinenCode====", templatestreinenCode);
        }
        if (createbody.disagrementletter) {
            filepath = await fileprocessor.savePublicPDFFile(createbody.disagrementletter, createbody.disagrementlettername)
            let code = "ALARM_ALREADYPAID";
            let templatestreinenCode = await templatestreinen.findOne({
                where: {
                    code: code
                }
            })
            console.log("templatestreinenCode====", templatestreinenCode);
        }
        console.log("filepath" + JSON.stringify(filepath))
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
            modifiedby: 'creditportal',
            dossier: ',' + dossier_id + ',',
            omschrijving: ',' + createbody.dateOfBirth + ',' + createbody.amount + ',' + createbody.ibanFrom + ',' + createbody.ibanTo + ',',
            datum: '0000-00-00',
            bestand: filepath ? filepath : ' ',
            verwerkt: ' ',
            template: ' ',
            bestand2: ' ',
            klant: ' ',
            paginas: ' ',
            bezig: ' ',
            teldoor: ' ',
            smsmsgid: ' ',
            smsmsgidtxt: ' ',
            smsresponse: ' ',
            smsfeedback: ' ',
            adres: ' ',
            omschrijvingintern: ' '
        }
        let result = await logboek.create(createJson, {});
        return result;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }

}

module.exports = {
    getDossierDetails,
    getDossierFacturenDetails,
    getDossierPaymentPlanCalculation,
    eligibleDossierPaymentPlancheck,
    updatelogBook
}