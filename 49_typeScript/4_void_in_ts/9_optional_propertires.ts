type User1 = {
    name: string;
    age?: number;//imp-> qustn mark ki vajh se optional ban gya and it depends tumn {age} use karna chahte ho ki nhi
    location: string;
}



const userx: User1 = {
    name: "golu",
    // age: 20,//imp-> even after removing u wont get any error bcz age is defined optional
    location: "China"
}

console.log(`Nme ${userx.name} , Age : ${userx.age} , Location: ${userx.location}`);