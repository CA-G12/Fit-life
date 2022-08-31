const path = require('path');

const signUpPage=(req,res)=>{
  if(!req.user)
  res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'signUp.html'));
  else{
    res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'home.html'));
  }
}

module.exports=signUpPage