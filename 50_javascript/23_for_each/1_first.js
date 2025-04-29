//whatever is inside the fxn that logic happens
const colors = ['teal', 'blue', 'red', 'green'];

colors.forEach(color => console.log(color));

console.log(`-------------------------------------`);



const words = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];

const capWords = words.forEach((word, index, arr) => {
    // console.log(`word : ${word}`);
    // console.log(`index : ${index}`);
    // console.log(`arr : ${arr}`);
    arr[index] = word[0].toUpperCase() + word.substring(1);
    // console.log(`substring : ${word.substring(1)}`);
    // console.log(`----------------`);
});


console.log(words);