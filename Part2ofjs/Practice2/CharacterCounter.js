let sp = document.querySelector("span");
let inp = document.querySelector("input");

inp.addEventListener("input",function(){
    // sp.textContent = inp.value.length;          // Count character
    let left = 20 - inp.value.length;               // This show how many character left
    sp.textContent = left;

    if (left >= 0) {
        sp.style.color = "green";
    } else {
        sp.style.color = "red";
    }
})