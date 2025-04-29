// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore() =>(what , where)

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------


//imp->creating element
const h1 = document.createElement("h1")
const body = document.body
h1.textContent = "hello world"
h1.classList.add("greetings")

console.log(h1.textContent)

body.appendChild(h1)//imp->ye h1 ko appned kar degi sabse niche (append to bottom of the list)



//imp->insertBefor()


const ul = document.querySelector('ul')

const newLi = document.createElement('li')

newLi.innerText = 'im Li tag'
ul.appendChild(newLi)


const firstLi = document.querySelector('li')//imp->it will seclect first Li of UL


//selecetor.insertBefore(what to insert,where to insert)
ul.insertBefore(newLi, firstLi)




/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// const firstP = document.querySelector("p");
// const i = document.createElement("i")
// i.innerText = "iam italics"
// i.style.color = "skyblue"
// // firstP.insertAdjacentElement(where, what)
// firstP.insertAdjacentElement("beforebegin", i)//imp->firstP kay before ye place ho jaayega
// firstP.insertAdjacentElement("afterbegin", i)
// firstP.insertAdjacentElement("beforeend", i)
// firstP.insertAdjacentElement("afterend", i)







//imp->append
let section = document.querySelector('section')
const firstP = document.querySelector("p");
const i = document.createElement("i")
i.innerText = "iam italics"
i.style.color = "skyblue"

const span = document.createElement("span")
span.innerText = "huxn"
span.style.color = "crimson"
// section.append(i);
section.append(i, span);//imp-> ek saath 2 bhi append kar sakte hai
// section.prepend(i, span)//imp-> ye pehle place kar dega




// removeChild()
// remove()

const newList = document.querySelector('.new-list')
const fourth = document.querySelector('.fourth')
newList.removeChild(fourth)//imp->isme quote nhi daalte hai
newList.remove()//imp-> isse saare children remove ho jaaenge