// -------------------- menu movil
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
        buttonMenu.setAttribute("aria-label", "close menu");
        buttonImage.setAttribute("src", "../images/icon-close.svg");
        sombra.classList.add("sombra-activa");
        sombra.classList.remove("sombra-fuera");
        document.body.style.overflow = "hidden";

    }else{
        headerMenu.classList.add("menu-fuera");
        headerMenu.classList.remove("menu-activo");
        menu.setAttribute("aria-hidden", "true");
        buttonMenu.setAttribute("aria-expanded", "false");
        buttonMenu.setAttribute("aria-label", "open menu");
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
const imgPrincipalDesktop = document.querySelector(".header__slider-picture source");
const sliderTitle = document.querySelector(".discover__description-title");
const sliderText = document.querySelector(".discover__description-text");

let imgArray = [
    {
        imagen: "../images/mobile-image-hero-1.jpg",
        imagenDesktop: "../images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        description: "Mesa moderna y silla blanca en una sala iluminada"
    },
    {
        imagen: "../images/mobile-image-hero-2.jpg",
        imagenDesktop: "../images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        description: "Tres sillas en una sala iluminada"
    },
    {
        imagen: "../images/mobile-image-hero-3.jpg",
        imagenDesktop: "../images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        description: "Una silla negra  en una sala oscura"
    }
];

let indiceActual = 0;

// -------------------------- funcion de cambio
function sliderChange() {
    imgPrincipal.classList.add("fade");

    imgPrincipal.addEventListener("transitionend", ()=> {
        imgPrincipal.src = imgArray[indiceActual].imagen;
        imgPrincipalDesktop.srcset = imgArray[indiceActual].imagenDesktop;
        imgPrincipal.alt = imgArray[indiceActual].description;
        sliderTitle.textContent = imgArray[indiceActual].title;
        sliderText.textContent = imgArray[indiceActual].text;

        imgPrincipal.classList.remove("fade");

    }, {once: true});
    
};

// --------------------------slider right
sliderRight.addEventListener("click", ()=> {
    
    indiceActual = indiceActual + 1;

    if(indiceActual >= imgArray.length){
        indiceActual = 0;
    };

    sliderChange();
});

// ---------------------slider Left
sliderLeft.addEventListener("click", ()=> {
    indiceActual = indiceActual - 1;

    if(indiceActual < 0){
        indiceActual = imgArray.length - 1;
    };

    sliderChange();
});