// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("h1").length)


// 2. getElementById
console.log(document.getElementById("main"));
console.log(document.getElementById("id-1"));



// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"))
console.log(document.getElementsByClassName("cls-1"))
console.log(document.getElementsByClassName("apple"))//imp-> it will give nothing bcz apple naame ka class hai hi nhi


// 4. querySelector
console.log(document.querySelector("h1"))
console.log(document.querySelector(".cls"))
console.log(document.querySelector("cls"))//imp-> it will give null bcz we forgot to use period(dot) there
console.log(document.querySelector(".huxn"))//imp-> it will give null


console.log(document.querySelector("#id-1"))


// 5. querySelectorAll
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll("li").length)


// ---------------------------------------
// Storing data in variables
const apple = document.querySelector("h1");
console.log(apple)
document.getElementsByTagName("h1")