// --------------------------------------------------
// Refactor this code to use async/await
// console.log("Start");

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid Name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Football", "Singing", "Solving Math"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("HuXn")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

// --------------------------------------------------

// Refactoring




console.log("Start");

function getUserDataFromDB(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Valid Name");
            resolve(name);
        }, 2000);
    });
}

function getUserHobbies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting user hobbies...");
            resolve(["Football", "Singing", "Solving Math"]);
        }, 2000);
    });
}

// getUserDataFromDB("HuXn")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));


//imp-> insted of then and catch we will use async and await


async function showUserHobbies() {
    try {
        const name = await getUserDataFromDB("huxn")
        const hobby = await getUserHobbies(name)
        console.log(hobby)
    }
    catch (erro) {
        console.log(error)
    }
}


showUserHobbies()

console.log("End");
