let container = document.getElementsByClassName("container");
let createEl = (tagName,tagContent)=>{
    //=> 1
    // let tg = document.createElement(tagName);
    // let tc = document.createTextNode(tagContent);
    // tg.append(tc);
    // container[0].append(tg);
    //=> 2
    let tag = document.createElement(tagName);
    tag.textContent = tagContent
    container[0].append(tag)
}
createEl('h1','hello world');
createEl('p','Im Ali Baharlooei');