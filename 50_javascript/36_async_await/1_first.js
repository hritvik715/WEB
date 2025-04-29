//imp->Async Func?

// Async is a special function that is designed to operate asynchronously, meaning that it can perform tasks in the background while other code continues to execute. Async functions are marked with the async keyword.




//imp-> await
// The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code.

function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user data retrieved from the server")
        }, 4000);
    })
}



//imp->creating asynchrounous fxn
async function getUserData() {
    try {
        const data = await fetchDataFromServer()
        console.log(data)
        console.log("Remaining : task can be execuetd here.")
    } catch (error) {
        console.log(error)
    }
}

getUserData()