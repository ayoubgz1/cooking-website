// show hidde select option
let category=document.querySelector(".category")
let select=document.querySelector(".select")


category.addEventListener("click",()=>{
   select.classList.toggle("open");
})


// select option whith true symbole
let Alloption=document.querySelectorAll(".option")

Alloption.forEach(option=>{
   option.addEventListener("click",()=>{
       let span=option.querySelector("span");
      if(!span){
      span = document.createElement("span");
      span.textContent = "✔"; 
      option.appendChild(span);
      }else{
         span.remove();
      }
   })
})

// scroll up button 
const scrollup=document.querySelector(".scrollup");
window.addEventListener("scroll",()=>{
   if(window.scrollY>=560){
      scrollup.classList.add("scrool-open");
   }else{
      scrollup.classList.remove("scrool-open");
   }
})


// show and hidde cart 
const cartOpen=document.querySelector(".fa-shopping-basket");
const cart=document.querySelector(".cart-section")

cartOpen.addEventListener("click",()=>{
   cart.classList.add("cart-section-open")
   document.body.classList.add("overflow")
})

// exit Cart button
function cartExit(){
   cart.classList.remove("cart-section-open")
    document.body.classList.remove("overflow")
}

