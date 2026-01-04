const fullName = document.getElementById("fullName");
const gmail = document.getElementById("gmail");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const btnCheck = document.getElementById("btnCheck");
const result = document.getElementById("result");

let login = () => {
    result.innerHTML = "ثبت نام با موقیت انجام شد";
    result.style.visibility = 'visible'
}

btnCheck.addEventListener('click', () => {
    fullName.nextElementSibling.innerHTML = '';
    gmail.nextElementSibling.innerHTML = '';
    password.nextElementSibling.innerHTML = '';
    repeatPassword.nextElementSibling.innerHTML = '';
    result.innerHTML = '';
    result.style.visibility = 'hidden';

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const vaildation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let isVadid = true;
    if(fullName.value == ""){
        fullName.nextElementSibling.innerHTML = 'نام کاربری خالی است *';
        isVadid = false;
    }
    if(vaildation.test(gmail.value) != true){
        gmail.nextElementSibling.innerHTML = 'ایمیل به درستی وارد نشده است *';
        isVadid = false;
    }
    if(passwordRegex.test(password.value) != true){
        password.nextElementSibling.innerHTML = 'رمز عبور مناسب انتخاب کنید *';
        isVadid = false;
    }
    if(repeatPassword.value !== password.value){
        repeatPassword.nextElementSibling.innerHTML = 'تکرار رمز به درستی وارد نشده است *';
        isVadid = false;
    }
    if(isVadid){
        login();
    }
});