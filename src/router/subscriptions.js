const router = require('express').Router();
const { activate, disActivate, newSub, getAll } = require('../controllers')

router.get('/subscriptions', getAll);
router.post('/subscriptions', newSub);
router.patch('/subscriptions', activate);
router.delete('/subscriptions', disActivate);

module.exports = router;