let myAraay = [12,67,35,25,96]
//use forEach
myAraay.forEach(element => {
    console.log(element);
});
//exercise 1
console.log("---------------");
myAraay.forEach(isOdd => {
    if(isOdd % 2 != 0){
        console.log(isOdd);
    }
});
// exercise 2
console.log("---------------");
let dubleMyArray = [];
myAraay.forEach(duble => {
    dubleMyArray.push(duble * 5);
});
dubleMyArray.forEach(item => console.log("duble numers => ", item));
