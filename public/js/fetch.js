const msg = document.querySelector('.msg')

const sginUp = (name, email, password, confirm) => {

  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
    confirm: confirm.value
  }
  fetch('/sign-up-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),

  })
    .then(res => res.json()).then(res => {
      if (res.msg) {
        msg.textContent = res.msg
      } else {
        window.location.href = '/home'

      }
    })

}


const signin = (email, password) => {

  const credentials = {
    email: email,
    password: password
  }

  fetch('/Sign-in-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),

  }).then(res => res.json()).then(res => {
    if (res.msg) {
      msg.textContent = res.msg
    } else { window.location.href = '/home' }
  })

}

const getUserSubscriptions = () => {
  fetch('/api/subscriptions')
    .then(res => res.json())
    .then(rendrData)
}

const changeSubsicriptionStatus = (status, id) => {
  const link = status == 0 ? 'subscriptionsdis' : 'subscriptionact'
  fetch(`/api/${link}/${id}`)
    .then(getUserSubscriptions)
    .then(console.log)
}