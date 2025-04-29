const person = {
    name: "golu",
    age: 20,
    country: "USA",
}


// function printPersonInfo(person) {
//     console.log(`name : ${person.name}`);
//     console.log(`age :${person.age}`);
//     console.log(`country : ${person.country}`);
// }
// printPersonInfo(person);


//imp-> instead of doing this isko destructor kardo
function printPersonInfo({ name, age, country }) {
    console.log(`name : ${name}`);
    console.log(`age :${age}`);
    console.log(`country : ${country}`);
}
printPersonInfo(person);