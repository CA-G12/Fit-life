const UserQueries = require("../database/queries/UserQueries")
const {signUpPage,signInPage}=require('./pages')
const signUp=require('./signUp')
const signIn=require('./signIn')
UserQueries.getUserById

module.exports={
  signUpPage,signUp,signInPage,signIn
}