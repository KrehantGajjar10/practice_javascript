// Event bubbling and capturing

// Event bubbling
// Means jo koi par event listener na hoy ena parent par jay jo ena par na hoy to ena parent par jay
let ul = document.querySelector("ul")
ul.addEventListener("click",function(dets){
    // dets.target.style.textDecoration = "line-through";
    dets.target.classList.toggle("lt");
})
