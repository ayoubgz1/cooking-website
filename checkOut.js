fetch("./wilayas-with-commune.json")
  .then((res) => res.json())
  .then((data) => {
    const wilaya = document.querySelector("#wilaya");
    const commune = document.querySelector("#commune");

    data.forEach((w, index) => {
      index++;
      const option = document.createElement("option");
      option.value = w.nameAr;
      option.textContent = index + "-" + w.nameAr;
      wilaya.appendChild(option);
    });

    wilaya.addEventListener("change", () => {
      const wilayaSelected = data.find((w) => w.nameAr === wilaya.value);
      commune.innerHTML = '<option value="none" hidden>اختر البلدية</option>';
      if (wilayaSelected) {
        wilayaSelected.communes.forEach((c, index) => {
          index++;
          const option = document.createElement("option");
          option.value = c.nameAr;
          option.textContent = index + "-" + c.nameAr;
          commune.appendChild(option);
        });
      }
    });
  });

// open an close check out page
const checkOut = document.querySelector(".checkOut");

function checkOutOpen() {
    let cart=localStorage.getItem("cart") || []
    if(cart !="[]"){
     checkOut.classList.add("checkOutOpen");
    }
}

function checkOutClose() {
  checkOut.classList.remove("checkOutOpen");
}

// import product info to inputs
const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit");
const OrderDone=document.querySelector(".OrderDone")
const OrderFailed=document.querySelector(".OrderFailed")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ProductInfo = document.querySelector("#productInfo");
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((product) => {
       ProductInfo.value+='إسم المنتج:'+product.name+"\n";
       ProductInfo.value+='الكمية:'+ product.quantity+"\n";
       ProductInfo.value+= 'إجمالي السعر:'+ product.price+"da\n-----------------------------------------------\n";
  });
    // verify wilaya comunne
    const wilaya=document.querySelector("#wilaya")
    const commune=document.querySelector("#commune")
    if(wilaya.value==="none" || commune.value ==="none"){
        e.preventDefault(); 

    OrderFailed.classList.add("OrderDoneOpen");

     setTimeout(() => {
     OrderFailed.classList.remove("OrderDoneOpen");
        }, 2000); 
        
    return
    }



  fetch(
    "https://script.google.com/macros/s/AKfycbz4kw6B4ufcCDLi1Ht5zNMkgxV3bf6IFDnt4F2RuAwI-TUWZtxnmRBvQ925dmBxe4A6xg/exec",
    {
      method: "POST",
      body: new FormData(form),
    },
  )
    .then((response) => console.log("Done", response))
    .catch((error) => console.log("failed", error.message));
   
    OrderDone.classList.add("OrderDoneOpen");
    submitBtn.classList.add("hidden");

     setTimeout(() => {
        OrderDone.classList.remove("OrderDoneOpen");
            submitBtn.classList.remove("hidden");
            location.reload();
        }, 4000); 

});
