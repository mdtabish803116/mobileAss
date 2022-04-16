var data = [
    {
      name: "SAMSUNG Galaxy F12",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      price: 11499,
    },
    {
      name: "SAMSUNG Galaxy F42",
      rating: 4.2,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/v/5/e/galaxy-f42-5g-sm-e426bzahins-samsung-original-imag7anfwxsgumgz.jpeg?q=70",
      price: 12199,
    },
    {
      name: "Apple Iphone 12",
      rating: 4.6,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",
      price: 59999,
    },
    {
      name: "APPLE iPhone 12 Mini",
      rating: 4.5,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70",
      price: 49999,
    },
    {
      name: "OPPO A12",
      rating: 3.8,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kb1470w0/mobile/q/g/g/oppo-a12-cph2083-original-imafsh2hfkyamqyt.jpeg?q=70",
      price: 9490,
    },
    {
      name: "ASUS ROG Phone 3",
      rating: 4.9,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
      price: 46999,
    },
    {
      name: "DIZO Star 300",
      rating: 3.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kqpj4i80/mobile/e/i/r/star-300-dh2001-dizo-original-imag4nmpv7zahzs2.jpeg?q=70",
      price: 1299,
    },
    {
      name: "Micromax IN Note 1 ",
      rating: 4.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku5ufm80/mobile/v/t/1/in-note-1-e7746-micromax-original-imag7cdgz6tqychm.jpeg?q=70",
      price: 10999,
    },
    {
      name: "SAMSUNG Galaxy Z Fold3 5G",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ksqeky80/mobile/x/7/1/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6hpdwmngw.jpeg?q=70",
      price: 149999,
    },
  ];


  localStorage.setItem("productList" , JSON.stringify(data));

  var productList = JSON.parse(localStorage.getItem("productList"));

  var sortedData = JSON.parse(JSON.stringify(productList));
  


var sortByPrice = document.querySelector("#sortByPrice");
   sortByPrice.addEventListener("change" , displayData1);

  // function displayData1(){
  //     if(document.querySelector("#sortByPrice").value == "none"){
  //         console.log(sortedData);
  //         displayMobile(productList);
  //     }else {  
  //             sortedData.sort(function(a , b){
  //               if(document.querySelector("#sortByPrice").value == "lowtohigh"){  
  //                 return b.price - a.price;
  //               }  

  //               return a.price - b.price;
  //             })
  //              console.log(sortedData)
  //             displayMobile(sortedData);
  //   }
  // }

  function displayData1(){
      if(sortByPrice.value == "none"){
          console.log(sortedData);
          displayMobile(productList);
      }else {  
        if(sortByPrice.value == "lowtohigh") {  
        sortedData.sort(function(a , b){ 
             return a.price - b.price;
        })
      }else {
        sortedData.sort(function(a , b){ 
          return b.price - a.price;
     })
      }
      displayMobile(sortedData); 
    }
  }



  var sortByRating = document.querySelector("#sortByRating");
   sortByRating.addEventListener("change" , displayData2);

//    function displayData2(){
//     if(document.querySelector("#sortByRating").value == "none"){
//         displayMobile(productList);
//     }else {  
//             sortedData.sort(function(a , b){
//               if(document.querySelector("#sortByRating").value == "lowtohigh"){  
//                 return parseInt(a.rating )- parseInt(b.rating);
//               }

//               return parseInt(b.rating) - parseInt(a.rating);
              
//             })

//             displayMobile(sortedData);
//   }
// }


function displayData2(){
  if(sortByRating.value == "none"){
      console.log(sortedData);
      displayMobile(productList);
  }else {  
    if(sortByRating.value == "lowtohigh") {  
    sortedData.sort(function(a , b){ 
         return a.rating - b.rating;
    })
  }else{
    sortedData.sort(function(a , b){ 
      return b.rating - a.rating;
 })
  }
  displayMobile(sortedData); 
}
}
   


displayMobile(productList);
console.log(productList);
  function displayMobile(productList){ 
    document.getElementById("mobileContainer").innerHTML = "";
productList.forEach(function(product){
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

             var addBtn = document.createElement("button");
               addBtn.textContent = "Add To cart"
               addBtn.addEventListener("click" , function(){
                     addToCart(product);
               })

       mobileBox.append(imgDiv , name , ratingDiv , priceDiv , addBtn);
   document.getElementById("mobileContainer").append(mobileBox);
})

}

displayMobile(productList);

var cartList = JSON.parse(localStorage.getItem("cartList"));
    if(cartList == null){
        localStorage.setItem("cartList" , JSON.stringify([]));
    }

   function addToCart(product){
       var cartList = JSON.parse(localStorage.getItem("cartList"));
       cartList.push(product);
       localStorage.setItem("cartList" , JSON.stringify(cartList));


   }