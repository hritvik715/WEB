function printNumber12(item: number, defaultValue: number): [number, number] {//imp-> return two number krega in a array
    return [item, defaultValue];
}



function printString(item: string, defaultValue: string): [string, string] {//imp-> return two string krega
    return [item, defaultValue];
}




function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {
    return [item, defaultValue];
}






const num = printNumber12(12, 20);
// const num = printNumber('golu oandit', true);//imp-> it will give error
const str123 = printString('string', 'jhbc');
console.log(num);


const bool = printBoolean(true, false);

console.log(str123);

console.log(bool);


