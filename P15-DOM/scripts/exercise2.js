const innerBtn = document.querySelector(".change-text__btn-inner");
const outerBtn = document.querySelector(".change-text__btn-outer");
const box =document.getElementById("change-text__box");

innerBtn.onclick = () => {
    console.log(box.getAttribute("id"));
    box.removeAttribute("id")
    box.setAttribute("id", "change-text__blue");
}
outerBtn.onclick = () => {
    console.log(box.getAttribute("id"));
    box.removeAttribute("id");
    box.setAttribute("id", "change-text__box-green");
}