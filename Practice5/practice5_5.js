/*

// Count using Closures

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let a = counter();
console.log(a()); // 1
console.log(a()); // 2
console.log(a()); // 3

let b = counter();
console.log(b()); // 1
console.log(b()); // 2
console.log(b()); // 3

console.log(a()); // 4
console.log(b()); // 4

*/