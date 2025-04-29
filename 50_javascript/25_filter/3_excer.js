// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];


function length(word) {
    return word.length > 6;
}

const res = words.filter(length);
console.log(res);

//or
const result = words.filter((word) => word.length > 6);
console.log(result);