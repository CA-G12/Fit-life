const {signUpPage,signUp,signInPage,signIn ,homePage}=require('../controllers')
const {auth} = require('../middelWere')

const router = require('express').Router();
router.post('/sign-up-form',signUp);
router.post('/Sign-in-form',signIn);
router.get('/sign-up',signUpPage);
router.get('/Sign-in' ,signInPage);
router.get('/home',auth,homePage);
module.exports = router;
