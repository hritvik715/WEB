function callbackHell(callback) {
    // return new Promise((resolve, reject) => {
    return new Promise((resolve) => {//imp-> in this case we do not need rejected
        setTimeout(() => {
            const data = "inside (callbackHell) function 1"

            console.log(data)
            resolve(data)
        }, 2000)

    })
}

function firstFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processData = `${data} - Processed firstFunc data`
            console.log("Inside  (firstFunc) function ")
            resolve(processData)
        }, 2000);
    })
}

function secondFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processData = `${data} - Processed secondFunc data`
            console.log("Inside  (secondFunc) function")
            resolve(processData)
        }, 1500);
    })
}

//imp-> then => when the promise is true
//imp-> catch => when the promise is false


callbackHell().then(data => firstFunc(data))
    .then((processData1) => secondFunc(processData1))
    .then(processData2 => console.log(`final result of all function with promises : ${processData2}`))
    .catch(error => console.log(`Error : ${error}`))



