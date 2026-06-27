/*


// Arrow functions & lexical this

// Arrow function hamesha this ni value parent thi le & lexical means physcial position of that function

// method with es5 function -> object

let obj1 = {
  name: "krehant",
  sayName: function(){
    console.log(this);
  }
}
obj1.sayName();

// method with es6 arrow function -> window

let obj2 = {
  name: "krehant",
  sayName: () => {
    console.log(this);
  }
}
obj2.sayName();

// es5 function inside es5 method -> window

let obj3 = {
  name: "krehant",
  sayName: function(){
    function temp1(){
      console.log(this);
    }
    temp1();
  }
}
obj3.sayName();

// es6 arrow function inside es5 method -> object

let obj4 = {
  name: "krehant",
  sayName: function(){
    let temp2 = () => {
      console.log(this);
    }
    temp2();
  }
}
obj4.sayName();


*/