// document.getElementById("btn").addEventListener("click", () => {
//   // Getting Elements From The DOM
//   let num1 = document.querySelector(".num1").value;
//   let num2 = document.querySelector(".num2").value;
//   let result = document.querySelector(".result");
//   let oprator = document.getElementById("selectOp").value;

//   switch (oprator) {
//     case "plus":
//       result.innerHTML = +num1 + +num2;
//       break;
//     case "min":
//       result.innerHTML = +num1 - +num2;
//       break;
//     case "dev":
//       result.innerHTML = +num1 / +num2;
//       break;
//     case "multi":
//       result.innerHTML = +num1 * +num2;
//   }
// });


//imp-> mine code
document.getElementById('btn').addEventListener('click', () => {
  //get elemnts from the Dom

  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector('.result');
  let operator = document.getElementById('selectOp').value;


  // switch (operator) {
  //   case "plus":
  //     result.innerHTML = Number(num1) + Number(num2)
  //     break;

  //   case "min":
  //     result.innerHTML = Number(num1) - Number(num2)
  //     break;
  //   case "div":
  //     result.innerHTML = Number(num1) / Number(num2)
  //     break;

  //   case "multi":
  //     result.innerHTML = Number(num1) * Number(num2)
  //     break;


  //OR
  switch (operator) {
    case "plus":
      result.innerHTML = +(num1) + +(num2)//jonas ney btaaya tha ki (+) agar string mey karoge toh vo number mey convert kaar dega 
      break;

    case "min":
      result.innerHTML = +(num1) - +(num2)
      break;
    case "div":
      result.innerHTML = +(num1) / +(num2)
      break;

    case "multi":
      result.innerHTML = +(num1) * +(num2)
      break;

  }

})