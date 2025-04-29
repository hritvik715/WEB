// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.


function giveMe4(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

giveMe4(1, 2, 3, 4);

colors = ["red", "orange", "yellow", "green"];
giveMe4(colors); // a will be whole array & others will be undefined
console.log(`--------------`);
giveMe4(...colors); // We're spreading that array into sperate arguments