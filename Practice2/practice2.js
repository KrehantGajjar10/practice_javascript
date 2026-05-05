let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

a++;
b--;
console.log("Increment a:", a);
console.log("Decrement b:", b);

let x = 5;
let result1 = x++ + ++x;

console.log(result1);
console.log(x);

let y = 10;
let result2 = --y + y-- + --y;

console.log(result2);
console.log(y);

let z = 10;
z += 5;
z *= 2;
console.log(z);