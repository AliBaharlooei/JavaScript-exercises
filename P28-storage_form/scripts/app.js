let fullnameinput = document.getElementById("full-name");
let ageInput = document.getElementById("age");
let provinceInput = document.getElementById("province");
let cityInput = document.getElementById("city");
//=> show info
let showInfo = ()=>{
    let showFullName = sessionStorage.getItem("fullName");
    let showAge = sessionStorage.getItem("age");
    let showProvince = sessionStorage.getItem("province");
    let showCity = sessionStorage.getItem("city");
    document.getElementById("confirm-name").textContent = showFullName;
    document.getElementById("confirm-age").textContent = showAge;
    document.getElementById("confirm-province").textContent = showProvince;
    document.getElementById("confirm-city").textContent = showCity;
}
//=> set data in session storage
let nextStep = (step)=>{
    if(step == 2){
        sessionStorage.setItem("fullName", fullnameinput.value);        
        sessionStorage.setItem("age", ageInput.value);
    }
    else if( step == 3){
        sessionStorage.setItem("province", provinceInput.value);        
        sessionStorage.setItem("city", cityInput.value);
        showInfo()
    }
}
//=> function for show step
let showStep = (step)=>{
    let steps = document.querySelectorAll(".step");
    steps.forEach( items => items.style.display = "none");
    let showStepChose = document.getElementById("step"+step);
    showStepChose.style.display = "flex";
    nextStep(step)
}
showStep(1)