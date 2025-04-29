type User2 = {
    name: string;
    age?: number;
    readonly location: string;//imp-> readOnly property says we can only read this property we can not change the value of that
}



const usery: User2 = {
    name: "golu",
    // age: 20,//imp-> even after removing u wont get any error bcz age is defined optional
    location: "China"
}

// usery.location = 'India'//imp-> hum isse redefine nhi kar sakte kuki ye(location) readonly hai 

usery.name = 'golu'//imp-> it will work kuki ye read only nhi hai

console.log(`Nme ${usery.name} , Age : ${usery.age} , Location: ${usery.location}`);