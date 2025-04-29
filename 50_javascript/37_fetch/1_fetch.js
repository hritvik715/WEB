console.log(fetch(`text.txt`))//imp-> it will give new promise

//you can handle this data using 3 ways
// ->using callback
// ->using new Promise
// ->using async/await


//imp->text method return promise
//if resolved will return text representation of body
// fetch("text.txt").then(res => res.text());


//imp-> Fetch API promise only rejects when we have network error (not in other cases).


// console.log(fetch('text.txt'))


fetch("1_text.txt")
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));//for errors hamne catch bhi daal diya


//imp-> ye sabhi fetch vaali chije console mey chalegi