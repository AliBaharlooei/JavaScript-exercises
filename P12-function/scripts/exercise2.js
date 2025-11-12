//Write a function called findMax that takes an array of numbers and returns the largest number.
let findMax = function(numbers){
    var num = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        if (num < numbers[i]){
            num = numbers[i];
        }
    }
    return num;
}
console.log(findMax([14,25,10,32,22]));
