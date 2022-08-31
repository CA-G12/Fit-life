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
const auth = (req, res)=>{
  const {token} = req.cookie 
  jwt.verify(token ,process.env.SECRET_KEY, (err,data)=>{
    if (err){
      res.json(err)
    }else{
      res.status(302).redirect('/')
    }
  })
}

module.exports={ jtwFun, auth }
