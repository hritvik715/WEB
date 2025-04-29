const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function () { };

map.set(keyOne, "value of key one");
map.set(keyTwo, "value of key two");
map.set(keyThree, "value of key three");








for (let [key, value] of map) {
    console.log(`${key} -- ${value}`);
}

console.log(`===================`);

for (let key of map.keys()) {
    console.log(key);
}



console.log(`===================`);

for (let value of map.values()) {
    console.log(value);
}