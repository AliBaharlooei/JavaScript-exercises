//exercise 3
var names = [
    "ali",
    "reza",
    "mohammad",
    "morvarid",
    "behshti"
]
function startsWithA(startsWithChar){
    var nameA = [];
    for(var i = 0; i < names.length; i++){
        if(names[i].startsWith(startsWithChar)){
            nameA.push(names[i]);
        }
    }
    console.log(nameA);
}
startsWithA("a");
startsWithA("r");
startsWithA("m");
startsWithA("b");