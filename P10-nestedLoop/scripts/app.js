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
// var star = "";
// for(var i = 1; i < 6; i++){
//     for(var j = 0; j < i; j++){
//         star += "*";
//         star +="\t"
//     }        
//     star += "\n";
// }
// console.log(star);
// *	
// *	*	
// *	*	*	
// *	*	*	*	
// *	*	*	*	*	
//P-3
// var star = "";
// for(var i = 1; i < 6; i++){
//     for(var j = i; j < 6; j++){
//         star += "*";
//         star +="\t"
//     }        
//     star += "\n";
// }
// console.log(star);
// *	*	*	*	*	
// *	*	*	*	
// *	*	*	
// *	*	
// *	
// P-4
// var star = "";
// for(var i = 1; i < 7; i++){
//     for(var j = 6; j > i; j--){
//         star += "";
//         star +="\t"
//     }
//     for(var k = 0; k < i; k++){
//         star += "*"
//         star += "\t"
//     }
//     star += "\n";
// }
// console.log(star);

// 					*	
// 				*	*	
// 			*	*	*	
// 		*	*	*	*	
// 	*	*	*	*	*	
// *	*	*	*	*

// P-5
var star = "";
for(var i = 0; i < 7; i++){
    for(var j = 0; j < i; j++){
        star += "";
        star +="\t"
    }
    for(var k = 7; k > i; k--){
        star += "*"
        star += "\t"
    }
    star += "\n";
}
console.log(star);
//  *	*	*	*	*	*
// 	*	*	*	*	*	*	
// 		*	*	*	*	*	
// 			*	*	*	*	
// 				*	*	*	
// 					*	*	
// 						*	

