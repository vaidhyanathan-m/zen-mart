var bar=document.getElementById("search")
var prodbox=document.getElementById("cont")
var products=prodbox.querySelectorAll("div")
bar.addEventListener("keyup",function(){
    var giventext=bar.value.toUpperCase()
    for(var count=0;count<products.length;count++)
    {
        var product=products[count].querySelector("h5").textContent.toUpperCase()
        if(product.indexOf(giventext)<0)
        {
            products[count].style.display="none";
        }
        else{
            products[count].style.display="block"
        }
    }
})
var shoppingcart=document.getElementById("incart")
var cartbgcolor=document.getElementById("cartbg")
var showc=document.getElementById("showcart")
showc.addEventListener("click",function(){
    cartbgcolor.style.display="block"
    shoppingcart.style.display="flex"
})
var placebtn=document.getElementById("placed")

function adding(event)
 {
    var image=event.target.parentElement.querySelector("img").src
    var productname=event.target.parentElement.querySelector("h5").textContent
    var prodprice=event.target.parentElement.querySelector("b").textContent
    var oldprice=event.target.parentElement.querySelector("del").textContent
    var newdiv=document.createElement("div")
    newdiv.innerHTML=`<img src=${image}><h5>${productname}</h5><b>${prodprice}</b><del>${oldprice}</del>`
    newdiv.setAttribute("class","cartstyle")
    shoppingcart.appendChild(newdiv)
}
placebtn.addEventListener("click",function(){
    alert("order placed successfully!");
    shoppingcart.style.display="none";
    cartbgcolor.style.display="none";
    window.location.href="collection.html"
})