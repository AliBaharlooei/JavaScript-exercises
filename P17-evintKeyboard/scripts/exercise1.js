const text = document.querySelector("input");
const showText = document.querySelector("p");

text.addEventListener('keydown', () => {
    console.log("دکمه فشار داده شد");
});
text.addEventListener('keypress', () => {
    console.log("22");
});
text.addEventListener('keyup', () => {
    console.log("دکمه رها شد");
});
text.addEventListener('keydown', (event) => {
    showText.innerHTML += `<br>${event.key} </br>`;
    showText.innerHTML += `<br>${event.ctrlKey} </br>`;
    showText.innerHTML += `<br>${event.code} </br>`;
});
text.addEventListener('keydown', (event) => {
    if ( event.ctrlKey == true && event.code == "KeyA")
        document.body.style.backgroundColor = "purple";
});