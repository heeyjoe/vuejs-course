//Função tradicional
function sum(n1, n2){
  return n1 + n2;
}
console.log(sum(1, 2));

// Função arrow
const sumNumbers = (n1, n2) => {
  return n1 + n2;
}
console.log(sumNumbers(1, 2));


// HOISTING => VAR e FUNCTION podem ser chamadas antes de serem declaradas
// Arrow functions não sofrem hoisting