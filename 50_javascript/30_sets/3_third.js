const mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');
mySet.add('banana');


for (let item of mySet) {
    console.log(item);
}