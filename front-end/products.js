// upload products from data base
fetch("https://cooking-website-production.up.railway.app/products")
.then(response=>response.json())
.then(data=>{
    const continer_of_products=document.querySelector(".products-grid")
    data.forEach(product => {
        continer_of_products.innerHTML+=`<div class="product-card">
          <div class="product-image" id="${product._id}">
            <img  src="${product.imgURL}"alt="بقلاوة"/>
            <div class="product-actions">
              <button class="action-btn" title="عرض التفاصيل">
                <i class="far fa-eye"></i>
              </button>
            </div> 
           </div>
          <div class="product-details">
            <span class="category-product"></span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
           
            <div class="price-box">
              <span class="current-price">${product.price}د.ج</span>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart('${product._id}')">
              <i class="fas fa-shopping-bag"></i> أضف للسلة
            </button>
          </div>
      </div>`
    });
})