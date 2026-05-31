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


// -------------------------------------------------------
console.log("--------------------------");


let c = "4";
let d = 4;
console.log("c > d:", c > d);
console.log("c < d:", c < d);
console.log("c >= d:", c >= d);
console.log("c <= d:", c <= d);
console.log("c === d:", c === d);
console.log("c !== d:", c !== d);
console.log("c == d:", c == d);
console.log("c != d:", c != d);

let e = true;
let f = false;

console.log("AND:" , e && f);
console.log("OR:", e || f);
console.log("NOT e:", !e);
console.log("NOT f:", !f);

let age = 8;
let result3 = age >= 18 ? "Adult" : "Minor";
console.log(result3);

console.log("Type of a:", typeof d);

let name = "Fenil";
console.log("Hello " + name);

let value = 10 + 5 * 2;
console.log("Precedence:", value);