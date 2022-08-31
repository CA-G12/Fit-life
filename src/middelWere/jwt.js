const jwt=require('jsonwebtoken')
require('dotenv').config();
const jtwFun=(info,res)=>{
  jwt.sign(info,process.env.SECRET_KEY,(err,data)=>{
    console.log(data);
    res.cookie('token',data)     
    res.send()  
    })
}
module.exports=jtwFun
