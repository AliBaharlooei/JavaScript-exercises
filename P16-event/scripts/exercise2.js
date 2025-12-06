const clickBody = document;
const showDubleClick = document.getElementById("container-left__duble-click");
const showClick = document.getElementById("container-left__click");

let countClickBody = 0 ,countDblClick = 0;

clickBody.addEventListener('click', () => {
    countClickBody = countClickBody +1;
    showClick.innerText = countClickBody;
});

clickBody.addEventListener('dblclick', () => {
    countDblClick = countDblClick +1;
    showDubleClick.innerText = countDblClick;
});