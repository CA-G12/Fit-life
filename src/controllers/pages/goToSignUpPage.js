const path = require('path');

const signUpPage=(req,res)=>{
  res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'signUp.html'));
}

module.exports=signUpPage