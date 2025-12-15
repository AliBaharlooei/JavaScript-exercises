document.addEventListener('keyup', (event) => {
    switch (event.code) {
        case "ArrowUp":
            console.log("ArrowUp");
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            break;
        default:
            break;
    };
});