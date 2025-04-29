//object destriucting and rest operator
let { a, b, ...rest } = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500,
}

// console.log(a);
// console.log(b);

console.log(rest);
