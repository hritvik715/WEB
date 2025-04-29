// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let todos = document.querySelector(".todos");

// function getTodo(value) {
//   // Creating New Elements
//   let todo = document.createElement("div");
//   let textEl = document.createElement("span");

//   // Setting values & Styles
//   textEl.innerHTML = value;

//   // Appending Our Element To The DOM
//   todo.appendChild(textEl);

//   let closeEl = document.createElement("span");
//   closeEl.innerHTML = "&times;";
//   closeEl.classList.add("delete");

//   // Attaching Events
//   closeEl.addEventListener("click", function (e) {
//     todos.removeChild(todo);
//   });

//   todo.appendChild(closeEl);
//   todo.classList.add("todo");
//   return todo;
// }

// form.addEventListener("submit", (e) => {
//   // preventing the default behavior
//   e.preventDefault();
//   let value = input.value;
//   if (!value.trim()) return;
//   todos.appendChild(getTodo(value));
//   input.value = "";
// });


//imp-> mine code

//getting elemnts from the DOm

let form = document.querySelector('form')
let input = document.querySelector('input')
let todos = document.querySelector('.todos')

function getTodo(value) {
  //creating new elements
  let todo = document.createElement('div')
  let textEl = document.createElement('span')


  //setting values and styles

  textEl.innerHTML = value


  //append our elemnt to the DOM
  todo.appendChild(textEl)


  let closeEl = document.createElement('span')
  closeEl.innerHTML = "&times";//imp->predefined HTML character entity for the "×" symbol.
  closeEl.classList.add("delete")



  //Attach events
  closeEl.addEventListener('click', function (e) {
    todos.removeChild(todo)
  })


  todo.appendChild(closeEl)
  todo.classList.add('todo')
  return todo;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = input.value;
  // if (!value.trim()) return;
  //OR
  if (value.trim() === false) return;

  todos.appendChild(getTodo(value));
  input.value = "";
});
