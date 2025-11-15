var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

function chaneColor(elements, color){
    elements.style.backgroundColor = color;
    elements.style.color = "white"
}

box1.onclick = function(){
    document.body.style.backgroundColor = "#864e4e";
}
chaneColor(box1 , "blue");
chaneColor(box2 , "green");
chaneColor(box3 , "orange");