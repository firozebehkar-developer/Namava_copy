// js menu button
var button = document.querySelector(".btn");


button.addEventListener("click" , function(){
    button.classList.toggle("is-active");
    document.querySelector(".menu-mobile").classList.toggle("active");
});
var menuall = document.querySelectorAll(".menu-mobile>a");

for(var i = 0 ; i< menuall.length ; i++){
    menuall[i].addEventListener("click" , function(){
        document.querySelector(".menu-mobile").classList.toggle("active");
        button.classList.toggle("is-active");
    });
    
};
