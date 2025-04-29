// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;



let pswrd = 9;
function pswrdChecker(ps) {
    if (ps === 8) {
        return `strong pswrd`
    }
    else {
        return 'should be 8 characters'
    }
}


const res = pswrdChecker(pswrd);
console.log(res);



//imp-> using ternary opeartor
function pswrdChecker1(ps) {
    return ps === 8 ? 'strong pswrd' : 'pswrd should be 8 characters';
}

const res1 = pswrdChecker1(pswrd);
console.log(res);