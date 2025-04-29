// classlist
const h1 = document.querySelector('h1');


console.log(h1.classList)//imp-> it will give the all class name of that tag

// add()
h1.classList.add("one")//imp-> it will add class on that tag
console.log(h1.classList)


// remove()
h1.classList.remove("one")
console.log(h1.classList)


// toggle()
h1.classList.toggle("apple")//imp-> if we have that class for that TAG then it will remove it if we dont have that class then it will add it to that TAG (toggle karega)
