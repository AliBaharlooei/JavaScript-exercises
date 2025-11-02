var num = 10;
var bool = false;
while(num < 100){
    if(num % 7 == 0 && bool != true){
        bool = true
        console.log(num);
    }
    num++;
}