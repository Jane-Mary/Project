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
        let names = liv[index].name;
        let div = input_element.appendChild(document.createElement('div'))
        //.appendChild(document.createElement('div'))
        let div2 = div.appendChild(document.createElement('div'));
        div.setAttribute('id', names)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        div2.innerHTML = `<img src='${liv[index].image}' alt='profile'>`
        let span = document.createElement('span')
        let h3 = document.createElement('h3')
        let h2 = document.createElement('h3')
        let h4 = document.createElement('h3')
        h2.setAttribute('id', 'price')
        h2.innerHTML = `Price:${liv[index].price}`
        h3.innerHTML = ` location:${liv[index].location}`
        h4.innerHTML = `Shop Location:${liv[index].shop}  `
        span.appendChild(document.createElement('ion-icon'))
        let h44 = div2.insertAdjacentElement('afterend', h4)
        let h32 = div2.insertAdjacentElement('afterend', h3)
        let h22 = div2.insertAdjacentElement('afterend', h2)
        let span2 = div2.insertAdjacentElement('afterend', span)
        span2.innerHTML = `<ion-icon name="bookmark"></ion-icon>`
       div.classList.add('item')

        div.addEventListener('click', e => {
            span.style.color = 'white'
        //     let price = document.getElementById('price').value
        //    console.log(price);
        // let price = liv[index].price
        // let location = liv[index].location
        // let shop = liv[index].shop
if(typeof (Storage) != "undefined"){
        let picture=[]
          let user = {
            img : liv[index].image,
            price : liv[index].price,
            location : liv[index].location,
            shop : liv[index].shop
          }
           picture.push(user)
           localStorage.setItem('picture',JSON.stringify(picture))
        }
            // if(names == liv[index].name){
            //     localStorage.setItem('picture', names)   
            // }
            // if(price == liv[index].price ){
            //     localStorage.setItem('picture', price)
            // }
            // if( location == liv[index].location){
            //     localStorage.setItem('picture', location)
            // }
            //  if( shop == liv[index].shop){
            //      localStorage.setItem('picture', shop)
            //  }
        })

    }
}
createImages()


