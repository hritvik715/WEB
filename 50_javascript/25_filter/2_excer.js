// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18



const ages = [32, 33, 16, 40];
const adults = ages.filter(age => age > 18);
console.log(adults)

//or
const ages1 = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

const res = ages1.filter(checkAdult);
console.log(res);