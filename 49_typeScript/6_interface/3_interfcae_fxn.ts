interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(2, 3))


const subtract: MathOperation = (a, b) => a - b;
console.log(subtract(5, 2))

