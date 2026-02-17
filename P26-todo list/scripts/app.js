let btnAddTask = document.getElementById("btn_add-task");
let containerTodo = document.querySelector(".container-todo");

//=> function for add task
let addTask = () => {
    let taskTitle = prompt("تسک مد نظر خود را وارد کنید");
    let taskDate = prompt("تاریخ سر رسید را وارد کنید","1402/02/17");
    // create box
    const box = document.createElement('div');
    box.classList.add("container-todo__box");
    // container todo box check
    const boxCheck = document.createElement('div');
    boxCheck.classList.add("container-todo__box-check");
    const todoCheck = document.createElement('input');
    todoCheck.name = "todoCheck";
    todoCheck.type = "checkbox";
    boxCheck.appendChild(todoCheck);
    box.appendChild(boxCheck);
    // container todo box text
    const boxTitle = document.createElement('div');
    boxTitle.classList.add("container-todo__box-title");
    const titleTop = document.createElement('h3');
    titleTop.classList.add("container-todo__box-title__top");
    titleTop.textContent = taskTitle;
    const titleBottom = document.createElement('p');
    titleBottom.classList.add("container-todo__box-title__text__bottom");
    titleBottom.textContent = `تاریخ سر رسید ${taskDate}`;
    boxTitle.appendChild(titleTop);
    boxTitle.appendChild(titleBottom);
    box.appendChild(boxTitle);
    // container todo box action
    const boxAction = document.createElement('div');
    boxAction.classList.add("container-todo__box-action");
    const imgDelete = document.createElement('img');
    imgDelete.src = "./imgs/icons8-bin-48.png";
    imgDelete.classList.add("container-todo__box-action__delete");
    const imgEdit = document.createElement('img');
    imgEdit.src = "./imgs/icons8-eye-48.png";
    imgEdit.classList.add("container-todo__box-action__edit");
    boxAction.appendChild(imgDelete);
    boxAction.appendChild(imgEdit);
    box.appendChild(boxAction);
    // append to box
    containerTodo.appendChild(box);
};
//=> btn add task
btnAddTask.addEventListener('click', addTask);
//=> btn completion task
containerTodo.addEventListener('click',(element)=>{
    let isCkeckBoxClick = element.target.name == "todoCheck";
    if(isCkeckBoxClick){
        let isChecked = element.target;
        let CheckBox = element.target.closest(".container-todo__box-check");
        let titleBox = CheckBox.parentElement.querySelector(".container-todo__box-title");
        if(isChecked.checked){
            titleBox.classList.add("ticked");
        }
        else{
            titleBox.classList.remove("ticked");
        };
    };
});
//=> btn deleted task
containerTodo.addEventListener('click',(element)=>{
    let taskBox = element.target.closest(".container-todo__box");
    let isChecked = element.target.classList.contains("container-todo__box-action__delete");
    if(isChecked){
        taskBox.remove()
    }
})