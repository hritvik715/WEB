// let options = {
//     title: "my menu",
//     items: ['item1', 'item2'],
// }

// function showMenu() {
//     console.log(`${title} ${w} ${h}`);
//     console.log(item1);
//     console.log(item2);
// }

// showMenu(options);//errro bcz we r not destructing anything

//imp->👆 upper vaala error dega
let options = {
    title: "my menu",
    items: ['item1', 'item2'],
}

function showMenu({ title = "untitled", width: w = 100, height: h = 200, items: [item1, item2] }) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}

showMenu(options);