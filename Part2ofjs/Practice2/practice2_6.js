/*

// Event object: target, type, preventDefault

let main4 = document.querySelector("#main4");
main4.addEventListener("click",function (dets) {    // Here dets are called event object
    console.log(dets);
    console.log(dets.target);                       // target -> div#main4 
    console.log(dets.type);                         // type -> click 
});

let form = document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();                          // preventDefault() -> prevent from reload the page after submitting
});

*/