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
//title animation
const title="حلاوتنا من القلب للقلب";
let index=0;
let speed=100;//100ms
const h3=document.querySelector("#title");

function printTitle(){
if(index<title.length){
   h3.textContent+=title[index];
   index++;
   setTimeout(printTitle,speed)
}}

printTitle();


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


// show card
window.addEventListener("load",()=>{
 const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show-card");
    }, index * 300); // 0.2s entre les cart   
  });
})
 



