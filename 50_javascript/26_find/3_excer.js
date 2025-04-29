// -------------------------------
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18
const ages = [3, 10, 18, 20];


function checkAge(age) {
    return age > 18;
}
const res = ages.find(checkAge);
console.log(res);