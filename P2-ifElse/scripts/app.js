var userPrice = document.getElementById("price")
var userCheck = document.getElementById("submit")
var userShowResult = document.getElementById("showResult")
userCheck.onclick = function () {
    // شرط چک میشه اگه برقرار بود اجرا میشه یعنی در این مثال یا فقط پرایداجرا میشه یا باید پول در بیاری
    if(userPrice.value >= 100){
        userShowResult.textContent = "تو میتونی پراید بخری"
    }
    else if(userPrice.value >= 300){
        userShowResult.textContent = "تو میتونی پارس بخری"
    }
    else if(userPrice.value >= 500){
        userShowResult.textContent = "به زور بتونی یه چینی بخری"
    }
    else if(userPrice.value >= 800){
        userShowResult.textContent = "میتونی یه چینی خوب بخری"
    }
    else if(userPrice.value >= 1200){
        userShowResult.textContent = "میتونی ببه ماشین های کره ای فکر کنی"
    }
    else if(userPrice.value >= 1800){
        userShowResult.textContent = "میتونی ماشین کره ای بخری "
    }
    else if(userPrice.value >= 2000){
        userShowResult.textContent = "میتونی ماشین های آلمانی بخری (:"
    }
    else{
        userShowResult.textContent = "فعلا پول جمع کن حداقل 100 دلار تو ماه تا بتونی ماشین بخری"
    }
    //اما در این مثال شرط ها به طور مستقل اجرا میشن
    if(userPrice.value >= 100){
        userShowResult.textContent = "تو میتونی پراید بخری"
    }
    if(userPrice.value >= 300){
        userShowResult.textContent = "تو میتونی پارس بخری"
    }
    if(userPrice.value >= 500){
        userShowResult.textContent = "به زور بتونی یه چینی بخری"
    }
    if(userPrice.value >= 800){
        userShowResult.textContent = "میتونی یه چینی خوب بخری"
    }
    if(userPrice.value >= 1200){
        userShowResult.textContent = "میتونی ببه ماشین های کره ای فکر کنی"
    }
    if(userPrice.value >= 1800){
        userShowResult.textContent = "میتونی ماشین کره ای بخری "
    }
    if(userPrice.value >= 2000){
        userShowResult.textContent = "میتونی ماشین های آلمانی بخری (:"
    }

}