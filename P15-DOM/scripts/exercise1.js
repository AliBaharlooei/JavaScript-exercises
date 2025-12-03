const changeText = document.querySelector(".change-text__p");
const btnChangeTextInner = document.querySelector(".change-text__btn-inner");
const btnChangeTextOuter = document.querySelector(".change-text__btn-outer");

btnChangeTextInner.onclick = () => {
    changeText.innerHTML = "HAHAHA !"
}
btnChangeTextOuter.onclick = () =>{
    changeText.outerHTML = '<p class="change-text__p new-style">Hi im Ali Baharlooe</p>'
}