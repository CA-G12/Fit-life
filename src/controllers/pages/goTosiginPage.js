const path = require('path');

const signInPage=(req,res)=>{
  res.sendFile(path.join(__dirname, '..', '..','..', 'public','pages' ,'signin.html'));
}

module.exports=signInPage