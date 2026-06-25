/*


// Lexical scope vs dynamic scope

// Lexical scoping -> Tame kya physically available chho ee completely decide kare ke tame kyathi access karo chho
// Dynamic scope -> Kyathi call karo chho ena par depand kare ke kai value malse

// Proper Defination :
// Lexical Scope (used by JavaScript): Variable access is determined by the physical location where the code is written. If you are in a nested function, you can access variables from the parent scope where the function was defined.
// Dynamic Scope: Variable access is determined by the execution flow—specifically, where the function is called from, rather than where it was defined.

// Lexical scoping
function b() {
  let wx = 12;
  function c() {
    console.log(wx);
  }
  c();
}
b();

// Dynamic Scooping
let wy = 15;

function d() {
  console.log(wy);
}

function e() {
  let wy = 13;
  d();
}
e();


*/