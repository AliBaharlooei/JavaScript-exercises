const forward = document.getElementById("forward");
const back = document.getElementById("back");
const go = document.getElementById("go");
const history = document.getElementById("history");

forward.addEventListener('click', () => {
    window.history.forward();
});
back.addEventListener('click', () => {
    window.history.back();
});
go.addEventListener('click', () => {
    window.history.go(1)
});
history.addEventListener('click', () => {
    window.alert(window.history.length)
});