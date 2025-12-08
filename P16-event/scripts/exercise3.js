const btnAccardon = document.querySelectorAll('.accardon-title');

btnAccardon.forEach(element => {
    element.addEventListener('click', () => {
        const content = element.nextElementSibling
        content.classList.toggle('active');
    });
});