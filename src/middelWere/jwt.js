const jwt=require('jsonwebtoken')
require('dotenv').config();

const jwtFun=(info,res)=>{
  jwt.sign(info,process.env.SECRET_KEY,(err,data)=>{
    if(err){
      console.log(err);
    }
    res.cookie('token',data)     
    res.send({nn:"bbbb"})  
    
    })
}
const auth = (req, res, next)=>{
  const {token} = req.cookies
  jwt.verify(token ,process.env.SECRET_KEY, (err,data)=>{
    if (!err){
      req.user=data
    }
    next();
  })
}



module.exports={jwtFun, auth }
