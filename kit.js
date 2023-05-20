const input_element = document.querySelector('#items')
let kit = [
    {
        name:'kit1',
        price:'450,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen1.png',
        shop:'Commercial Avenue shed 385'
    },
    {
        name:'kit2',
        price:'250,000frs',
        location:'Douala',
        image:'./Defence/Images/kitchen2.jpeg',
        shop:'Marche Central'
    },
    {
        name:'kit3',
        price:'200,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen3.jpeg',
        shop:'Commercial Avenue shed 380'
    },
    {
        name:'kit4',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen4.jpeg',
        shop:'Commercial Avenue shed 375'
    },
    {
        name:'kit5',
        price:'80,000frs',
        location:'Yaounde',
        image:'./Defence/Images/kitchen5.jpeg',
        shop:'Damas'
    },
    {
        name:'kit6',
        price:'250,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen6.png',
        shop:'Commercial Avenue shed 385'
    },
    {
        name:'kit7',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen7.jpg',
        shop:'Commercial Avenue shed 129'
    },
    {
        name:'kit8',
        price:'100,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen8.jpeg',
        shop:'Commercial Avenue shed 385' 
    },
    {
        name:'kit9',
        price:'250,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen9.jpg',
        shop:'Commercial Avenue shed 283'
    },
]

function createImages(){
//     let added_img = 0

//     kit.forEach(img => {
//         if (added_img <= kit.length){
//             input_element.innerHTML += `<div class="item">
//             <div class = 'profile'>
//             <img src='${img.image}' alt='profile'></div>
//             <span>
//             <ion-icon name="bookmark"></ion-icon>
//         </span>
//             <h3>Price:${img.price}</h3>
//             <h3>location:${img.location}</h3>
//             <h3>Shop Location:${img.shop}</h3>
//             </div>`

//         }
        
//     })
//     added_image++

for (let index = 0; index < kit.length; index++) {
    let names = kit[index].name;
    let div = input_element.appendChild(document.createElement('div'))
    //.appendChild(document.createElement('div'))
    let div2 = div.appendChild(document.createElement('div'));
    div.setAttribute('id', names)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    div2.innerHTML = `<img src='${kit[index].image}' alt='profile'>`
    let span = document.createElement('span')
    let h3 = document.createElement('h3')
    let h2 = document.createElement('h3')
    let h4 = document.createElement('h3')
    h2.setAttribute('id', 'price')
    h2.innerHTML = `Price:${kit[index].price}`
    h3.innerHTML = ` location:${kit[index].location}`
    h4.innerHTML = `Shop Location:${kit[index].shop}  `
    span.appendChild(document.createElement('ion-icon'))
    let h44 = div2.insertAdjacentElement('afterend', h4)
    let h32 = div2.insertAdjacentElement('afterend', h3)
    let h22 = div2.insertAdjacentElement('afterend', h2)
    let span2 = div2.insertAdjacentElement('afterend', span)
    span2.innerHTML = `<ion-icon name="bookmark"></ion-icon>`
   div.classList.add('item')

         
         div.addEventListener('click', e =>{
             span.style.color = 'white'
            
    })
}

}
createImages()

