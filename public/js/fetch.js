const msg=document.querySelector('.msg')
const fetchData=(method, endpoint, data)=>{
  return fetch(endpoint, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),

  })
}

const sginUp=(name,email,password,confirm)=>{

  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
    confirm: confirm.value
  }

  fetchData('POST', '/sign-up-form', userInfo).then(res=>res.json()).then(res=>{
    console.log(res);
    if(res.msg){
      msg.textContent=res.msg
    }else{
      window.location.href='/home'

    }
  })
}


const signin = (email , password)=>{

  const credentials={
    email :email,
    password:password
  }

  fetchData('POST','/Sign-in-form', credentials).then(res=> res.json()).then(res=>{
    if(res.msg){  
          msg.textContent=res.msg
    }else{window.location.href='/home'}
  })

}