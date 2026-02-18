localStorage.setItem("firstName","Ali");
localStorage.setItem("lastName","Baharlooei");
localStorage.setItem("age","21");

console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("lastName"));
console.log(localStorage.getItem("age"));

console.log(localStorage.length);

console.log(localStorage.key(1));

localStorage.removeItem("lastName");
console.log(localStorage.getItem("lastName"));

localStorage.clear();
console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("age"));