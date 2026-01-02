const citys = document.querySelector('select');
const btn = document.querySelector('button');
const text = document.querySelector('p');
btn.addEventListener('click', () => {
    text.innerHTML = `شما ${citys.value} هستید.`
});