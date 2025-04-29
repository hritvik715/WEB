// The reduce() method applies the reducer function to each element of an array,
// accumulating the results into a single value. It is often used to perform
// calculations or aggregations on array elements and simplify the array into a
// single value.



// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.






const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((p, c) => {
    console.log(`previous : ${p}`);
    console.log(`current : ${c}`);
    console.log(`----------------`);
    return p + c;
    //imp->DRY RUN:-
    // 0+1=>1 (initial value zero se start kiya hai islie zero add kiya)
    //1+2 =>3
    //3+3 =>6
    //6+4 =>10
    //10+5 => 15

}, 0);//imp-> (p) is the previous value of array and (c) is the current value of array


console.log(sum);