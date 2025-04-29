let password: string | number = 20//imp-> number ki default value number de di hai 
// let password: string | number = true//imp-> error dega kuki ya toh string de sakte orr ya toh number de sakte 







//imp-> alag hai yha se
type userInfo = {
    first: string;
    last: string;
    age: number;
}


type AccountDetails1 = {
    email: string;
    password: string;
}

let user: UserInfo | AccountDetails1 = {
    // first: "golu",
    // last: 'mohan',
    // age: 20,
    email: "hritvik@gmail.com",
    password: 'password123'
}






// const itmes: (number | string) = [1, 5, 5, 'hello', true]//imp-> boolean value error degi kuki hmane yha sirf number and string ko liya hai


const item: (number | string)[] = ['golui', 1, 5, 5, 'hello']
console.log(item)