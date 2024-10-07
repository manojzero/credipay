const express = require('express');
const dossierController = require('../controllers/dossier-detail.controller');
const router = express.Router();
const auth = require('../middleware/auth')


router.get('/dossier-details/:dossier_id', auth, dossierController.getAllDossierList);
router.get('/dossier-facturen-details/:dossier_id', auth, dossierController.getDossierFacturenDetails);
router.get('/get-dossier-payment-plan-calculation/:totalamount/:amount', auth, dossierController.getDossierPaymentPlanCalculation);
router.get('/eligible-dossier-payment-plan-check/:totalamount', auth, dossierController.eligibleDossierPaymentPlancheck);
router.post('/update-logbook/:dossier_id', auth, dossierController.updatelogBook);

router.post('/payment-success',  dossierController.paymentSuccess);
router.post('/payment-error',  dossierController.paymentError);


module.exports = router;