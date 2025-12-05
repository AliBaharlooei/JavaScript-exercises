const countClick = document.querySelector(".number");
let num = 0;
document.body.onclick = () => {
    num = num +1;
    countClick.innerHTML = num;
}