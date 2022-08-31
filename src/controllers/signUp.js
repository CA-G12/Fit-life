const { validateRegister } = require('../config/validate')
const bcrypt = require("bcryptjs");
const {jtwFun}=require('../middelWere')

const jwt=require('jsonwebtoken')
require('dotenv').config();
const {PlayerQueries}=require('../database/queries')
const player = new PlayerQueries();

const signUp = (req, res) => {
  const {name,email,password}=req.body
  validateRegister(req.body)
  .then(data=>player.getUserById(data.email)
  .then(re=>{
    if(re.rows[0]){res.json({mas:'email is exist'})}
    else{
      bcrypt.hash(password,12).then(hashPassword=>player.storeUser(name,email,hashPassword)
      .then(id=>jtwFun(id.rows[0],res)))
    }
  }))
  //   .then(/* Checking, Hashing */)
    .catch(err => console.log(err));
}

module.exports = signUp