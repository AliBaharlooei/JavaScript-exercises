// let gread = [15,17,16,20,20,14,19,13,20]
// var sum = 0;
// for(var i = 0; i < gread.length; i++){
//     sum += gread[i]
//     var average = sum / gread.length
// }
// console.log("your gread is : ", average);

// The largest number in the array ==> The second exercise

// let numArray = [12,15,68,23,20,102,36,83,41,78]
// let result = numArray[0];
// for (var i = 0; i < numArray.length; i++){
//     if(result <= numArray[i]){
//         result = numArray[i]
//     }
// }
// console.log(result);

// Exercise sum of even numbers ==> The third exercise

// let numArray = [12,15,18,19,3,12,3,5,4,13]
// let even = 0, odd = 0;
// for (var i = 0; i < numArray.length; i++){
//     if (numArray[i] % 2 == 0)
//         even += numArray[i]
//     else
//         odd += numArray[i]
// }
// console.log("Total results (odd) : ", odd);
// console.log("Total results (even) : ", even);

// Reverse the numbers ==> The fourth exercise

// let numArray = [10, 15, 20, 25, 30, 35, 40];
// let reverseArray = [];

// for(var i = numArray.length; i >= 0; i--){
//     reverseArray.push(numArray[i])
// }
// console.log(reverseArray);

//Remove duplicate values ==> The fifth exercise
let numArray = [83,90,97,81,83,85,90,78,79,85];
let number = [];
for(var i = 0; i < numArray.length; i++){
    
    if(number.includes(numArray[i]) == false){
        number.push(numArray[i])
    }
}
console.log(number);
