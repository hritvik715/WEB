function printNumber(item: any, defaultValue: any): [any, any] {//imp-> return two number krega in a array
    return [item, defaultValue];
}


const num23 = printNumber(1, "something")
console.log(num23);





//imp-> generic function
//imp-> generic function
//imp-> generic function

function uniqueDataTypesFunc1<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue]
}

//imp-> in short(instead of writing Type we can also use only T)
// function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
//     return [item, defaultValue]
// }


const num12 = uniqueDataTypesFunc1<number>(10, 20)


const str125 = uniqueDataTypesFunc1<string>('hello', 'world');

const bool56 = uniqueDataTypesFunc1<boolean>(true, false)

console.log(num12)
console.log(str125)
console.log(bool56)

