const box = document.querySelector(".box");

box.addEventListener('mouseenter', () => {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    box.style.top = `${Math.random()*windowHeight}px`;
    box.style.left = `${Math.random()*windowWidth}px`;
});