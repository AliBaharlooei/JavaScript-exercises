//P-1
// var star = "";
// for(var i = 0; i < 4; i++){
//     for(var j = 0; j < 4; j++){
//         star += "*";
//         star +="\t"
//     }        
//     star += "\n";
// }
// console.log(star);
//P-2
var star = "";
for(var i = 1; i < 6; i++){
    for(var j = 0; j < i; j++){
        star += "*";
        star +="\t"
    }        
    star += "\n";
}
console.log(star);
// *	
// *	*	
// *	*	*	
// *	*	*	*	
// *	*	*	*	*	