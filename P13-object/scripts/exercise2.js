const firstObject = {
    userName : "Reza",
    userFamily : "Gholami",
    userAge : 22,
    addNewItem : false,
    userScore : function(){
        return this.addNewItem
    }
};

let usetFullName = firstObject;
usetFullName.isTrue = true;

console.log(usetFullName);
console.log(firstObject);
console.log(firstObject.userScore());


// this in object
const stuObject = {
    stuNCode : 1568575,
    sayHi : (userName) => {
        let user = "";
        if(userName == "Ali"){
            user = userName
        }
        return "Hi " + user
    },
    userNumber : "09052993095",
    printUserNumber : () => stuObject.userNumber
}
console.log(stuObject.sayHi("Ali"));
console.log(stuObject.printUserNumber());
