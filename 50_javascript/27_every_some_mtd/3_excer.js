// REFACTOR -> USE EVERY & SOME HELPERS
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];

// let allProductsBooks = true;
// let someProductsBooks = false;

// for (let i = 0; i < products.length; i++) {
//     if (products[i].category != "Books") {
//         allProductsBooks = false;
//     } else {
//         someProductsBooks = true;
//     }
// }
// console.log(allProductsBooks);
// console.log(someProductsBooks);


//imp-> instead of that long code u can do this

//do all products have a catogory of books?
let allProductsBooks = products.every((product) => product.category === "Books");


console.log(allProductsBooks);

//do any products have category of books?
let someProductsBooks = products.some((product) => product.category === 'Books');
console.log(someProductsBooks);