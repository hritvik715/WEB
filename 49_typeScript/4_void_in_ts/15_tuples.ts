let myTuple: [number, string]
myTuple = [10, 'hello world']
// myTuple = ['hello world', 10]//imp-> error dega kuki pehle number dena hai phir string 

console.log(myTuple)












const products1: (number | string)[] = ["item 1", 12];

console.log(products1)













const games: [string, string, string] = ['Game1', 'Game2', 'Game3'];
// const games: [string, number, string] = ['Game1', 'Game2', 'Game3'];//imp-> error dega  kuki beech mey number declare kiya hai and hamne string de diya beech mey 
console.log(games);