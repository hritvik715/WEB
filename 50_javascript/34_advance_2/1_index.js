//console.log(window)


// console.log(this)//it will give same as window output

// console.log(this === window)//true


// window.firstName = "huxn"
// this.lastName = "web dev"
// console.log(window)



// //------------------
// function printThis() {
//     return this;//window
// }
// const res = printThis();
// console.log(res);


//---------------------------------------

// const obj = {
//     firstName: "huxn",
//     lastName: "web dev",
//     fullName: function () {
//         // return this;//gives the owner object
//         return `${this.firstName} ${this.lastName}`
//     }
// }



// const res1 = obj.fullName();
// console.log(res1);








//--------------------------------------

const obj = {
    firstName: "huxn",
    lastName: "web dev",
    fullName: () => {
        return this;//arrow fxn ki vajah se window object target hogi na ki owneer object kuki arrow fxn ko pta hi nhi hai ki owner kon sa hai kuki koi name nhi hai fxn ka
        // return `${this.firstName} ${this.lastName}`
    },
};
//imp-> arrow fxn use karne kay vajah this.firstName vaala undefined  output milega and sirf this vaala shi output aayega why?


const res1 = obj.fullName();
console.log(res1);