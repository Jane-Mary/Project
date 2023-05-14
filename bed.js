const input_element = document.querySelector('#items')
let bed = [
    {
        name:'bed1',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/chambre1.jpg',
        shop:'Commercial Avenue shed 385'
    },
    {
        name:'bed2',
        price:'450,000frs',
        location:'Douala',
        image:'./Defence/Images/chambre2.jpg',
        shop:'Marche Central'
    },
    {
        name:'bed3',
        price:'200,000frs',
        location:'Bamenda',
        image:'./Defence/Images/chambre3.jpg',
        shop:'Commercial Avenue shed 385'
    },
    {
        name:'bed4',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/chambre4.jpg',
        shop:'Commercial Avenue shed 364'
    },
    {
        name:'bed5',
        price:'180,000frs',
        location:'Yaounde',
        image:'./Defence/Images/chambre5.jpg',
        shop:'Damas'
    },
    {
        name:'bed6',
        price:'150,000frs',
        location:'Bamenda',
        image:'./Defence/Images/chambre6.jpg',
        shop:'Commercial Avenue shed 385'
    },
    {
        name:'bed7',
        price:'120,000frs',
        location:'Bamenda',
        image:'./Defence/Images/chambre7.jpg',
        shop:'Commercial Avenue shed 325'
    },
    {
        name:'bed8',
        price:'80,000frs',
        location:'Bamenda',
        image:'./Defence/Images/chambre8.jpg',
        shop:'Commercial Avenue shed 213'
    },
    {
        name:'bed9',
        price:'70,000frs',
        location:'Bamenda',
        image:'./Defence/Images/chambre 9.jpg',
        shop:'Commercial Avenue shed 149'
    },
]

function createImages(){
    // let added_img = 0

    // bed.forEach(img => {
    //     if (added_img <= bed.length){
    //         input_element.innerHTML += `<div class="item">
    //         <div class = 'profile'>
    //         <img src='${img.image}' alt='profile'></div>
    //         <span>
    //         <ion-icon name="bookmark"></ion-icon>
    //     </span>
    //         <h3>Price:${img.price}</h3>
    //         <h3>location:${img.location}</h3>
    //         <h3>Shop Location:${img.shop}</h3>
    //         </div>`

    //     }
        
    // })
    // added_image++
    for (let index = 0; index <bed.length; index++) {
        let div = input_element.appendChild(document.createElement('div'))
            .appendChild(document.createElement('div'))
        div.innerHTML = `<img src='${bed[index].image}' alt='profile'>`
        let span = document.createElement('span')
        let h3 = document.createElement('h3') 
        h3.innerHTML = `Price:${bed[index].price} 
        location:${bed[index].location}
        Shop Location:${bed[index].shop}  `
        span.appendChild(document.createElement('ion-icon'))
        let h32 = div.insertAdjacentElement('afterend', h3)
        let span2 = div.insertAdjacentElement('afterend', span)
        span2.innerHTML = `<ion-icon name="bookmark"></ion-icon>`
         div.classList.add('item')


         span.addEventListener('click', e =>{
            span.style.color = 'white'
           

        })
    }
}
createImages()