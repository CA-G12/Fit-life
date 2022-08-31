const jwt=require('jsonwebtoken')
require('dotenv').config();

const jtwFun=(info,res)=>{
  jwt.sign(info,process.env.SECRET_KEY,(err,data)=>{
    console.log(data);
    res.cookie('token',data)     
    res.send()  
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
