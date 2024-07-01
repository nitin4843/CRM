const express = require('express');

const router = express.Router();

const crmController = require('../controllers/crm');
const isAuth = require('../util/is-auth');

router.get('/dashboard', isAuth, crmController.getIndex);

// ui-features
router.get('/ui-features/buttons', isAuth, crmController.getButtons);

router.get('/ui-features/dropdowns', isAuth, crmController.getDropdowns);

router.get('/ui-features/typography', isAuth, crmController.getTypography);


router.get('/forms/basic_elements', isAuth, crmController.getForms);

router.get('/tables/basic-table', isAuth, crmController.getTable);

router.get('/charts/chartjs', isAuth, crmController.getCharts);

router.get('/icons/font-awesome', isAuth, crmController.getIcons);

//Sample Pages
router.get('/samples/error-404', isAuth, crmController.getError404);

router.get('/samples/error-500', isAuth, crmController.getError500);

router.get('/samples/blank-page', isAuth, crmController.getBlankPage);


router.get('/docs/documentation', isAuth, crmController.getDocumentation);

module.exports = router;