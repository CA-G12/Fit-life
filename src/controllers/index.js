const UserQueries = require("../database/queries/UserQueries")
const homePage=require('./pages/Home')
const { signUpPage, signInPage } = require('./pages')
const signUp = require('./signUp')
const signIn = require('./signIn')
UserQueries.getUserById

const { activate, disActivate, newSub, getAll } = require('./subscriptions')

module.exports = {
  signUpPage, signUp, signInPage, signIn, activate, disActivate, newSub, getAll, homePage
}