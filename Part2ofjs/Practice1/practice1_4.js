// Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend

let h1 = document.createElement("h1");
h1.textContent = "Welcome - through createElement";

document.body.append(h1);             // append means last ma add kare
// document.body.prepend(h1);         // prepend means agad add kare
// document.body.removeChild(h1);     // removeChild remove h1 in this example