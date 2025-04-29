type User = {//imp-> type alias
    name: string;
    age: number;
    location: string
}

const printUserInfo = (user: User) => {
    return `Name: (${user.name}) age: (${user.age}) location: (${user.location}) `
}


const res5 = printUserInfo({ name: "alex", age: 20, location: "USA" })

console.log(res5);