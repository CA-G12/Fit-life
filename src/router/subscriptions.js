const router = require('express').Router();
const { activate, disActivate, newSub, getAll } = require('../controllers')

router.get('/subscriptions', getAll);
router.post('/newsubscriptions', newSub);
router.get('/subscriptionact/:id', activate);
router.get('/subscriptionsdis/:id', disActivate);

module.exports = router;