const menu = document.getElementById("menu");
const headerMenu = document.querySelector(".header__menu");
const buttonMenu = document.querySelector(".header__button-menu");
const buttonImage = document.querySelector(".header__button-imag") 


buttonMenu.addEventListener("click", ()=>{
    if(buttonMenu.getAttribute("aria-expanded") === "false"){
        headerMenu.classList.add("menu-active");
        menu.hidden = false;
        buttonMenu.setAttribute("aria-expanded", "true");
        buttonImage.setAttribute("src", "../images/icon-close.svg");

    }else{
        headerMenu.classList.remove("menu-active");
        menu.hidden = true;
        buttonMenu.setAttribute("aria-expanded", "false")
        buttonImage.setAttribute("src", "../images/icon-hamburger.svg");
    }
});
