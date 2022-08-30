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

  const userInfo={
    name:name.value,
    email:email.value,
    password:password.value,
    confirm:confirm.value
  }
  fetch('/sign-up-form', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),

  })

  console.log(userInfo);
}


const signin = (email , password)=>{

  const credentials={
    email :email,
    password:password
  }

  fetchData('POST','/Sign-in-form', credentials)

}