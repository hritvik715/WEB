function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}


const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNum = filterArray<number>(numArray, (num) => num % 2 === 0)
console.log(evenNum);



const stringArr = ['apple', 'banana', 'cherry', 'date']
const shortWords = filterArray<string>(stringArr, (word) => word.length < 6)
console.log(shortWords)



//creating interface
//creating interface
//creating interface
interface Fruit {
    name: string;
    color: string;
}

const fruitArray: Fruit[] = [
    { name: 'Apple', color: "Red" },
    { name: 'banana', color: "yellow" },
    { name: 'Cherry', color: "Red" },

]

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === 'Red')
console.log(redFruits);