const input_element = document.querySelector('#items')
let din = [
    {
        name:'din1',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/din1.jpg',
        shop:'Commercial Avenue shed 385'
    },
    {
        name:'din2',
        price:'450,000frs',
        location:'Douala',
        image:'./Defence/Images/din2.jpg',
        shop:'Marche Central'
    },
    {
        name:'din3',
        price:'200,000frs',
        location:'Bamenda',
        image:'./Defence/Images/din3.jpg',
        shop:'Commercial Avenue shed 380'
    },
    {
        name:'din4',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/din4.jpg',
        shop:'Commercial Avenue shed 285'
    },
    {
        name:'din5',
        price:'80,000frs',
        location:'Yaounde',
        image:'./Defence/Images/din5.jpg',
        shop:'Damas'
    },
    {
        name:'din6',
        price:'90,000frs',
        location:'Bamenda',
        image:'./Defence/Images/din6.jpg',
        shop:'Commercial Avenue shed 385'
    },
    {
        name:'din7',
        price:'120,000frs',
        location:'Bamenda',
        image:'./Defence/Images/din7.jpg',
        shop:'Commercial Avenue shed 241'
    },
    {
        name:'din8',
        price:'70,000frs',
        location:'Bamenda',
        image:'./Defence/Images/din8.jpg',
        shop:'Commercial Avenue shed 380'
    },
    {
        name:'din9',
        price:'90,000frs',
        location:'Bamenda',
        image:'./Defence/Images/din9.jpg',
        shop:'Commercial Avenue shed 275'
    },
]

function createImages(){
    // let added_img = 0

    // din.forEach(img => {
    //     if (added_img <= din.length){
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
    for (let index = 0; index < din.length; index++) {
        let names = din[index].name;
        let div = input_element.appendChild(document.createElement('div'))
        //.appendChild(document.createElement('div'))
        let div2 = div.appendChild(document.createElement('div'));
        div.setAttribute('id', names)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        div2.innerHTML = `<img src='${din[index].image}' alt='profile'>`
        let span = document.createElement('span')
        let h3 = document.createElement('h3')
        let h2 = document.createElement('h3')
        let h4 = document.createElement('h3')
        h2.setAttribute('id', 'price')
        h2.innerHTML = `Price:${din[index].price}`
        h3.innerHTML = ` location:${din[index].location}`
        h4.innerHTML = `Shop Location:${din[index].shop}  `
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