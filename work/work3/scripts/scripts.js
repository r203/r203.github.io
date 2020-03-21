const show = document.querySelector("#hamburger-link");
const menu = document.querySelector("#hamburger-menu");
const close1 = document.querySelector("#hamburger-menu__close");
let links = document.querySelectorAll('.nav__link');

function toggleMenu() {
        event.preventDefault();
        menu.classList.toggle('hamburger-menu--open'); 
};

show.addEventListener("click", toggleMenu);
close1.addEventListener("click", toggleMenu);
links.forEach(function(element){
    element.addEventListener('click' , toggleMenu);
});

