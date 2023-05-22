<<<<<<< HEAD
    
=======
>>>>>>> 8c31c6c8f112c59e69e81559e5c6c78a25f6d4b3
let a = localStorage.getItem("Favorites");
let b = JSON.parse(a);
console.log(b);
const input_element = document.querySelector("#items");
for (let index = 0; index < b.length; index++) {
    let names = b[index].name;
    let div = input_element.appendChild(document.createElement("div"));
    //.appendChild(document.createElement('div'))
    let div2 = div.appendChild(document.createElement("div"));
    div.setAttribute("id", names);
    div2.innerHTML = `<img src='${b[index].image}' alt='profile'>`;
    let span = document.createElement("span");
    let h3 = document.createElement("h3");
    let h2 = document.createElement("h3");
    let h4 = document.createElement("h3");
    h2.setAttribute("id", "price");
    h2.innerHTML = `Price:${b[index].price}`;
    h3.innerHTML = ` location:${b[index].location}`;
    h4.innerHTML = `Shop Location:${b[index].shop}  `;
    span.appendChild(document.createElement("ion-icon"));
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
        span2.style.color = "red";
        let liv8 = b.find(b => b.name === id);
        if (liv8) {
<<<<<<< HEAD
           b.shift(liv8);
           localStorage.setItem("Favorites", JSON.stringify(b));
          }
=======
           b.splice(index, 1);
           localStorage.setItem("Favorites", JSON.stringify(b));
           setTimeout(() => {
        location.reload();
           }, 3000);
           

        
       }
>>>>>>> 8c31c6c8f112c59e69e81559e5c6c78a25f6d4b3

    })
}

<<<<<<< HEAD
 
=======
>>>>>>> 8c31c6c8f112c59e69e81559e5c6c78a25f6d4b3
