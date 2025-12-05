const btnRandomColor = document.getElementById("change-color");
const boxRandomColor = document.getElementById("box-random-color");

btnRandomColor.onclick = () => {
    let numbersArray = [];
    for (i = 0; i < 3; i++){
        let createColor = Math.random()*1000/4;
        numbersArray.push(Math.round(createColor));
    }
    boxRandomColor.style.backgroundColor = `rgb(${numbersArray[0]}, ${numbersArray[1]}, ${numbersArray[2]})`;
    let x = getComputedStyle(boxRandomColor);
    console.log(x.backgroundColor);
    
}
