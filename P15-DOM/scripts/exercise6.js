const liName = document.querySelectorAll('li');
liName.forEach(element => {
    element.onclick = () => {
        element.classList.toggle("active")
    }
})