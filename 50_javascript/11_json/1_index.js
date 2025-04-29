//JSON => js object notation
// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used for transmitting data between a server and a web application, as well as for storing configuration settings and data.
// In JavaScript, JSON is represented as a string, and it closely resembles JavaScript object literal notation. It consists of key-value pairs, where keys must be strings, and values can be strings, numbers, booleans, arrays, or nested objects. The key-value pairs are separated by commas, and the entire JSON object is enclosed in curly braces {}.
// -----------------------
// JavaScript provides methods to work with JSON data:
//imp-> aise curly braces kay andar daalte hai json ko
// {
//     "name": "golu", //imp-> yha double quote mey dena hota hai single quote mey error aa jayega
// }












//imp-> concept from here
const person = {
    "name": "golu",//imp-> js mey name se double quote hta bhi doge toh bhi shi kaam krega
    "age": 20,
    "email": "golu715@gmail.com",
    "isSubscribed": true,
    "hobbies": [
        "reading",
        "running",
        "cooking"
    ],
    "address": {
        "city": "Delhi",
        "idk": true
    },
};







//imp->JSON.stringify()
// console.log(person);
const jsonString = JSON.stringify(person);
console.log(jsonString);//ye person ko json/string mey convert kar degi




const parsedObject = JSON.parse(jsonString);//imp-> ye normal kar degi 
console.log(parsedObject);



