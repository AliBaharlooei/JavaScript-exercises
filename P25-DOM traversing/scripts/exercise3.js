let container = document.getElementById("container");
let createEl = (tagName,tagContent)=>{
    let tag = document.createElement(tagName);
    tag.textContent = tagContent
    return tag
}
let myName = createEl('p','Im Ali Baharlooei last El');
container.appendChild(myName);
let myAge = createEl('p','Im 21 years old');
container.insertBefore(myAge,container.children[1]);