var menubar=document.querySelector(".menu")
var closebtn=document.querySelector(".close")
var showbtn=document.querySelector(".toggle")
showbtn.addEventListener("click",function(){
    menubar.style.left="0";
})
closebtn.addEventListener("click",function(){
    menubar.style.left="-60%";
})

