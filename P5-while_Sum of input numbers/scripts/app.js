var userNum = document.getElementById("container-num");
var btnCheck = document.getElementById("container-sub");
var showResult = document.getElementById("container-result")

btnCheck.onclick = function(){
    var num = 1;
    var x = 0;
    var number = Number(userNum.value)
    while(num <= number){
        x = x + num
        showResult.textContent = x
        num++;
    }   
}