let textTimer = document.getElementById("timer");
let stop;
const intervalId = setInterval(()=>{
    stop = textTimer.innerHTML = Number(textTimer.innerHTML) - 1;
    if(stop == 0){
        textTimer.innerHTML = "زمان به پایان رسید"
        clearInterval(intervalId)
    };
},1000);