function sum(...args){
  console.log(args);
  let initialValue = 0;
  //for (const num of args) {
  //  total += num;
  //}
  //return total;
  const total = args.reduce((acumulador, currentValue) => acumulador + currentValue, initialValue);
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));