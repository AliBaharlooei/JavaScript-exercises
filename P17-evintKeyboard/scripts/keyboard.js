const btns = document.querySelectorAll('button');
document.addEventListener('keydown', (event) => {
    btns.forEach(element => {
        if(element.id == event.code)
            element.classList.add("down");              
    });
});
document.addEventListener('keyup', event => {
    btns.forEach(element => {
        if(element.id == event.code)
            element.classList.remove("down");              
    });
});