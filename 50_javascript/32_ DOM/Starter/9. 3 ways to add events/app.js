// ----------- BAD WAY-----------
// const secondBtn = document.querySelector(".second-btn")
// secondBtn.onclick = alert("lund lelo pankaj")
// secondBtn.onclick = function () {
//     console.log("pankaj lauda hai")
// }
// secondBtn.onmousemove = function () {//imp-> mouse ko move karne se ye implement ho jaayega
//     console.log("pankaj lauda hai")
// }




// ----------- GREAT WAY-----------
const best = document.querySelector('.best')

// best.addEventListener("click", function () {
//     console.log(`hello world`)
// })//imp-> we have many other events like click , dbclick and other


//OR
// function greetings() {
//     console.log(`hello world`);
// }
// best.addEventListener("click", greetings)

//OR
best.addEventListener("click", () => console.log('yellow'))

// ----------- Event (e) Object -----------
const form = document.querySelector('form')
const input = document.querySelector('input')


// form.addEventListener('click', (event) => {
//     event.preventDefault();//isse default behviour jo ki submit karne pe refresh ho jaata tha vo nhi hoga abb
//     // console.log(event)
//     console.log(input.value)
// })

//imp-> instead of writing event we can write only (e)
form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value)
})







//imp->whenever we submit our form it automatically refresh the broeser (it is default behaviour) so if u want to remove the default behviour of the form we use //imp->{ event.preventDefault() }






