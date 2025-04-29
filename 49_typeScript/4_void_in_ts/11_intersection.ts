type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

type UserCredentials = UserInfo & AccountDetails//imp-> intersection types

const huxn1: UserCredentials = {
    first: "huxn",
    last: "webdev",
    age: 20,
    email: "golu@725gmail.com",
    password: "paassword12"
}


console.log(`Name : ${huxn1.first} ${huxn1.last} age: ${huxn1.age} email: ${huxn1.email} password: ${huxn1.password}`)