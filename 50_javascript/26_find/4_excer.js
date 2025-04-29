
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];
// let product;

// for (let i = 0; i < products.length; i++) {
//     if (products[i].category === "Books") {
//         product = products[i];
//         break;
//     }
// }
// console.log(product);


//imp->instead of writing that much of code in for loop u can do directly

const product = products.find((product) => product.category === 'Books');
console.log(product);

const product1 = products.filter((product) => product.category === 'Books');
console.log(product1);