const siginInPassword=document.querySelector('#password');
const siginInEmail=document.querySelector('#email')
const siginInBtn=document.querySelector('#signinBtn')

siginInBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    signin(siginInEmail.value , siginInPassword.value)
  })