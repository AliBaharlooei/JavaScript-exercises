const total = document.getElementById("total");
const availble = document.getElementById("availble");
const browser = document.getElementById("browser");
const viewport = document.getElementById("viewport");
const text = document.querySelector('p');

total.addEventListener('click', () => {
    text.innerHTML = `width : ${window.screen.width}<br>
                      height : ${window.screen.height}`
});
availble.addEventListener('click', () => {
    text.innerHTML = `width : ${window.screen.availWidth}<br>
                      height : ${window.screen.availHeight}`
});
browser.addEventListener('click', () => {
    text.innerHTML = `width : ${window.outerWidth}<br>
                      height : ${window.outerHeight}`
});
viewport.addEventListener('click', () => {
    text.innerHTML = `width : ${window.innerWidth}<br>
                      height : ${window.innerHeight}`
});