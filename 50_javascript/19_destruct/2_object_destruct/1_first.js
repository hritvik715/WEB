//in  object destructing order doesn't matter but the name does matter


const student = {
    name: 'golu',
    position: 'first',
    rollNo: 27,
}

// const { name } = student;
// console.log(name); 

// const { color1 } = student;
// console.log(color1);//imp->error bcz name does matter in object destructing

//imp-> name ko idhar udhar 
const { position, rollNo, name } = student;
console.log(rollNo);
console.log(name);
console.log(position);
