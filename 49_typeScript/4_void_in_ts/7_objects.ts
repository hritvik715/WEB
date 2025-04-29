const person12: { firstName: string; lastName: string; age: number } = {
    firstName: 'Golu',
    lastName: "mohan",
    age: 30
}


console.log(`name: ${person12.firstName} ${person12.lastName} , Age:${person12.age}`)















console.log(`================================`)


function printUser(): { name: string; age: number; location: string } {
    return {
        name: 'golu',
        age: 20,
        location: 'china'
    }
}


const res4 = printUser();
console.log(res4)