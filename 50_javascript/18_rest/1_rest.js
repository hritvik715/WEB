// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.




function user(userData) {
    console.log(userData);
}

user('huxn', 19, 'peogramming', 'football');//imp->saare input nhi lega ye


function details(...data) {
    console.log(data)
}
console.log('golu', 19, 'coder', 'carrom');




// function info(...data, x) {//imp-> it will give error kuki rest operator last me aana chahiye
//     console.log(x);
//     console.log(data);
// }

// info('mohan', 23, 'farmer');
console.log(`------------`);
function info2(x, ...data) {//imp-> this is correct bcz rest parameter must be last parameter
    console.log(x);
    console.log(data);//imp-> agar two or more parameter hui toh vo array kay andar aa jaayega
}

info2('haddop', 98, 'engineer , chess')