var userNum = document.getElementById("container-num")
var btnCheck = document.getElementById("container-sub")
var showResult = document.getElementById("container-result")
btnCheck.onclick = function(){
    var num = userNum.value
    if(num < 0)
        showResult.textContent = "عدد وارد شده منفی می باشد";
    else if(num > 0)
        showResult.textContent = "عدد وارد شده مثبت می باشد";
    else
        showResult.textContent = "عدد وارد شده صفر می باشد"
}