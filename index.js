const FP = require('./fp');

console.log('Functional programming examples!');

const numbers = [1, 2, 3, 4, 5];
console.log('Numbers:', numbers);

// FP.each() (not really "functional", just an abstraction)
let product = 1;
FP.each(numbers, (number) => {
  product *= number;
});
console.log('Product:', product);

// FP.map()
const doubledNumbers = FP.map(numbers, number => number * 2);
console.log('Doubled Numbers:', doubledNumbers);

// FP.reduce()
const sum = FP.reduce(numbers, (prev, curr) => prev + curr);
console.log('Sum:', sum);

// FP.filter()
const odds = FP.filter(numbers, number => number % 2 === 1);
console.log('Odd Numbers:', odds);
