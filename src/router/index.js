const {signUpPage,signUp}=require('../controllers')
const router = require('express').Router();
router.post('/sign-up-form',signUp)
router.get('/sign-up',signUpPage)

module.exports = router;
