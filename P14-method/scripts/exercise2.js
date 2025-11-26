let students = [
    {
        id : 0,
        userName : "Ali Baharlooei",
        userPhoneNumber : "09368573248",
        userNCode : "1036564595",
        userAge : 21,
        userUniName : "beheshti",
        userCity : "Tehran"
    },
    {
        id : 1,
        userName : "Abbas",
        userPhoneNumber : "09122654895",
        userNCode : "053265987",
        userAge : 23,
        userUniName : "tehran",
        userCity : "Esfahan"
    },
    {
        id : 2,
        userName : "Ali Monajati",
        userPhoneNumber : "09053636958",
        userNCode : "031659875",
        userAge : 27,
        userUniName : "Azad najafabad",
        userCity : "Esfahan"
    },
    {
        id : 3,
        userName : "Parsa Rezaei",
        userPhoneNumber : "09122564898",
        userNCode : "1080696978",
        userAge : 26,
        userUniName : "azad karaj",
        userCity : "Tehran"
    },
    {
        id : 4,
        userName : "Parsa Ahmadi",
        userPhoneNumber : "09015645235",
        userNCode : "0311256387",
        userAge : 22,
        userUniName : "shamsipor",
        userCity : "Karaj"
    },
    {
        id : 5,
        userName : "Sina Kakaei",
        userPhoneNumber : "09368570536",
        userNCode : "015256578",
        userAge : 24,
        userUniName : "rajaei",
        userCity : "Tehran"
    },
    {
        id : 6,
        userName : "Amir Taremi",
        userPhoneNumber : "09126532485",
        userNCode : "031656545",
        userAge : 25,
        userUniName : "azad karaj",
        userCity : "Karaj"
    },
    {
        id : 7,
        userName : "Mehdi Emami",
        userPhoneNumber : "09121112565",
        userNCode : "3525163582",
        userAge : 23,
        userUniName : "beheshti",
        userCity : "Tehran"
    },
    {
        id : 8,
        userName : "Reza Baharini",
        userPhoneNumber : "0901356874",
        userNCode : "015252546",
        userAge : 26,
        userUniName : "shahriyar",
        userCity : "Karaj"
    }
]
let resultFindName = students.filter(findName => findName.userName.startsWith("A"));
console.log(resultFindName);

let resultFindAge = students.map(findAge => findAge.userAge > 22);
console.log(resultFindAge);
