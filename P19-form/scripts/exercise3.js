const inputs = document.querySelectorAll('.input');

inputs[0].addEventListener('blur', () => {
    if(!(inputs[0].value > 0 && inputs[0].value <= 31))
        inputs[0].nextElementSibling.innerHTML = "عدد وارد شده اشتباه است";
    else
        inputs[0].nextElementSibling.innerHTML = "";
});
inputs[1].addEventListener('blur', () => {
    if(!(inputs[1].value > 0 && inputs[1].value <= 12))
        inputs[1].nextElementSibling.innerHTML = "عدد وارد شده اشتباه است";
    else
        inputs[1].nextElementSibling.innerHTML = "";
});