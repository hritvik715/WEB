
// When we provide function as an (argument) to other function/argument that function is known as callback function.



function showCallFunc(fn) {
    const value = 10;
    fn(value);
}

showCallFunc(function (value) {
    console.log(value);
});//imp-> andar vaala fxn known as callback fxn 