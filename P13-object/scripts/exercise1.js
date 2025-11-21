const userInfo = {
    userName : "Ali",
    userFamily : "Baharlooei",
    userAge : 21,
    userScore : (...score) =>{
        return score
    }
}
console.log(userInfo.userScore(32,41,75));
console.log(userInfo.userName);
console.log(userInfo['userFamily']);

