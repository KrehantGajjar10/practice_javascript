/*


// this keyword ee special keyword chhe , kem ke baki badha keyword ni value or nature same j rahe but this keyword ni value or nature badalatu rahe bcz ee depend kare tame kya use karo chho

// this in global scope ,function ,method ,event handling ,class

// this in global scope -> window
console.log(this);

// this in function scope -> window
function a(){
  console.log(this);
}
a();

// this in menthod scope -> object
let obj = {
  name: "krehant",
  sayName: function(){
    console.log(this);
    console.log(this.name);
  }
}
obj.sayName();

// this in event handling -> element
document.querySelector("h1").addEventListener("click",function(){
  console.log(this);
  console.log(this.style.color = "red");
})

// this in class -> blank object
class Abcd{
  constructor(){
    console.log("hey");
    this.a = 10;
  }
}
let val = new Abcd();     // val => Abcd class no instance chhe


*/