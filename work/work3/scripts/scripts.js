const show = document.querySelector("#hamburger-link");
const menu = document.querySelector("#hamburger-menu");
const bars = document.querySelector(".hamburger-menu-link__bars");
// const closebtn = document.querySelector("#hamburger-menu__close");
let links = document.querySelectorAll('.hamburger-menu__nav .nav__link');

function toggleMenu() {
        event.preventDefault();
        menu.classList.toggle('hamburger-menu--open'); 
        bars.classList.toggle('hamburger-menu-link__bars--active')

};

show.addEventListener("click", toggleMenu);
// closebtn.addEventListener("click", toggleMenu);
links.forEach(function(element){
    element.addEventListener('click' , toggleMenu);
});

