var carName = document.getElementById("carName")
var btnCheck = document.getElementById("btnCheck")
var imgCar = document.getElementById("imgCar")
btnCheck.onclick = function(){
    // if (carName.value == "132")
    //     imgCar.src="imgs/132.jpg"
    // else if (carName.value == "207")
    //     imgCar.src="imgs/207.jpg"
    // else if (carName.value == "پارس")
    //     imgCar.src="imgs/pars.jpg"
    // else if (carName.value == "کوییک")
    //     imgCar.src="imgs/quick.png"
    // else if (carName.value == "سورن")
    //     imgCar.src="imgs/soren.webp"
    // else if (carName.value == "تیبا")
    //     imgCar.src="imgs/tiba.jpg"
    // else
    //     alert("!خودرویی وجود ندارد")

    // ساخت همین تمرین با switch case
    car = carName.value;
    switch (car) {
        case "132":
            imgCar.src="imgs/132.jpg"
            break;
        case "207":
            imgCar.src="imgs/207.jpg"
            break;
        case "پارس":
            imgCar.src="imgs/pars.jpg"
            break;
        case "کوییک":
            imgCar.src="imgs/quick.png"
            break;
        case "سورن":
            imgCar.src="imgs/soren.webp"
            break;
        case "تیبا":
            imgCar.src="imgs/tiba.jpg"
            break;
        default:
            alert("خودرویی وجود ندارد")
            break;
    }
}