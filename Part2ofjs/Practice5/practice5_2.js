/*

// localStorage only support string so for object and array we use JSON.stringify & JSON.parse
//JSON.stringify -> object/array convert to string format
// JSON.parse -> convert string format to original object/array format

localStorage.setItem("friends",JSON.stringify(["Dhvanit","Ramesh","Suresh"]));
let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);
localStorage.clear();

*/