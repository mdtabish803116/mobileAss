var cartList = JSON.parse(localStorage.getItem('cartList')) || [];



displayCart(cartList);
// console.log(productList);
  function displayCart(cartList){ 
cartList.forEach(function(product){
      var mobileBox = document.createElement("div");
         var imgDiv = document.createElement("div");
             var img = document.createElement("img");
              img.src = product.image_url;
       imgDiv.append(img);
       
        var name = document.createElement("div");
          name.textContent = product.name;

       var ratingDiv = document.createElement("div");
          var ratingText = document.createElement("div");
             ratingText.textContent = "rating:";
        var appendRating = document.createElement("div");
           appendRating.textContent = product.rating;
           ratingDiv.append(ratingText , appendRating);
       
           var priceDiv = document.createElement("div");
             priceDiv.textContent = product.price;

            //  var addBtn = document.createElement("button");
            //    addBtn.textContent = "Add To cart"
            //    addBtn.addEventListener("click" , function(){
            //          addToCart(product);
            //    })

       mobileBox.append(imgDiv , name , ratingDiv , priceDiv);
   document.getElementById("cartContainer").append(mobileBox);
})

}

  var total = 0;
    cartList.forEach(function(item){
      total = total + item.price;
    })

   //  localStorage.setItem("totalPrice" , total);
   //  var totalPrice1 = localStorage.getItem("totalPrice");

    var totalPrice = document.createElement("div");
      totalPrice.setAttribute("id", "appendOrderTotal")
      totalPrice.textContent = `Total  Price =  RS. ${total}.00`;
      document.getElementById("totalPriceDiv").append(totalPrice);

      var flagCpn = true;
document.getElementById("applyBtn").addEventListener("click", function(){
    var inputCpnVal = document.querySelector("#inputCpn").value;
    var appendOrderTotal = document.getElementById("appendOrderTotal")
       if(flagCpn){  
    if(inputCpnVal == "masai30"){
        total = parseInt(total - total*(0.3));

       // console.log(total);
        alert("Coupon applied succesfully");

        flagCpn = false;
    }else {
        alert("Coupon is not Valid !")
    }

    appendOrderTotal.textContent = `Total Price =  Rs. ${total}.00`;

  }else{
      alert("You have already applied the coupon !");
  }
});