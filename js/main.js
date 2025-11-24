const menu = document.getElementById("menu");
const headerMenu = document.querySelector(".header__nav-list");
const buttonMenu = document.querySelector(".header__button-menu");
const buttonImage = document.querySelector(".header__button-menu-icon") ;
const sombra = document.querySelector(".sombra");


buttonMenu.addEventListener("click", ()=>{
    if(buttonMenu.getAttribute("aria-expanded") === "false"){
        headerMenu.classList.add("menu-activo");
        headerMenu.classList.remove("menu-fuera");
        menu.setAttribute("aria-hidden", "false");
        buttonMenu.setAttribute("aria-expanded", "true");
        buttonImage.setAttribute("src", "../images/icon-close.svg");
        sombra.classList.add("sombra-activa");
        sombra.classList.remove("sombra-fuera");
        document.body.style.overflow = "hidden";

    }else{
        headerMenu.classList.add("menu-fuera");
        headerMenu.classList.remove("menu-active");
        menu.setAttribute("aria-hidden", "true");
        buttonMenu.setAttribute("aria-expanded", "false")
        buttonImage.setAttribute("src", "../images/icon-hamburger.svg");
        sombra.classList.add("sombra-fuera");
        sombra.classList.remove("sombra-activa");
        document.body.style.overflow = "auto";
    }
});

// ---------------------------- galeria
const sliderLeft = document.querySelector(".header__slider-button--left");
const sliderRight = document.querySelector(".header__slider-button--right");
const imgPrincipal = document.querySelector(".header__slider-img");

let imgArray = [
    "../images/mobile-image-hero-1.jpg",
    "../images/mobile-image-hero-2.jpg",
    "../images/mobile-image-hero-3.jpg"
];

let indiceActual = 0;
imgPrincipal.src = imgArray[indiceActual];

// --------------------------slider right
sliderRight.addEventListener("click", ()=> {
    
    indiceActual = indiceActual + 1;

    if(indiceActual >= imgArray.length){
        indiceActual = 0
    }

    imgPrincipal.src = imgArray[indiceActual];
});

// ---------------------slider Left
sliderLeft.addEventListener("click", ()=> {
    indiceActual = indiceActual - 1;

    if(indiceActual < 0){
        indiceActual = imgArray.length - 1;
    }
    imgPrincipal.src = imgArray[indiceActual]
});