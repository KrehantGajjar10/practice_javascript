let count = 0;
let number = prompt("Enter a number:");
while(number > 0){
    number = Math.floor(number / 10);
    count++;
}
console.log(count);