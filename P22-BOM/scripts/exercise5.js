let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let newTab;
openBtn.addEventListener('click', ()=> {
    newTab = window.open('https://www.google.com', '_blank', 'height = 500, width = 600, top = 50, left = 50')
})
closeBtn.addEventListener('click', () => {
    newTab.close()
})