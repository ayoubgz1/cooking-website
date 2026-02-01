
// add product to cart saver
function addToCart(id){
let cartSaver = JSON.parse(localStorage.getItem("cart") ) || [];
   fetch("https://cooking-website-production.up.railway.app/products")
.then(response=>response.json())
.then(data=>{
 data.forEach(product=> {
    if(product._id===id){

        const itemInCart = cartSaver.find(item => item._id === id);

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        cartSaver.push({ ...product, quantity:1});
      }

       localStorage.setItem("cart", JSON.stringify(cartSaver));
       updateCart();
         } });
})}

// update new cart div
function updateCart(){
let cart=document.querySelector(".cart")
let cartSaver = JSON.parse(localStorage.getItem("cart")) || [];
let cartSpan=document.querySelector(".cart-span")
cart.innerHTML =``;

let totalPrice=0;
let totalQuantity=0;
cartSaver.forEach((product,index)=>{
cart.innerHTML+=`
     <div class="product-cart" id='${index}'>
          <div class="product-img">
           <img  src="${product.imgURL}"alt="بقلاوة"/>
          </div>
          <div class="product-description">
              <h2>${product.name}</h2>
          </div>
          <div class="product-quantity">
          <div class="add">
        <button class="plus" onclick="increaseQuantity(${index})" >+</button><span >${product.quantity}</span><button class="minus" onclick="decreaseQuantity(${index})">-</button>
          </div>
          <div class="delete">
           <i onclick="deleteCart('${product._id}')" class="fa-solid fa-trash"></i>
          </div>
          </div>
          <div class="product-price">
            <p>السعر:<span>${product.price}</span></p>
            <p>العدد:<span>${product.quantity}</span></p>
            <p>الإجمالي:<span>${product.price * product.quantity}</span></p>
          </div>
         </div>`
           totalQuantity+=product.quantity;
           totalPrice+=product.quantity*product.price
        })

       cartSpan.textContent=totalQuantity
        cart.innerHTML+=`
 <div class="total last-one">
<p>العدد الإجمالي : <span>${totalQuantity}</span></p>
        <p>إجمالي السعر : <span>${totalPrice}</span></p>    
        <div class="total-button">
          <button onclick="checkOutOpen()">إجراء طلب</button>
          <button onclick="cartExit()" class="exist-cart">العودة للمزيد</button>
        </div>
      </div>`;
}
updateCart();

//delete product from cart
function deleteCart(id){
let cartSaver = JSON.parse(localStorage.getItem("cart") )
let index=cartSaver.findIndex(product=>product._id===id)
if(index!=-1){
    cartSaver.splice(index,1)
}
localStorage.setItem("cart",JSON.stringify(cartSaver))
updateCart();
}

//quantity count
function increaseQuantity(index){
let cartSaver=JSON.parse(localStorage.getItem("cart"))
cartSaver[index].quantity++;
localStorage.setItem("cart",JSON.stringify(cartSaver))
updateCart();
}
function decreaseQuantity(index){
let cartSaver=JSON.parse(localStorage.getItem("cart"))
if(cartSaver[index].quantity>1){
    cartSaver[index].quantity--;
    localStorage.setItem("cart",JSON.stringify(cartSaver))
    updateCart();
}}