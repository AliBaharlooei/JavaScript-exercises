var userAge = document.getElementById("age")
var userSubmit = document.getElementById("submit")
var showResult = document.getElementById("result")
userSubmit.onclick = function () {
    if(userAge.value >= 18){
        showResult.textContent = ":) خوش آمدید"
    }
    else{
        showResult.textContent = "! اجازه ورود ندارید"
    }

    if(userAge.value % 2 == 0){
        showResult.textContent = ".سن وارد شده زوج می باشد"
    }
    else{
        showResult.textContent = ".سن وارد شده فرد می باشد"
    }
}