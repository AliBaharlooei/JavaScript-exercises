
window.onload = () =>{
    containerResult.innerHTML = createStdents(students)
}

let createStdents = (student) =>{
    let str = '';
    student.forEach((element) => {
        str += `
        <div class="container-bottom__result">
            <p>Full name : ${element.userName}</p>
            <p>Phone number : ${element.userPhoneNumber}</p>
            <p>NCode : ${element.userNCode}</p>
            <p>Univercity : ${element.userUniName}</p>
            <p>Age : ${element.userAge}</p>
            <p>City : ${element.userCity}</p>
        </div>
    `}); 
    return str
}

searchBtn.onclick = () => {
    let showResult = searchInput.value;
    let filterStudens = students.filter(element => {
        return element.userName.includes(showResult)
    })

    if(filterStudens.length > 0){
        containerResult.innerHTML = createStdents(filterStudens)
    }
    else{
        containerResult.innerHTML = "<h2> not find ! </h2>"
    }
}
