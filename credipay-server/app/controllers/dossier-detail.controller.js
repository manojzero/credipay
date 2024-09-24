const dossierDetailService = require("../services/dossier-details.service")
const httpStatus = require('http-status');

const getAllDossierList = async (req, res) => {
    try {
        const result = await dossierDetailService.getDossierDetails(req.params.dossier_id);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
};
const getDossierFacturenDetails = async (req, res) => {
    try {
        console.log('returm')
        const result = await dossierDetailService.getDossierFacturenDetails(req.params.dossier_id);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
};
const getDossierPaymentPlanCalculation = async (req, res) => {
    try {
        console.log('returm')
        const result = await dossierDetailService.getDossierPaymentPlanCalculation(req.params.totalamount, req.params.amount);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};
const eligibleDossierPaymentPlancheck = async (req, res) => {
    try {
        const result = await dossierDetailService.eligibleDossierPaymentPlancheck(req.params.totalamount);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};
const updatelogBook = async (req, res) => {
    try {
        const result = await dossierDetailService.updatelogBook(req.body,req.params.dossier_id);
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
};
module.exports = {
    getAllDossierList,
    getDossierFacturenDetails,
    getDossierPaymentPlanCalculation,
    eligibleDossierPaymentPlancheck,
    updatelogBook
}