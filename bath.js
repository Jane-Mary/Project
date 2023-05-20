const input_element = document.querySelector('#items')
let bath = [
    {
        name: 'Bath1',
        price: '50,000frs',
        location: 'Bamenda',
        image: './Defence/Images/Bathroom7 (1).jpg',
        shop: 'Commercial Avenue shed 385'
    },
    {
        name: 'Bath2',
        price: '200,000frs',
        location: 'Bamenda',
        image: './Defence/Images/Bathroom7 (2).jpg',
        shop: 'Commercial Avenue shed 356'
    },
    {
        name: 'Bath3',
        price: '450,000frs',
        location: 'Douala',
        image: './Defence/Images/bathroom3.jpg',
        shop: 'Marche Central'
    },
    {
        name: 'Bath4',
        price: '150,000frs',
        location: 'Bamenda',
        image: './Defence/Images/Bathroom7 (4).jpg',
        shop: 'Commercial Avenue shed 385'
    },
    {
        name: 'Bath5',
        price: '80,000frs',
        location: 'Yaounde',
        image: './Defence/Images/Bathroom7 (5).jpg',
        shop: 'Damas'
    },
    {
        name: 'Bath6',
        price: '125,000frs',
        location: 'Bamenda',
        image: './Defence/Images/Bathroom7 (6).jpg',
        shop: 'Commercial Avenue shed 267'
    },
    {
        name: 'Bath7',
        price: '150,000frs',
        location: 'Bamenda',
        image: './Defence/Images/bathroom7.jpg',
        shop: 'Commercial Avenue shed 385'
    },
    {
        name: 'Bath8',
        price: '110,000frs',
        location: 'Bamenda',
        image: './Defence/Images/bathroom8.jpg',
        shop: 'Commercial Avenue shed 305'
    },
    {
        name: 'Bath9',
        price: '90,000frs',
        location: 'Bamenda',
        image: './Defence/Images/bathroom9.jpg',
        shop: 'Commercial Avenue shed 135'
    }
]

function createImages() {
    // let added_img = 0

    // bath.forEach(img => {
    //     if (added_img <= bath.length) {
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
    for (let index = 0; index < bath.length; index++) {
        let names = bath[index].name;
        let div = input_element.appendChild(document.createElement('div'))
        //.appendChild(document.createElement('div'))
        let div2 = div.appendChild(document.createElement('div'));
        div.setAttribute('id', names)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        div2.innerHTML = `<img src='${bath[index].image}' alt='profile'>`
        let span = document.createElement('span')
        let h3 = document.createElement('h3')
        let h2 = document.createElement('h3')
        let h4 = document.createElement('h3')
        h2.setAttribute('id', 'price')
        h2.innerHTML = `Price:${bath[index].price}`
        h3.innerHTML = ` location:${bath[index].location}`
        h4.innerHTML = `Shop Location:${bath[index].shop}  `
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

