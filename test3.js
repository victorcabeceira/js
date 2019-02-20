const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array2 = [
  { name: 'Victor', age: 25 },
  { name: 'Noé', age: 51 },
  { name: 'Luzia', age: 50 },
];

const array3 = [21, 12, 1, 3, 7, 55, 42, 99, 192, -30];

const summedArray1 = array1.reduce((accumulator, actual) => accumulator + actual, 0)
console.log('summedArray1', summedArray1);

const summedArray2 = array2.reduce((accumulator, actual) => accumulator + actual.age, 0)
console.log('summedArray2', summedArray2);

const sortedArray = array3.sort((a,b) => a > b);
console.log('sortedArray', sortedArray);

const index1 = array3.findIndex(element => element === 42);
console.log('index1', index1, ' | Value: ', array3[index1]);

const biggestNumber = Math.max(...array3);
const index2 = array3.findIndex(element => element === biggestNumber);
console.log('index2', index2, ' | Value: ', array3[index2]);

const givenIndex = 3;
const clonedArray = [...array3];
clonedArray.splice(givenIndex, 1);
console.log('Original: ', array3, '. Removed: ', clonedArray);