const dossierDetailService = require("../services/dossier-details.service")
const httpStatus = require('http-status');

const getAllDossierList = async (req, res) => {
    try {
        const result = await dossierDetailService.getDossierDetails(req.user?.dossier_id);
        res.status(httpStatus.OK).send([result]);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
};
const getDossierFacturenDetails = async (req, res) => {
    try {
        const result = await dossierDetailService.getDossierFacturenDetails(req.user?.dossier_id);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
};
const getDossierPaymentPlanCalculation = async (req, res) => {
    try {
        console.log('returm')
        const result = await dossierDetailService.getDossierPaymentPlanCalculation(req.user?.dossier_id, req.params.amount);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};
const eligibleDossierPaymentPlancheck = async (req, res) => {
    try {
        const result = await dossierDetailService.eligibleDossierPaymentPlancheck(req.user?.dossier_id);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};
const updatelogBook = async (req, res) => {
    try {
        const result = await dossierDetailService.updatelogBook(req.body,req.params.type,req.user?.dossier_id);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};

const submitPaymentplan = async (req, res) => {
    try {
        const result = await dossierDetailService.submitPaymentplan(req.body,req.user?.dossier_id);
        res.status(httpStatus.OK).send({message:result});
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};

const paymentSuccess = async (req, res) => {
    try {
        const result = await dossierDetailService.paymentSuccess(req.body);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};

const paymentError = async (req, res) => {
    try {
        const result = await dossierDetailService.paymentError(req.body);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};

const getDossierFacturenInvoiceDetails = async (req, res) => {
    try {
        const result = await dossierDetailService.getDossierFacturenInvoiceDetails(req.user?.dossier_id);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
};

module.exports = {
    getAllDossierList,
    getDossierFacturenDetails,
    getDossierPaymentPlanCalculation,
    eligibleDossierPaymentPlancheck,
    updatelogBook,
    submitPaymentplan,
    paymentSuccess,
    paymentError,
    getDossierFacturenInvoiceDetails
}