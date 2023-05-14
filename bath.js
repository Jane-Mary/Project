let bath = [
    {
        name:'Bath1',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/Bathroom7 (1).jpg'
    },
    {
        name:'Bath2',
        price:'200,000frs',
        location:'Bamenda',
        image:'./Defence/Images/Bathroom7 (2).jpg'
    },
    {
        name:'Bath3',
        price:'450,000frs',
        location:'Douala',
        image:'./Defence/Images/bathroom3.jpg'
    },
    {
        name:'Bath4',
        price:'150,000frs',
        location:'Bamenda',
        image:'./Defence/Images/Bathroom7 (4).jpg'
    },
    {
        name:'Bath5',
        price:'80,000frs',
        location:'Yaounde',
        image:'./Defence/Images/Bathroom7 (5).jpg'
    },
    {
        name:'Bath6',
        price:'125,000frs',
        location:'Bamenda',
        image:'./Defence/Images/Bathroom7 (6).jpg'
    },
    {
        name:'Bath7',
        price:'150,000frs',
        location:'Bamenda',
        image:'./Defence/Images/bathroom7.jpg'
    },
    {
        name:'Bath8',
        price:'110,000frs',
        location:'Bamenda',
        image:'./Defence/Images/bathroom8.jpg'
    },
    {
        name:'Bath9',
        price:'90,000frs',
        location:'Bamenda',
        image:'./Defence/Images/bathroom9.jpg'
    }
]

function createImages(){
    let added_img = 0

    bath.forEach(img => {
        if (added_img <= bath.length){
            input_element.innerHTML += `<div class="item">
            <div class = 'profile'>
            <img src='${img.image}' alt='profile'></div>
            <span>
            <ion-icon name="bookmark"></ion-icon>
        </span>
            <h3>Price:${img.price}</h3>
            <h3>location:${img.location}</h3>
            <h3>Shop Location:${img.shop}</h3>
            </div>`

        }
        
    })
    added_image++
}
createImages()

