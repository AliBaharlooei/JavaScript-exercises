let secondClock = document.getElementById("second");
let minutesClock = document.getElementById("minutes");
let hourClock = document.getElementById("hour");

setInterval(()=>{
    let systemDate = new Date();

    let second = systemDate.getSeconds() * 6;
    let minute = systemDate.getMinutes() * 6;
    let hour = systemDate.getHours() * 30 + (minute/12);

    secondClock.style.transform = `rotate(${second}deg)`;
    minutesClock.style.transform = `rotate(${minute}deg)`;
    hourClock.style.transform = `rotate(${hour}deg)`;
},1000);