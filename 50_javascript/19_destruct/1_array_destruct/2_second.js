//imp-> instead of doing(jo pichle file mey hai)  we can use destructing
const foo = ['one', 'two', 'three']
// const [one] = foo;
const [one, two, three] = foo;


console.log(one);
console.log(two);
console.log(three);



console.log(`-------------`);

const items = ['ek', 'do']
const [huxn, yellow, green, blue] = items;
console.log(huxn);
console.log(yellow);
console.log(green);//imp-> it will give undefined
console.log(blue);//imp-> it will give undefined



