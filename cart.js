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