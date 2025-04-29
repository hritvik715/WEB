//regular fxn

function double1(x: number): number {//imp-> annotate the return statement (number return krega islie last mey bhi :number use kiya)
    return x * x;
}

const res3 = double1(2);
console.log(res3);



//Arrow func
const double2 = (x: number): number => x * x;
console.log(double2(2))

