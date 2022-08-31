const path = require('path');

const homePage=(req,res)=>{
  if(req.user)
    res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'home.html'));
  else{
    res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'signin.html'));
  }
}
  module.exports= homePage