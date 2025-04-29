// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener("keypress", () => {
//     console.log("key press")
// })


// input.addEventListener("keyup", () => {
//     console.log("key press")
// })

// input.addEventListener("keydown", () => {
//     console.log("key press")
// })


//USEFUL properties and methods
input.addEventListener("keypress", (e) => {
    console.log(e.charCode)
    console.log(e.code)
    console.log(e.ctrlKey)//ctrl press karke key press kroge toh true dega else false dega
    console.log(e.key)
    console.log(e.shiftKey)//whether u hold shift key or not
})


//imp-> use of ($0) -> 9:51:00 =>developer tools console mey jaao and $0 type kro isse vo elemnt console mey aa jaayega