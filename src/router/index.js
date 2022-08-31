const { signUpPage, signUp, signInPage, signIn } = require('../controllers')
const subRoutes = require('./subscriptions')
const router = require('express').Router();
router.post('/sign-up-form', signUp);
router.post('/Sign-in-form', signIn);
router.get('/sign-up', signUpPage);
router.get('/Sign-in', signInPage);

router.use('/api', subRoutes);

module.exports = router;
