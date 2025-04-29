function uniqueDataTypesFunc2<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue];
}


interface Doggy {
    name: string;
    breed: string;
}


const dog5 = uniqueDataTypesFunc2<Doggy>(
    { name: "Buddy", breed: "Labrador" },
    { name: "Defualt", breed: "Unknown" }
);

console.log(dog5);