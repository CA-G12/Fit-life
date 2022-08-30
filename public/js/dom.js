const nameSignUp=document.querySelector('.name');
const emailSignUp=document.querySelector('.email');
const passwordSignUp=document.querySelector('.password');
const confirm=document.querySelector('.confirm')
const signUpBtn=document.querySelector('.signUpBtn')

signUpBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  sginUp(nameSignUp,emailSignUp,passwordSignUp,confirm)
})