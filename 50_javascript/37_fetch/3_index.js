
const result = document.querySelector('.results')




// fetch("3_text.txt")
//     .then((res) => {
//         if (!res.ok) throw Error(res.statusText);//imp-> (!res.ok) it means (res.ok == false)
//         return res.text();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//refactoring the above code using async and await


async function renderData() {

    //imp-> handling the errors using try and catch block
    try {
        const response = await fetch('3_text.txt')
        // const response = await fetch('3_texttttt.txt')
        if (!response.ok) throw Error(response.statusText)
        const data = await response.text()
        result.textContent = data;
    } catch (error) {
        console.log(error)
    }

}


renderData();//imp-> output web page mey aa jaayega


// console.log(fetch('./3_text.txt'))
console.log(fetch('./3_texttttt.txt'))//imp-> isme statustext dekhna not found aa rha hoga console mey

