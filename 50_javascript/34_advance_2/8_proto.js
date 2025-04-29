//imp-> prototypes are the parent of our objects


const arr = new Array();
console.log(arr);


function Person(firstName, lastName, pl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pl = pl;
}

const huxn = new Person("huxn", "web dev", "js")
console.log(huxn)
console.log(huxn.__proto__)
console.log(huxn.__proto__.__proto__)
console.log(huxn.__proto__.__proto__.__proto__)


//********** Chnaging the built-in method */
console.log(`*********************`)
console.log(Array.prototype)


Array.prototype.pop = function () {//imp-> hamne abb change kar diya pop ka fxn toh agar pop use kroge toh instead of removing last elemnt it will return that given string i.e. we can redefine 
    return "POP IT UP BABE"
}




const myArr = ['one', 'two', 'three']
console.log(myArr.pop());
console.log(myArr)





//------------------------

String.prototype.hello = function () {//imp-> we can also define our own method
    console.log(this)
    console.log(this.toUpperCase())
}

console.log('hello and welcome '.hello())







const brr = ['hello', 'yellow', 'bla']
console.log(brr)