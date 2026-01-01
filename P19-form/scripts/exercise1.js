const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const text = document.querySelector('p');
btn.addEventListener('click', ()=> {
    let newText = "";
    for (const element of inputs) {
        if(element.checked == true){
            newText += `شما ${element.value} هستید`;
            break;
        }        
    }
    text.innerHTML = newText;
})