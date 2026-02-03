let textDate = document.getElementById('Date');
let textmoment = document.getElementById('moment');
setInterval(()=>{
    let myDate = new Date();
    textDate.innerHTML = myDate
},1000)
// moment libery
setInterval(()=>{
    let myMoment = moment();
    textmoment.innerHTML = myMoment
},1000)