/*

// Closure definition and how variables are preserved

// closure ee basically function chhe ke je parent function ni ander hoy and ander wadu function return thay & returning function parent function na variable ne use kare

function f() {
  let wz = 7;
  return function () {
    console.log(wz);
  };
}
let fnc = f();
fnc();


// Ee sachu chhe ke fnc khatam thay tyare tamaro fnc ane ena variables khatam thai jay chhe, pan jyare pan closure bane tyare tamara fnc ane ena variables no ek backlink banavama ave chhe ane enu naam hoy chhe [[environment]].

*/