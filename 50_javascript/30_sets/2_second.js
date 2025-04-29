const mySet = new Set();
mySet.add('apple');//u can add string as well as number
mySet.add('banana');
mySet.add('orange');
mySet.add('banana');

console.log(mySet.has("banana"));
console.log(mySet.has("huxn"));




console.log(mySet);

mySet.delete('banana');
console.log(mySet);

mySet.clear();
console.log(mySet); 