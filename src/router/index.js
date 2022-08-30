const {signUpPage,signUp,signInPage,signIn}=require('../controllers')

const router = require('express').Router();
router.post('/sign-up-form',signUp);
router.post('/Sign-in-form',signIn);
router.get('/sign-up',signUpPage);
router.get('/Sign-in',signInPage);

module.exports = router;
