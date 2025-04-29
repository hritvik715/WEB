// href
const a = document.querySelector('a');
console.log(a.href)
console.log(a.href = "www.google.com")//imp-> providing new values to it

console.log(`======================`)

// value
const input = document.querySelector('input')
console.log(input.value)
// console.log(input.value = "bye")
console.log(input.type = "text")
console.log(input.placeholder = "please provide a strong password")//imp-> to see the result remove bye and hwllo from the input box 

console.log(`======================`)


// type
console.log(input.type)
console.log(`======================`)

// getAttribute(attrName)
console.log(a.href)
console.log(input.getAttribute("type"))
console.log(input.getAttribute("placeholder"))

console.log(`======================`)



// setAttribute(attrName, value)
a.href = "https://www.youtube.com"//imp-> instead of facebook now it will open youtube
input.setAttribute("placeholder", "password")
input.setAttribute("type", "password")





