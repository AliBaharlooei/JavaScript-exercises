let textDate = document.getElementById('Date');
let textmoment = document.getElementById('moment');
setInterval(()=>{
    let myDate = new Date();
    textDate.innerHTML = myDate
},1000)
// moment libery
setInterval(()=>{
    let myMoment = moment().format('hh:mm:ss');
    textmoment.innerHTML = myMoment;
},1000)

let myMoment1 = moment('2026-2-4')
let myMoment2 = moment()
console.log(myMoment2.fromNow())

let myMoment3 = moment('2026-02-06')
let myMoment4 = moment('2026-02-03')
console.log(myMoment3.diff(myMoment4,'day'));