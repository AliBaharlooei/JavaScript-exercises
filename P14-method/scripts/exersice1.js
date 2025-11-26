let firstNames = ["ali", "amir mohammad", "sina", "erfan"];
//forEach
let capitalFirstNames = []
firstNames.forEach(element => {
    capitalFirstNames.push(element.toUpperCase())
})
console.log(firstNames);
console.log(capitalFirstNames);
//map
let capitalFirstNamesMap = firstNames.map(item =>{
   return item.toLocaleUpperCase()
});
console.log(capitalFirstNamesMap);