const innerBtn = document.querySelector(".change-text__btn-inner");
const outerBtn = document.querySelector(".change-text__btn-outer");
const box =document.getElementById("change-text__box");

innerBtn.onclick = () => {
    console.log(box.getAttribute("id"));
    box.removeAttribute("id")
    box.setAttribute("id", "change-text__blue");

    box.style.width = "250px"
    box.style.height = "250px"
    box.style.marginTop = "20px"
    box.style.borderRadius = "12px"
}
outerBtn.onclick = () => {
    console.log(box.getAttribute("id"));
    box.removeAttribute("id");
    box.setAttribute("id", "change-text__box-green");

    box.style.width = "100px"
    box.style.height = "100px"
    box.style.marginTop = "20px"
    box.style.borderRadius = "12px"
}