function callbackHell() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = `Inside (callbackHell) function`;
            console.log(data)
            resolve(data)
        }, 2000);
    })
}

function firstFunc(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `${data} - processed first`
            console.log("Inside (firstFunc) function")
            resolve(processedData)
        }, 2000);
    })
}



function secondFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processData = `${data} - Processed second`
            console.log(`Inside (secondFunc) function`)
            resolve(processData)
        }, 1500);
    })
}

async function processDataWithAsyncAwait() {
    try {
        const data = await callbackHell()
        const processData1 = await firstFunc(data)
        const processData2 = await secondFunc(processData1)
        console.log(`Final result of all function with async/await : ${processData2}`)

    }
    catch (error) {
        console.log(`Erro : ${error}`)
    }
}


processDataWithAsyncAwait();