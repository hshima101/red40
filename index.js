function addtocart(name){
var cart=getcart()
cart.push(name)
setcart(cart)
}

function getcart(){
var cartdata=localStorage.getItem("cart")
if (!cartdata){
    return []
}
return JSON.parse(cartdata)
}


function setcart(cart){
var cartdata=JSON.stringify(cart)
localStorage.setItem("cart" , cartdata)
updatepage(cart)
}

function updatepage(cart) {
    var cartEl = document.querySelector('#cart');
    cartEl.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        var itemEl = document.createElement('div');
        itemEl.innerText = cart[i];
        itemEl.addEventListener('click', function() { removefromcart(i); });

        cartEl.appendChild(itemEl);
    }
}

function removefromcart(index) {
    var cart = getcart();
    cart.splice(index, 1);
    setcart(cart);
}

updatepage(getcart())

var page = window.location.pathname
if (page == "/"){
    page = "/index.html"
}
document.querySelector('a[href="' + page + '"]').setAttribute('class', 'current-page');
if (page == "/index.html"){
let images = [
    "bun5.png",
    "bun6.png",
    "bun7.png"
  ];
  let currentIndex = 0;
  function showImage() {
    let imageElement = document.getElementById("image-carousel");
    imageElement.src = "/images/" + images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
  setInterval(showImage, 3000); // change image every 3 seconds
  showImage()
}