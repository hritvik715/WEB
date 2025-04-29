// A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.



let huxn = {
    firstName: "huxn",
    lastName: "web dev",
    fullName: function () {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} & i love javascript`)
    }
}

let alex = {
    firstName: "huxn",
    lastName: "web dev",
    fullName: function () {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} & i love javascript`)
    }
}


// insetad of creating object again and again we can create object fxn

//imp->factory fxn
function createPerson(firstName, lastName, pl) {
    return {
        firstName: firstName,
        lastName: lastName,
        pl: pl,
        fullNAme: function () {
            console.log(`hello my name is ${this.firstName} ${this.lastName} and i love ${this.pl}`)
        }
    }
}

const john = createPerson("John", "Doe", "python")
console.log(john)
john.fullNAme()


//imp->we have already learnt enhanced object literals 

function createPerson(firstName, lastName, pl) {
    return {
        firstName,
        lastName,
        pl,
        fullNAme: function () {
            console.log(`hello my name is ${this.firstName} ${this.lastName} and i love ${this.pl}`)
        }
    }
}