//Write a function called sumArray that takes an array of numbers and returns their sum.
function sumArray (numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum
}
console.log(sumArray([1,2,3]));