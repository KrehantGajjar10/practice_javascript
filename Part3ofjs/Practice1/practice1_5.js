/*


// Use cases: private counters, encapsulation

// private counters
function g() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let fnc1 = g();
fnc1();
fnc1();
fnc1();

let fnc2 = g();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();


// encapsulation
function clickLimiter() {
  let click = 0;                    // This is private variable => encapsulation
  return function () {
    if (click < 5) {
      click++;
      console.log(`clicked: ${click} times`);
    } else {
      console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
    }
  };
}

click = 0;
let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();


*/