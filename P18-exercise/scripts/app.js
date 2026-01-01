const accordion = document.querySelectorAll(".box-title")
const panle = document.querySelectorAll(".box-info")
accordion.forEach(btn => {
    btn.addEventListener('click', event => {
        const text = btn.nextElementSibling;
        text.classList.toggle("open")
    })
});