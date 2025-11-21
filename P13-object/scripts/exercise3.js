//for in
const userInfo = {
    userName : "Ali",
    userFamily : "Baharlooei",
    userAge : 21,
    userNumber : 9368573248,
    userCity : "Tehran"
}
for (let key in userInfo){
    console.log(key, " => ", userInfo[key]);
}
//for of
let userScore = [12,15,19,20,17,18,10,16];
for(let elemnt of userScore){
    console.log(elemnt);
}