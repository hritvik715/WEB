//imp-> promise => a promise is an object representing the eventual completion or failure of an asynchronous operation


//a promise has three states
//->pending
//->fullfilled / Resolved
//->rejected

//new promise() => a javascript promise object contains both the producing code and calls to the  consuming code . It can be used to deal with Asynchronous operation in javascript


//3 states
// pending
// fullfilled/resolved
// rejected




//imp->NOTE:-
// initial state ,not yet fullfilled or rejected (pending )
// promise completed <-- fullfilled/ resolved
// promise failed <-- rejected 








function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} is an even number`)
        }
        else {
            reject(`${number} is an odd number`);
        }
    });
}


//imp-> if something is true we are going to resolving our promise and if something is false we are going to rejeecting our promise



// const numberToCheck = 7//odd
const numberToCheck = 6//even


checkNumber(numberToCheck)
    .then((message) => {//imp->if promise is resolve this code will run
        console.log(`success : ${message}`)
    }).catch(error => {//imp->if promise is rejected this code will run
        console.log(`  ${error}`)
    });

