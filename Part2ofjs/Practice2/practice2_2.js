// Common Events: click, input, change, submit, mouseover, keyup

// click
let p = document.querySelector("p");
p.addEventListener("click",function() {
    p.style.color = "yellow";
});

// input
let input = document.querySelector("input");
input.addEventListener("input",function (dets) {
    if (dets.data !== null) {
        console.log(dets.data);
    }
});