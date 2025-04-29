//////////////////////////////////////////
// The every() and some() are two built-in array methods in JavaScript that allow you to check the elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of the array.

// The every() method tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if any element fails the condition.

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element, and false if no element passes the condition.

//////////////////////////////////////////





const peoples = ['huxn', 'jordan', 'alex'];

// const peoples = ['huxn', 'john', 'alex'];

const res1 = peoples.every((people) => people.
    length === 4);//imp-> it is searching for every items to satisfy this condition

const res2 = peoples.some((people) => people.length < 3);//imp-> it is searching for at least  one item to satisfy the condition 



console.log(res1);
console.log(res2);