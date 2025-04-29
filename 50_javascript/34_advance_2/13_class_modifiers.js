//four pillars of OOPS
// ->Encapsulation
// ->Abstraction
// ->Inheritance
// ->Polymorphism

// private , public , protected



function MyClass(publicField, privateField, protectedField) {
    //public field
    this.publicField = publicField

    //private field(closure)
    const _privateField = privateField //imp-> convention is to use underscore in private



    //protected field
    const _protectedField = protectedField


    //Public method
    this.publicMethod = function () {
        return `Public field: ${this.publicField}`;
    }


    //private method (closure)
    function _privateMethod() {
        return `Private method ${_privateField}`
    }

    //protected method (closure)
    function _protectedMethod() {
        return `Protected Method : ${_protectedField}`
    }


    //method to access protected method
    this.accessProtectedMethod = function () {
        // return _protectedMethod();
        return _privateMethod();
    }


}

const myObj = new MyClass("Public Data", "Private Data", "Protected Data")
console.log(myObj.publicField);
console.log(myObj._privateField)//imp-> ye undefoned dega kuki hamne upper (this.) use nhi kiya hai 
console.log(myObj._protectedField)




// console.log(myObj.publicMethod())
// console.log(myObj._privateMethod())//cant access bcz private 

// console.log(myObj._protectedMethod())



console.log(myObj.accessProtectedMethod());
