let data = "https://fakestoreapi.com/products";
let ul =document.querySelector("ul");
fetch(data)
.then((d)=> {
  return d.json();
})
.then((pData)=> {
  for(let i =0; i<pData.length; i++) {
    let li = `
    <li>
          <img src="${pData[i].image}" alt="">
          <div class="info">
            <p class="title">${pData[i].title}</p><p class="price">$${pData[i].price}</p>
          </div>
          <p class="dsc">${pData[i].description}</p>
          <p class="size-text">Size</p>
          <div class="sizes">
            <button class="size-btn active">XS</button>
            <button class="size-btn">S</button>
            <button class="size-btn">M</button>
            <button class="size-btn">L</button>
            <button class="size-btn">XL</button>
          </div>
          <p class="color-text">Color</p>
          <div class="colors">
            <input type="radio" name="col" value="gray">
            <input type="radio" name="col" value="blue" checked>
            <input type="radio" name="col" value="orange">
          </div>
          <button class="more-btn">See more</button>
          <span>${i}</span>
        </li>
    `
    ul.innerHTML+=li;
    let moreBtn =document.querySelectorAll(".more-btn");
    // pData[i]
    moreBtn.forEach((e)=> {
      e.addEventListener("click", ()=> {
        let id = e.nextElementSibling.textContent;
        localStorage.setItem("id", id);
        let newId =localStorage.getItem("id");
        console.log(newId);
        location.href="moreinfo.html";
      })
    })
  }
  // console.log(pData);
  let sizBtns =document.querySelectorAll(".size-btn");
    sizBtns.forEach((el)=> {
      el.addEventListener("click", ()=> {
        el.classList.toggle("active")
      })
  })
 
})


//ex 
  // sizeBtn.addEventListener("click", (e)=> {
       // let checkTex = e.classList.value;
 // if(checkTex.search("active") !== -1) {
      // }else  {
      //   e.target.classList.add("active")
      // }
    // })
  
    // console.log(result);
    // sizBtns.classList.remove(".active");
    // e.target.classList.add("active");