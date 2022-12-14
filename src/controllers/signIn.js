const { validateSignIn } = require('../config/validate')

const bcrypt = require("bcryptjs");
const {jwtFun}=require('../middelWere')
const {PlayerQueries}=require('../database/queries')
const player = new PlayerQueries();
const signIn = (req,res) => {
    const {email,password}=req.body
    validateSignIn(req.body)
 .then(data=> player.getUserById(email)
    .then(data=>data.rows.length==0?res.json({msg:'email is not exist'}):bcrypt.compare(password,data.rows[0].hashpassword)
    .then(truthy=>{
        if(truthy){
            player.getUserById(email).then(data=>{jwtFun(data.rows[0],res)
            })
            // .then(re=>res.json({b:"ddd"}))
        }else{
            res.json({msg:'password is false'})
        }
    })
)).catch(err=>res.json(err[0]))
};

module.exports = signIn;