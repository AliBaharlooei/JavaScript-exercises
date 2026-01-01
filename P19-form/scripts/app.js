const input = document.querySelectorAll('input');
const btn = document.querySelector('button');
const text = document.querySelector('p');

btn.addEventListener('click', () => {
    let newValue = "";
    input.forEach(element => {
        if(element.checked == true){
            newValue += ` ${element.value}<br>`
        }
    });
    text.innerHTML = newValue
});