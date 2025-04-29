// there are three type of acces modifiers in tsHard1 => public,private , protected


// public => it can be accesaable anywhere inside our program
//private =>it can only be accesaable inside animal class
//protected = >it can be accesaable inside the animnal and also if we extend animal to some dog like that then there also it can be accessable










//imp->part-1 (Public)

// class Human {
//     public first: string;
//     public last: string;

//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
// }

// let p1 = new Human("john", "doe")
// console.log(p1.first)
// console.log(p1.last)





//part2 (private)


// class Human {
//     private first: string;
//     public last: string;

//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }


//     getName(): string {//imp-> first is accesable inside class
//         return ` hello ${this.first} ${this.last}`;
//     }
// }

// let p1 = new Human("john", "doe")
// console.log(p1.first)//imp-> it is private so error dega
// // console.log(p1.last)
// console.log(p1.getName());









//imp->part3 (protected)
class Human {
    private first: string;
    public last: string;
    protected age: number;

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }


    getName(): string {//imp-> first is accesable inside class
        return ` hello ${this.first} ${this.last} Age: ${this.age}`;
    }
}

//imp->
// let p1 = new Human("john", "doe", 20)//it give error kuki {age} protected hai


class Person2 extends Human {
    constructor(first: string, last: string, age: number) {
        super(first, last, age)//imp-> Calls the constructor of the parent class (Human)

    }
}



const huxn15 = new Person2('Huxn', 'webdev', 20)

console.log(huxn15);