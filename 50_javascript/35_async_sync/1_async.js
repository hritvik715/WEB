// Synchronous JavaScript refers to the traditional way of executing JavaScript code, where each operation is performed in a sequential and blocking manner. In other words, each line of code is executed one after the other, and the program will wait for each operation to finish before moving on to the next one. If an operation takes a long time to complete, it can potentially slow down the entire application, making it less responsive.


// Asynchronous JavaScript allows certain operations to be executed independently from the main program flow, so they don't block the execution of other tasks. This is typically achieved using techniques like callbacks, promises, and async/await, which allow developers to handle asynchronous operations more efficiently.


//imp->Synchronous code
function myFunc() {
    console.log(`inside function`)
}

console.log(`start`)
myFunc()
console.log(`end`)

console.log(`===================================`)

//imp->asynchronous code
console.log(`start`)
setTimeout(() => {
    console.log(`Inside setTime out`)
}, 2000)//ye after 2 second baad excute hogi toh (time le rha hai) (u can check in console iska output last mey aayega)


console.log(`End`)


//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732
//imp->isse padh => https://chatgpt.com/share/67471712-a840-8007-a602-e50334007732