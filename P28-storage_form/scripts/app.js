//=> function for show step
let showStep = (step)=>{
    let steps = document.querySelectorAll(".step");
    steps.forEach( items => items.style.display = "none");
    let showStepChose = document.getElementById("step"+step);
    showStepChose.style.display = "flex";
}
showStep(1)