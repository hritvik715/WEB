//the spread operator is commonly used to make shallow copies of JS objects
//using this operator makes the code concise and enhance its redability



const obj1 = {
    x: 1,
    y: 2
}
const obj2 = {
    z: 3
}
const obj3 = { ...obj1, ...obj2 };
const obj4 = { obj1, obj2 };
console.log(obj3);
console.log(obj4);//nested object