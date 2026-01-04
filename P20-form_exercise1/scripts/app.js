const allInput = document.getElementById("all");
const trueTestInput = document.getElementById("trueTest");
const falseTestInput = document.getElementById("falseTest");
const btnCheck = document.getElementById("btnCheck");
const result = document.getElementById("result");

let fullValues = () => {
    if(allInput.value == "" || trueTestInput.value == "" || falseTestInput.value == ""){
        result.innerText = "لطفا تمامی مقادیر پر کنید";
        result.style.visibility = "visible";
    }
}

let correctValues = () => {
    let allInputNumber = Number(allInput.value);   
    let trueTestInputNumber = Number(trueTestInput.value);   
    let falseTestInputNumber = Number(falseTestInput.value);
    if((trueTestInputNumber + falseTestInputNumber) > allInputNumber){
        result.innerText = "تعداد سوالات درست غلط بیشتر از کل سوالات است (لطفا مقادیر درست وارد کنید)";
        result.style.visibility = "visible";
    }
}

btnCheck.addEventListener('click', () => {
    let calculation = ((trueTestInput.value * 3) - falseTestInput.value) / (allInput.value * 3) * 100;
    result.innerText = calculation + " %"
    result.style.visibility = "visible";
    fullValues();
    correctValues();
});

