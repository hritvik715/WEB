function user(name, age, work) {
    return {
        name: name,
        age: age,
        work: work,
    };
}



const huxn = user("huxn", 19, "pprogrammer");
const alex = user("alex", 18, "designer");
console.log(huxn);
console.log(alex);


console.log(`---------------`)
//imp->Enhanced object luetrals
function userUpdate(name, age, work) {
    return {
        name,
        age,
        work,
        intro: function () {
            console.log(`my name is ${name} and i am ${age} yrs old and i am a ${work}`);
        }
    };
}



const golu = userUpdate("golu", 185, "coder");
console.log(golu);//yha dekhoge name abb bhi pehle ki tarah kaam kar rha hoga
console.log(golu.intro());

//imp-> enhanced object literals part2
function userUpdate2(name, age, work) {
    return {
        name,
        age,
        work,
        intro() {
            console.log(`my name is ${name} and i am ${age} yrs old and i am a ${work}`);
        }
    };
}

const animal = userUpdate("tiger", 65, "hunting");
console.log(animal);
console.log(animal.intro())



//imp-> using arrow
function userUpdate2(name, age, work) {
    return {
        name,
        age,
        work,
        intro: () => {
            console.log(`my name is ${name} and i am ${age} yrs old and i am a ${work}`);
        }
    };
}
const servant = userUpdate("anananya", 23, "maid");
console.log(servant.intro());