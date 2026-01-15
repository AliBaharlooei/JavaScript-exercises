let alertBtn = document.getElementById("alert");
let promptBtn = document.getElementById("prompt");
let confirmBtn = document.getElementById("confirm");
let text = document.querySelector("p");

alertBtn.addEventListener('click', () => {
    window.alert("سلام روز بخیر (:");
});
promptBtn.addEventListener('click', () => {
    let firstName = window.prompt("نام خود را وارد کنید :");
    let lastName = window.prompt("نام خانوادگی خود را وارد کنید");
    if(firstName && lastName != null){
        text.innerHTML = `${firstName} ${lastName} خوش آمدید`
    };    
});
confirmBtn.addEventListener('click', () => {
    let change = window.confirm("آیا میخواهید رنگ بک گراند عوض کنید ؟");
    if(change != false)
        document.body.style.backgroundColor = 'red';
});