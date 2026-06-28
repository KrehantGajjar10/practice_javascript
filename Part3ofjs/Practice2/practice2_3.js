/*


// Manual Binding: bind, call, apply
// function ne call karti vakhte aapde set kari sakiye ke this ni value su hase

let obj = {
  name: "Krehant",
  age: "20",
};

function temp3(a, b, c){
  console.log(this, a, b, c);
}

temp3.call(obj, 1, 2, 3);

temp3.apply(obj, [1, 2, 3]);

let fnc = temp3.bind(obj, 1, 2, 3);
fnc();


*/