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

for (let index = 0; index < din.length; index++) {
    let names = din[index].name;
    let div = input_element.appendChild(document.createElement("div"));
    //.appendChild(document.createElement('div'))
    let div2 = div.appendChild(document.createElement("div"));
    div.setAttribute("id", names);
    div2.innerHTML = `<img src='${din[index].image}' alt='profile'>`;
    let span = document.createElement("span");
    let h3 = document.createElement("h3");
    let h2 = document.createElement("h3");
    let h4 = document.createElement("h3");
    h2.setAttribute("id", "price");
    h2.innerHTML = `Price:${din[index].price}`;
    h3.innerHTML = ` location:${din[index].location}`;
    h4.innerHTML = `Shop Location:${din[index].shop}  `;
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
               let din8 = din.find(din => din.name === id);
               if (din8) {
                if (localStorage.getItem("Favorites") == null){
                    let favorites = [];
                    favorites.push(din8);
                localStorage.setItem('Favorites', JSON.stringify(favorites));
        
        
               }
               else {
               let a = localStorage.getItem('Favorites')
               let b = JSON.parse(a)
                b.push(din8);
                localStorage.setItem('Favorites', JSON.stringify(b));
               }
            }
        
        })

    }
