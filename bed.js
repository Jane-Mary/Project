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

for (let index = 0; index < bed.length; index++) {
    let names = bed[index].name;
    let div = input_element.appendChild(document.createElement("div"));
    //.appendChild(document.createElement('div'))
    let div2 = div.appendChild(document.createElement("div"));
    div.setAttribute("id", names);
    div2.innerHTML = `<img src='${bed[index].image}' alt='profile'>`;
    let span = document.createElement("span");
    let h3 = document.createElement("h3");
    let h2 = document.createElement("h3");
    let h4 = document.createElement("h3");
    h2.setAttribute("id", "price");
    h2.innerHTML = `Price:${bed[index].price}`;
    h3.innerHTML = ` location:${bed[index].location}`;
    h4.innerHTML = `Shop Location:${bed[index].shop}  `;
    // span.appendChild(document.createElement("ion-icon"));
    let h44 = div2.insertAdjacentElement("afterend", h4);
    let h32 = div2.insertAdjacentElement("afterend", h3);
    let h22 = div2.insertAdjacentElement("afterend", h2);
    let span2 = div2.insertAdjacentElement("afterend", span);
    span2.setAttribute("id", names)
    span2.innerHTML = `<ion-icon name="bookmark"></ion-icon>`;
    div.classList.add("item");


         
            span2.addEventListener("click", function (e) {
                e.preventDefault();
                let id = e.target.parentElement.id;
                span2.style.color = "white";
                console.log(id);
               let bed8 = bed.find(bed => bed.name === id);
               if (bed8) {
                if (localStorage.getItem("Favorites") == null){
                    let favorites = [];
                    favorites.push(bed8);
                localStorage.setItem('Favorites', JSON.stringify(favorites));
        
        
               }
               else {
               let a = localStorage.getItem('Favorites')
               let b = JSON.parse(a)
                b.push(bed8);
                localStorage.setItem('Favorites', JSON.stringify(b));
               }
            }
        
        })

    }
