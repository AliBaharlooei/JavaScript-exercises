const accordion = document.querySelector(".container")
const panle = document.querySelectorAll(".box-info")
// v1
// accordion.forEach(btn => {
//     btn.addEventListener('click', event => {
//         const text = btn.nextElementSibling;
//         text.classList.toggle("open")
//     })
// });
// v2
accordion.addEventListener('click', event => {
    const elment = event.target.nextElementSibling;
    elment.classList.toggle("open")  
})