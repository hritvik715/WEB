const peoples = [
    {
        name: "HuXn WebDev",
        age: 18,
    },
    {
        name: "Alex Mead",
        age: 29,
    },
    {
        name: "Brain Griffin",
        age: 40,
    },
];

const oldestAge = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);//imp->initial p_value =0


console.log(oldestAge);