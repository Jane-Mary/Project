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

for (let index = 0; index < kit.length; index++) {
    let names = kit[index].name;
    let div = input_element.appendChild(document.createElement("div"));
    //.appendChild(document.createElement('div'))
    let div2 = div.appendChild(document.createElement("div"));
    div.setAttribute("id", names);
    div2.innerHTML = `<img src='${kit[index].image}' alt='profile'>`;
    let span = document.createElement("span");
    let h3 = document.createElement("h3");
    let h2 = document.createElement("h3");
    let h4 = document.createElement("h3");
    h2.setAttribute("id", "price");
    h2.innerHTML = `Price:${kit[index].price}`;
    h3.innerHTML = ` location:${kit[index].location}`;
    h4.innerHTML = `Shop Location:${kit[index].shop}  `;
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
               let kit8 = kit.find(kit => kit.name === id);
               if (kit8) {
                if (localStorage.getItem("Favorites") == null){
                    let favorites = [];
                    favorites.push(kit8);
                localStorage.setItem('Favorites', JSON.stringify(favorites));
        
        
               }
               else {
               let a = localStorage.getItem('Favorites')
               let b = JSON.parse(a)
                b.push(kit8);
                localStorage.setItem('Favorites', JSON.stringify(b));
               }
            }
        
        })

    }
