function callbackHell(callback) {
    setTimeout(() => {
        const data = "inside (callbackHell) function"
        console.log(data)
        callback(data)
    }, 2 * 1000)
}

function firstFunc(data, callback) {
    setTimeout(() => {
        const processedData = `${data} - Processed First`
        console.log(`Inside (firstFunc) Function`)
        callback(processedData)
    }, 1000)
}

function secondFunc(data, callback) {
    setTimeout(() => {
        const processedData = `${data} - Processed second`
        console.log(`Inside (secodnFunc) Function`)
        callback(processedData)
    }, 1500)
}

//callback hell
callbackHell((data) => {
    firstFunc(data, (processedData1) => {
        secondFunc(processedData1, (processedData2) => {
            console.log(`final result of all functions  :${processedData2}`)
        })
    })
})

console.log(`================================`)

//imp->callback is not alwasy a asynchronous
// console.log(`start`)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach((n) => console.log(n))

// console.log(`end`)

