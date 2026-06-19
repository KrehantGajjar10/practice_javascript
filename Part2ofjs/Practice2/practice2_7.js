/*

// Event bubbling and capturing

// Event bubbling
// Means jo koi par event listener na hoy ena parent par jay jo ena par na hoy to ena parent par jay
let ul = document.querySelector("ul")
ul.addEventListener("click",function(dets){
    // dets.target.style.textDecoration = "line-through";
    dets.target.classList.toggle("lt");
})

// Event capturing
// Means parent to child (top -> bottom) jay opposite of event bubbling
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("button clicked");
});

c.addEventListener("click", function () {           // True
  console.log("c clicked");
},true);

b.addEventListener("click", function () {
  console.log("b clicked");
});

a.addEventListener("click", function () {           // True
  console.log("a clicked");
},true);

// Theory
// There are 2 phase
// phase 1 : top level to bottom level
// phase 2 : bottom level to top level
// In event handling always pahela first phase check thay (if capturing is on then it run first,by default capturing off) and then bubbling phase (it is always on by default)
// in here, first it check capturing is ON/True like this order : a->b->c->button
// Then second phase start (bubbling) like this order : button->c->b->a

*/