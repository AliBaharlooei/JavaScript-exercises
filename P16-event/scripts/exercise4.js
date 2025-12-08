const mobileMenu = document.getElementById('mobile-menu');
const showMobileMenu =document.querySelector('.right-menu');
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    showMobileMenu.classList.toggle('show-menu');
})