//imp-> to change the name of the variable
const num = {
    x: 100,
    y: 200,
}
// const { x, y } = num;
// console.log(x);
// console.log(y);




const { x: new1, y: new2 } = num;
console.log(new1);
console.log(new2);
console.log(x);//we have changed name so it will give error