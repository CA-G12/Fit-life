const { signUpPage, signUp, signInPage, signIn,homePage } = require('../controllers')
const subRoutes = require('./subscriptions')
const router = require('express').Router();
const {auth} = require('../middelWere')

router.post('/sign-up-form', signUp);
router.post('/Sign-in-form', signIn);
router.get('/sign-up', signUpPage);
router.get('/Sign-in', signInPage);
router.use('/api', subRoutes);
router.get('/home',auth,homePage);
module.exports = router;
