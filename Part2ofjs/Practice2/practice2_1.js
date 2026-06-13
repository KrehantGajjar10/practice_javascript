// Events and event handling
// Event binding: addEventListener, removeEventListener

let p = document.querySelector("p");
p.addEventListener("click",function(){
    p.style.color = "green";
});