// let gread = [15,17,16,20,20,14,19,13,20]
// var sum = 0;
// for(var i = 0; i < gread.length; i++){
//     sum += gread[i]
//     var average = sum / gread.length
// }
// console.log("your gread is : ", average);

// The largest number in the array ==> The second exercise

let numArray = [12,15,68,23,20,102,36,83,41,78]
let result = numArray[0];
for (var i = 0; i < numArray.length; i++){
    if(result <= numArray[i]){
        result = numArray[i]
    }
}
console.log(result);
