// Form and Form Validation
// Reading values from input, textarea, select
// Prevent default submission
// Showing error messages conditionally (here for example name)

let form = document.querySelector("form");
let nm = document.querySelector("#name");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let nmlenth = nm.value.length;
    if (nmlenth <= 2) {
        document.querySelector(".hide").style.display = "initial";
    } else {
        document.querySelector(".hide").style.display = "none";
    }
})