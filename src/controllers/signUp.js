const { validateRegister } = require('../config/validate')
const bcrypt = require("bcryptjs");
const {jwtFun}=require('../middelWere')
const {PlayerQueries}=require('../database/queries')
const player = new PlayerQueries();

const signUp = (req, res) => {
  const {name,email,password}=req.body
  validateRegister(req.body)
  .then(data=>player.getUserById(email))
  .then(re=>{
console.log(11111);
    
    if(re.rows[0]){res.json({msg:'email is exist'})}
    else{
      bcrypt.hash(password,12).then(hashPassword=>player.storeUser(name,email,hashPassword)
      .then(id=>{
        jwtFun(id.rows[0],res)
      }))
    }
  })
  //   .then(/* Checking, Hashing */)
    .catch(err => res.json(err[0]));
}

module.exports = signUp