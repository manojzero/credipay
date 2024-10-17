const express = require('express');
const dossierController = require('../controllers/dossier-detail.controller');
const router = express.Router();
const auth = require('../middleware/auth')


router.get('/dossier-details', auth, dossierController.getAllDossierList);
router.get('/dossier-facturen-details', auth, dossierController.getDossierFacturenDetails);
router.get('/get-dossier-payment-plan-calculation/:amount', auth, dossierController.getDossierPaymentPlanCalculation);
router.get('/eligible-dossier-payment-plan-check', auth, dossierController.eligibleDossierPaymentPlancheck);
router.post('/update-logbook/:type', auth, dossierController.updatelogBook);
router.get('/dossier-facturen-invoice-details', auth, dossierController.getDossierFacturenInvoiceDetails);
router.post('/submit-payment-plan', auth, dossierController.submitPaymentplan);

router.post('/payment-success',  dossierController.paymentSuccess);
router.post('/payment-error',  dossierController.paymentError);


module.exports = router;