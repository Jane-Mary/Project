// let liv = [
// //     {
// //         name: 'liv1',
// //         price: '150,000frs',
// //         location: 'Bamenda',
// //         image: './Defence/Images/livingroom 1.jpg',
// //         shop: 'Commercial avenue shed 385'
// //     },
// //     {
// //         name: 'liv2',
// //         price: '450,000frs',
// //         location: 'Douala',
// //         image: './Defence/Images/livingroom 2.jpg',
// //         shop: 'Marche Central'
// //     },
// //     {
// //         name: 'liv3',
// //         price: '200,000frs',
// //         location: 'Bamenda',
// //         image: './Defence/Images/livingroom 3.png',
// //         shop: 'Commercial Avenue shed 385'
// //     },
// //     {
// //         name: 'liv4',
// //         price: '100,000frs',
// //         location: 'Bamenda',
// //         image: './Defence/Images/livingroom 4.jpg',
// //         shop: 'Commercial Avenue shed 383'
// //     },
// //     {
// //         name: 'liv5',
// //         price: '80,000frs',
// //         location: 'Yaounde',
// //         image: './Defence/Images/livingroom 5.png',
// //         shop: 'Damas'
// //     },
// //     {
// //         name: 'liv6',
// //         price: '120,000frs',
// //         location: 'Bamenda',
// //         image: './Defence/Images/livingroom 6.jpg',
// //         shop: 'Commercial Avenue shed 385'
// //     },
// //     {
// //         name: 'liv7',
// //         price: '70,000frs',
// //         location: 'Bamenda',
// //         image: './Defence/Images/livingroom 7.jpg',
// //         shop: 'Commercial Avenue shed 124'
// //     },
// //     {
// //         name: 'liv8',
// //         price: '100,000frs',
// //         location: 'Bamenda',
// //         image: './Defence/Images/livingroom 8.jpeg',
// //         shop: 'Commercial Avenue shed 385'
// //     },
// //     {
// //         name: 'liv9',
// //         price: '350,000frs',
// //         location: 'Bamenda',
// //         image: './Defence/Images/livingroom 9.jpeg',
// //         shop: 'Commercial Avenue shed 276'
// //     },
// ]
    if(typeof (Storage) !== "undefined"){
        let div = document.createElement('div')
        div.setAttribute('id', 'div')
        document.getElementById(div).innerHTML = localStorage.getItem('picture')
    }
