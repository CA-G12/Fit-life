const jwt=require('jsonwebtoken')
require('dotenv').config();
const jtwFun=(info,res)=>{
  jwt.sign(info,process.env.SECRET_KEY,(err,data)=>{
    if(err){
      console.log(err);
    }
    res.cookie('token',data)     
    res.send({nn:"bbbb"})  
    
    })
}
module.exports=jtwFun
