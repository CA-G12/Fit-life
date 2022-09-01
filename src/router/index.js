const { signUpPage, signUp, signInPage, signIn,homePage,signOut, userRoute} = require('../controllers')
const subRoutes = require('./subscriptions')
const {userName,showclass} = require('./getQueries')
const router = require('express').Router();
const {auth} = require('../middelWere')

router.post('/sign-up-form', signUp);
router.post('/Sign-in-form', signIn);
router.get('/sign-up', signUpPage);
router.get('/Sign-in', signInPage);
router.use('/api', subRoutes);
router.get('/home',auth,homePage);
router.get('/username',auth,userName);
router.get('/classes',showclass);
router.post('/Sign-out',signOut)
router.use('/users', userRoute);

router.get('/Sign-out',(req,res)=>{
  res.redirect('/')
})
module.exports = router;
