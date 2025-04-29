//strings
let firstName = 'Huxn';//imp-> to store string u can use double quote , single quote , backtick aswell

let secondName = "webdev";
let fullName = firstName + " " + secondName;
console.log(firstName);
console.log(secondName);
console.log(fullName)

//1. concatenation
let totalName = firstName.concat(secondName);
console.log(totalName);



//2. Append
firstName += " seomething else";
console.log(firstName);


//3. Length
let model = 'nano';
console.log(model.length);

//4. cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());


//5. slice
let name = 'golu';
console.log(name.slice(0, 2));//ending point is total number of charcaters we want
console.log(name.slice(1, 4));



//6. split and join(ignore this method)
console.log(name.split("").join("-"));
console.log(name.split(" "));



//7. includes 
console.log(name.includes("o"));




//8.trim
let x = "        mohan    ";
console.log(x);
console.log(name.trim());
