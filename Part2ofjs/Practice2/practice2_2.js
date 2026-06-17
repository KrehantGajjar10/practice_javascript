/*

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

// change
let sel = document.querySelector("select");
let seldevice = document.querySelector("#seldevice");
sel.addEventListener("change",function(dets){
    seldevice.textContent = `${dets.target.value} Device Selected`; 
});

// submit
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    console.log(inputs[0].value);
    console.log(inputs[1].value); 
    console.log(inputs[2].value); 
    console.log(inputs[3].value); 
});

*/