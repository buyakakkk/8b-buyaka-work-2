let cartIcon = document.querySelector('#menu-icon')
let cart = document.querySelector('.menu')
let closeCart = document.querySelector('#close-menu')

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
}; 