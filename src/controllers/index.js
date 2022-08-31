const UserQueries = require("../database/queries/UserQueries")
const {signUpPage,signInPage}=require('./pages')
const signUp=require('./signUp')
const signIn=require('./signIn')
const homePage=require('./pages/Home')

module.exports={
  signUpPage,signUp,signInPage,signIn,homePage
}