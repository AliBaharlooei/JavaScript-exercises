var userNum1 = document.getElementById("container-num_1")
var userNum2 = document.getElementById("container-num_2")
var btnCheck = document.getElementById("container-sub")
var showResult = document.getElementById("container-result")
btnCheck.onclick = function(){
    var num1 = userNum1.value
    var num2 = userNum2.value
    if(num1 > num2)
        showResult.textContent = "اولین عدد وارد شده بزرگ تر است" + " " + num1;
    else if(num1 < num2)
        showResult.textContent = "دومین عدد وارد شده بزرگ تر است" + " " +num2;
    else
        showResult.textContent = "هر دو عدد وارد شده برابر هستن"; 

    
}