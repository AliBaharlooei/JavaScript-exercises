const box = document.getElementById("box")
let y = 30, x = 30;
document.addEventListener("keydown", event => {
    switch (event.key){
        case 'ArrowUp':
            if(box.offsetTop != 0){
                y += -10;
                box.style.top = `${y}px`;
            }
            break;
        case 'ArrowDown':
            if(box.offsetParent.clientHeight < y){
                y += 10;
                box.style.top = `${y}px`;
            }
            break;
        case 'ArrowRight':
            if(box.offsetParent.clientWidth > x){
                x += 10;
                box.style.left = `${x}px`;   
            }
            break;
        case 'ArrowLeft':
            if(box.offsetLeft != 0){
                x += -10;
                box.style.left = `${x}px`;    
            }
            break;
    }
})