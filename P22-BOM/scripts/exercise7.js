let textTimer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let endBtn = document.getElementById("endBtn");
let stop, intervalId;

startBtn.addEventListener('click', ()=> {
    startBtn.disabled = true;
    endBtn.disabled= false;
    intervalId = setInterval(()=>{
        stop = textTimer.innerHTML = Number(textTimer.innerHTML) - 1;
        if(stop == 0){
            textTimer.innerHTML = "زمان به پایان رسید";
            clearInterval(intervalId);
            startBtn.disabled = true;
            endBtn.disabled = true;
        };
    },1000);
});
endBtn.addEventListener('click', ()=> {
    startBtn.disabled = false;
    endBtn.disabled = true;
    clearInterval(intervalId)
});