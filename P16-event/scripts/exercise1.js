const btnClick = document.querySelector('button');

btnClick.addEventListener('click', () => {
    document.body.style.backgroundColor = "blue"
});
btnClick.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = "red"
});