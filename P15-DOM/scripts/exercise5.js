const btnShowBox = document.getElementById("show-box");
const btnHiddenBox = document.getElementById("hidden-box");
const box = document.querySelector(".container-box");

btnHiddenBox.onclick = () => box.classList.add('hidden');
btnShowBox.onclick = () => box.classList.remove("hidden");