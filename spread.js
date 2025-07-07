const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

// Spread operator
const array4 = [...array1, ...array2];
console.log(array4);

const person = {
  name: 'João',
  age: 26,
  city: 'Tianguá'
};

const personAdress = {
  street: 'Rua Santo Antônio',
  number: 380
};

const personComplete = {
  ...person,
  ...personAdress,
}

console.log(personComplete);