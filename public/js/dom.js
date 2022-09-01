const cards=document.getElementsByClassName('cards')[0]
const username=document.getElementById('username')
const signOutBtn=document.querySelector('.sign-outBtn')
fetch('/username').then(res=>res.json()).then(res=>
 {   if(res.id){
        username.textContent = res.name
    }}
   ).catch(err=>err.json())
getClasses()


function createCard(data){
 data.map(ele=>{
    const classCard = document.createElement('div')
    classCard.setAttribute('class', 'class-card')

    const figure = document.createElement('figure')
    figure.setAttribute('class','card-banner img-holder')
    figure.style.height ='240px'
    figure.style.width ='416px'

    const classImg = document.createElement('img')
    classImg.setAttribute('class','img-cover')
    classImg.style.width='416px';
    classImg.style.height='240px';
    classImg.src = ele.image
    figure.appendChild(classImg)

    const cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')

    const titleWrapper = document.createElement('div')
    titleWrapper.setAttribute('class', 'title-wrapper')
    
    const titleImg = document.createElement('img')
    titleImg.setAttribute('class','title-icon')
    titleImg.src= '../assets/images/class-icon-1.png'
    titleImg.style.width='52';
    titleImg.style.height='52';

    const a =  document.createElement('a')
    a.setAttribute('class','card-title')
    a.href='#'
    a.textContent="fitness"

    const h3 =  document.createElement('h3')
    h3.setAttribute('class','h3')
    h3.appendChild(a)
    titleWrapper.append(titleImg, h3)
    
    const p =  document.createElement('p')
    p.textContent = ele.description
    p.setAttribute('class','card-text')

    const detailsCard = document.createElement('div')
    detailsCard.setAttribute('class', 'details-card')

    const coachDiv= document.createElement('div')
    coachDiv.setAttribute('class', 'coach-name')

    const coach =  document.createElement('h3')
    coach.setAttribute('class','h3')
    coach.textContent='Coach '

    const coachName =  document.createElement('span')
    coachName.textContent = ele.name
    coachDiv.append(coach, coachName)

    const priceDiv= document.createElement('div')
    priceDiv.setAttribute('class', 'price')

    const price =  document.createElement('h3')
    price.setAttribute('class','h3')
    price.textContent='Price '

    const priceValue =  document.createElement('span')
    priceValue.textContent=`${ele.price} $`
    priceDiv.append(price, priceValue)

    const addClass =  document.createElement('a')
    addClass.setAttribute('class','btn btn-secondary')
    addClass.textContent='+'
    addClass.addEventListener('click',()=>{
     const duration = prompt('duration')
      fetch('/api/newsubscriptions',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            duration : duration,
            class_id:ele.id
        })
    
      }).then(res=>res.json()).then(err=>err.json())
 
    })
    
    detailsCard.append(coachDiv,priceDiv,addClass)

    cardContent.append(titleWrapper,p ,detailsCard)
    classCard.append(figure,cardContent)

    cards.append(classCard)
})}

function getClasses(){
    fetch('/classes').then(res=>res.json()).then(data=>createCard(data))
}


signOutBtn.addEventListener('click',()=>{
    fetch( '/Sign-out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
    
      }).then(res=> res.json()).then(err=>err.json())
    })

