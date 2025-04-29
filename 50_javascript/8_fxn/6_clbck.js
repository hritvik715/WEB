function greet(name, cb) {
    console.log(`hello ${name}`);
    cb();
}

function cb() {
    console.log(`i am callback fxn`);
}



greet("john", cb);

//imp-> 👇  orr direct bhi kar sakte ho kuch aise 
greet("john", function cb() {
    console.log(`i am callback fxn`);
})