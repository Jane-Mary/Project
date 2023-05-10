let liv = [
    {
        name:'liv1',
        price:'150,000frs',
        location:'Bamenda',
        image:'./Defence/Images/livingroom 1.jpg'
    },
    {
        name:'liv2',
        price:'450,000frs',
        location:'Douala',
        image:'./Defence/Images/livingroom 2.jpg'
    },
    {
        name:'liv3',
        price:'200,000frs',
        location:'Bamenda',
        image:'./Defence/Images/livingroom 3.jpg'
    },
    {
        name:'liv4',
        price:'100,000frs',
        location:'Bamenda',
        image:'./Defence/Images/livingroom 4.jpg'
    },
    {
        name:'liv5',
        price:'80,000frs',
        location:'Yaounde',
        image:'./Defence/Images/livingroom 5.jpg'
    },
    {
        name:'liv6',
        price:'120,000frs',
        location:'Bamenda',
        image:'./Defence/Images/livingroom 6.jpg'
    },
    {
        name:'liv7',
        price:'70,000frs',
        location:'Bamenda',
        image:'./Defence/Images/livingroom 7.jpg'
    },
    {
        name:'liv8',
        price:'100,000frs',
        location:'Bamenda',
        image:'./Defence/Images/livingroom 8.jpg'
    },
    {
        name:'liv9',
        price:'350,000frs',
        location:'Bamenda',
        image:'./Defence/Images/livingroom 9.jpg'
    },
]

let fav = document.getElementById('icon');

fav.addEventListener('click',(e) =>{
    fav.style.color = 'gray'
    input_element.innerHTML += `<div class="row"></div>`
})