const box = document.getElementById("box");

document.addEventListener('keydown', (event) => {
switch (event.code) {
        case "ArrowUp":
            box.style.marginTop = "10px"
            break;
        case "ArrowDown":
            box.style.marginTop = "20px"
            break;
        case "ArrowRight":
            box.style.marginLeft = "20px"
            break;
        case "ArrowLeft":
            box.style.marginLeft = "10px"
            break;
        default:
            break;
    };
});
