const input_element = document.querySelector('#items')

let liv = [
    {
        name: 'liv1',
        price: '150,000frs',
        location: 'Bamenda',
        image: './Defence/Images/livingroom 1.jpg',
        shop: 'Commercial avenue shed 385'
    },
    {
        name: 'liv2',
        price: '450,000frs',
        location: 'Douala',
        image: './Defence/Images/livingroom 2.jpg',
        shop: 'Marche Central'
    },
    {
        name: 'liv3',
        price: '200,000frs',
        location: 'Bamenda',
        image: './Defence/Images/livingroom 3.png',
        shop: 'Commercial Avenue shed 385'
    },
    {
        name: 'liv4',
        price: '100,000frs',
        location: 'Bamenda',
        image: './Defence/Images/livingroom 4.jpg',
        shop: 'Commercial Avenue shed 383'
    },
    {
        name: 'liv5',
        price: '80,000frs',
        location: 'Yaounde',
        image: './Defence/Images/livingroom 5.png',
        shop: 'Damas'
    },
    {
        name: 'liv6',
        price: '120,000frs',
        location: 'Bamenda',
        image: './Defence/Images/livingroom 6.jpg',
        shop: 'Commercial Avenue shed 385'
    },
    {
        name: 'liv7',
        price: '70,000frs',
        location: 'Bamenda',
        image: './Defence/Images/livingroom 7.jpg',
        shop: 'Commercial Avenue shed 124'
    },
    {
        name: 'liv8',
        price: '100,000frs',
        location: 'Bamenda',
        image: './Defence/Images/livingroom 8.jpeg',
        shop: 'Commercial Avenue shed 385'
    },
    {
        name: 'liv9',
        price: '350,000frs',
        location: 'Bamenda',
        image: './Defence/Images/livingroom 9.jpeg',
        shop: 'Commercial Avenue shed 276'
    },
]

function createImages() {
    //  if (added_img <= liv.length){
    //     //     input_element.innerHTML += `<div class="item">
    //     //     <div class = 'profile'>
    //     //     <img src='${img.image}' alt='profile'></div>
    //     //     <span id='icon'>
    //     //     <ion-icon name="bookmark"></ion-icon>
    //     // </span>
    //     //     <h3>Price:${img.price}</h3>
    //     //     <h3>location:${img.location}</h3>
    //     //     <h3>Shop Location:${img.shop}</h3>
    //     //     </div>`
        
    //     }
        for (let index = 0; index < liv.length; index++) {
        let div = input_element.appendChild(document.createElement('div'))
            .appendChild(document.createElement('div'))
        div.innerHTML = `<img src='${liv[index].image}' alt='profile'>`
        let span = document.createElement('span')
        let h3 = document.createElement('h3') 
        h3.innerHTML = `Price:${liv[index].price} 
        location:${liv[index].location}
        Shop Location:${liv[index].shop}  `
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


