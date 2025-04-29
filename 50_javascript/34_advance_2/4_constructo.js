// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.


//imp->name of constrcuotr fxn alwys start with capital letter
function CreatePeople(firstName, lastName, pl) {
    this.firstName = firstName
    this.lastName = lastName
    this.pl = pl
    this.info = function () {
        console.log(`hello my name is ${this.firstName} ${this.lastName}and i love ${this.pl}`)
    }
}

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword



const john = new
    CreatePeople("john", "doe", "golang")

console.log(john)


john.info();




//--------------------------------
console.log(`-------------------------`)

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getInfo = function () {
        // return this.title + " by " + this.author + " (" + this.year + ")";
        return `${this.title} by ${this.author} (${this.year})`;
    };
}



const book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);


const bookRes1 = book1.getInfo()
console.log(bookRes1);

const bookRes2 = book2.getInfo()
console.log(bookRes2);

console.log(book1)
console.log(book2)