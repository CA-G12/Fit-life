const UserQueries = require("../database/queries/UserQueries")
const {signUpPage}=require('./pages')
const signUp=require('./sginUp')
UserQueries.getUserById

module.exports={
  signUpPage,signUp
}