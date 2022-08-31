const { validateSignIn } = require('../config/validate')
const bcrypt = require("bcryptjs");
const {jtwFun}=require('../middelWere')

const jwt=require('jsonwebtoken')
require('dotenv').config();
const {PlayerQueries}=require('../database/queries')
const player = new PlayerQueries();

const signIn = (req, res) => {
    const { email, password } = req.body
    validateSignIn(req.body)
    console.log(req.body)
    .then(data=>player.getUserById(data.email)
    .then(re=>{
      if(re.rows[0]){res.json({mas:'email is exist'})}
      else{
        bcrypt.hash(password,12).then(hashPassword=>player.storeUser(email,hashPassword)
        .then(id=>jtwFun(id.rows[0],res)))
      }
    }))
    .catch(err => console.log(err));
    // res.status(30).redirect('/')
};

module.exports = signIn;