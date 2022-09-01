const { signUpPage, signInPage } = require('./pages')
const signUp = require('./signUp')
const signIn = require('./signIn')
const homePage=require('./pages/Home')
const signOut=require('./signOut')
const { activate, disActivate, newSub, getAll } = require('./subscriptions')
const userRoute = require('./user')


module.exports = {
  signUpPage, signUp, signInPage, signIn, activate, disActivate, newSub, getAll, homePage,signOut,userRoute
}