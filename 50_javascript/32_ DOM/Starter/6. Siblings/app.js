// let firstLi = document.querySelector('li')
// console.log(firstLi)
// console.log(firstLi.parentElement)
// console.log(firstLi.parentElement.parentElement)
// console.log(firstLi.parentElement.parentElement.parentElement)

// console.log(firstLi.parentElement.parentElement.parentElement.parentElement)//imp-> kuki html kay pehle koi pareent nhi hai 

// console.log(`===============================`)
// //childrens
// let ul = document.querySelector('ul')
// console.log(ul.children)
// console.log(ul.children[0])
// console.log(ul.children[1])
// console.log(ul.children[2])
// console.log(ul.children[3])
// console.log(ul.children[4])

// console.log(ul.children[0].innerText);
// console.log(ul.children[0].innerText = "one");



console.log(`==============`)


//siblings
let firstLi1 = document.querySelector("li")
console.log(firstLi1.nextElementSibling.textContent)
console.log(firstLi1.nextElementSibling.nextElementSibling.textContent)
console.log(firstLi1.nextElementSibling.nextElementSibling.nextElementSibling.textContent)



let fourthLi = document.querySelector(".fourth")
console.log(fourthLi.textContent)
console.log(fourthLi.previousElementSibling.previousElementSibling)

