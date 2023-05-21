const input_element = document.querySelector("#items");

let liv = [
  {
    name: "liv1",
    price: "150,000frs",
    location: "Bamenda",
    image: "./Defence/Images/livingroom 1.jpg",
    shop: "Commercial avenue shed 385",
  },
  {
    name: "liv2",
    price: "450,000frs",
    location: "Douala",
    image: "./Defence/Images/livingroom 2.jpg",
    shop: "Marche Central",
  },
  {
    name: "liv3",
    price: "200,000frs",
    location: "Bamenda",
    image: "./Defence/Images/livingroom 3.png",
    shop: "Commercial Avenue shed 385",
  },
  {
    name: "liv4",
    price: "100,000frs",
    location: "Bamenda",
    image: "./Defence/Images/livingroom 4.jpg",
    shop: "Commercial Avenue shed 383",
  },
  {
    name: "liv5",
    price: "80,000frs",
    location: "Yaounde",
    image: "./Defence/Images/livingroom 5.png",
    shop: "Damas",
  },
  {
    name: "liv6",
    price: "120,000frs",
    location: "Bamenda",
    image: "./Defence/Images/livingroom 6.jpg",
    shop: "Commercial Avenue shed 385",
  },
  {
    name: "liv7",
    price: "70,000frs",
    location: "Bamenda",
    image: "./Defence/Images/livingroom 7.jpg",
    shop: "Commercial Avenue shed 124",
  },
  {
    name: "liv8",
    price: "100,000frs",
    location: "Bamenda",
    image: "./Defence/Images/livingroom 8.jpeg",
    shop: "Commercial Avenue shed 385",
  },
  {
    name: "liv9",
    price: "350,000frs",
    location: "Bamenda",
    image: "./Defence/Images/livingroom 9.jpeg",
    shop: "Commercial Avenue shed 276",
  },
];


  for (let index = 0; index < liv.length; index++) {
    let names = liv[index].name;
    let div = input_element.appendChild(document.createElement("div"));
    //.appendChild(document.createElement('div'))
    let div2 = div.appendChild(document.createElement("div"));
    div.setAttribute("id", names);
    div2.innerHTML = `<img src='${liv[index].image}' alt='profile'>`;
    let span = document.createElement("span");
    let h3 = document.createElement("h3");
    let h2 = document.createElement("h3");
    let h4 = document.createElement("h3");
    h2.setAttribute("id", "price");
    h2.innerHTML = `Price:${liv[index].price}`;
    h3.innerHTML = ` location:${liv[index].location}`;
    h4.innerHTML = `Shop Location:${liv[index].shop}  `;
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
       let liv8 = liv.find(liv => liv.name === id);
       if (liv8) {
        if (localStorage.getItem("Favorites") == null){
            let favorites = [];
            favorites.push(liv8);
        localStorage.setItem('Favorites', JSON.stringify(favorites));

        
       }
       else {
       let a = localStorage.getItem('Favorites')
       let b = JSON.parse(a)
        b.push(liv8);
        localStorage.setItem('Favorites', JSON.stringify(b));
       }
    }
        
    })
    
}





