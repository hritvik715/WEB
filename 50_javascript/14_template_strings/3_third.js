// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions



// function greet(name) {
//     return `hello ${name}`;
// }

// console.log(greet(`huxn`));

// greet = (name) => {
//     return `hello ${name}`;
// };

// console.log(greet("huxn"));


//imp-> if u have only one parameter then andar ka paramter remove karke bhi kaam kar sakte ho but if u have more than one parameter then u have to provide param=nthesis




greet = name => {
    return `hello ${name}`;
}
console.log(greet("golu"));


intro = (naam, location) => {
    return `hello ${naam}  from ${location}`;
};
console.log(intro("golu", "delhi"));

//imp-> if ur fxn is not taking any parameter then simple sirf parenthesis use kro

welCome = () => {
    return `hello world`;
}
console.log(welCome());



//imo-> if u remove return keyword then u have to remove curly brackets too (agar inside fxn more than one line of code hua toh curly braces use krenge)
const kaam = work => `you do your ${work}`;
console.log(kaam("coding"));

