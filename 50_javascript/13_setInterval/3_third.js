//stop interval after 10 seconds
const intervalId = setInterval(function () {
    console.log(`this fxn is being executed at the interval`);
}, 1 * 1000);
// console.log(intervalId);


// stop the interval after 10 seconds
setTimeout(function () {
    clearInterval(intervalId);
    console.log(`interval stopped`);
}, 10 * 1000);//imp->10th interval mey ye stop ho jaayega