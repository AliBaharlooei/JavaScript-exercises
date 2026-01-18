let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let endBtn = document.getElementById("endBtn");
let clearTime;
//=> setTimeout
// startBtn.addEventListener('click', () => {
//     clearTime = window.setTimeout(timerHadnler, 1000);
// });
// endBtn.addEventListener('click', () => {
//     clearTimeout(clearTime);
// });
// function timerHadnler(){
//     timer.innerHTML = Number(timer.innerHTML) + 1;
//     clearTime = window.setTimeout(timerHadnler, 1000);
// };

//=> setInterval
startBtn.addEventListener('click', () => {
    clearTime = setInterval(() => {
        timer.innerHTML = Number(timer.innerHTML) + 1;    
    }, 1000);
});
endBtn.addEventListener('click', () => clearInterval(clearTime));