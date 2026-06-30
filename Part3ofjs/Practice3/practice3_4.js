/*


// classical inheritance Prototypal vs inheritance

// inheritance - class -> class

// Classical Inheritance (Class-based): Objects inherit from classes. It creates a hierarchical structure where subclasses extend base classes.
// extends

// Prototypal Inheritance (Object-based):Objects inherit from other objects. If you look for a property on an object and it isn't found, the engine looks at its prototype, then the prototype's prototype, and so on (the prototype chain).
// object -> object

// Prototypal Inheritance
let coffee = {
  color: "dark",
  drink: function () {
    console.log("gut gut gut");
  },
};
let arabiataCoffee = Object.create(coffee);
console.log(arabiataCoffee);
arabiataCoffee.drink();

let a = {};                 // Hardcopy
let b = { ...a };

let c = {};                 // Shared
let d = Object.create(c);


*/