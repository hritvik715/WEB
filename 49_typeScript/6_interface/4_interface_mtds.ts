interface Person256 {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;
}

function greet1(person: Person256) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const golu: Person256 = {
    firstName: "golu",
    lastName: "pandit",
    age: 30,
    sayHello() {
        console.log("hi there");
    },
};



const huxn45: Person256 = {
    firstName: "huxnn",
    lastName: "webdev",
    age: 30,
    sayHello() {
        console.log("hi there");
    },
};




greet1(golu);
greet1(huxn45);

