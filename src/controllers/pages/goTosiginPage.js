const path = require('path');

const signInPage=(req,res)=>{
  if (!req.user)
    res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'signin.html'));
  else{
    res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'home.html'));
  }
}

module.exports=signInPage