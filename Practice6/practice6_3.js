// Array : foreach, map, filter, reduce, find, some, every

let arr = [10,20,30,40,50,60,70];



arr.forEach(function(val){      // foreach() -> darek value par jase ek pachi ek 
    console.log(val+5);         // function & val is compulsory 
});


let newarr1 = arr.map(function(val){       // map() -> map tyre use karvano ke jyare ek new array banavano hoy old array na data na basis parthi
    if (val>10) return val;                 // function, return & val is compulsory (sometime val is not)
});                                          // map() dekhta j new blank array imagine karvano
console.log(newarr1);


let newarr2 = arr.filter(function(val){     // filter() -> filter tyre use karvano ke jyare ek new array banavano hoy and emathi amuk condition lagaine amuk value levani hoy with the basis of true/false
    if(val>30) return true;                 // function, return & val is compulsory
});                                         // filter() dekhta j new blank array imagine karvano
console.log(newarr2); 


let sum = arr.reduce(function(accumulator, val) {       // reduce() -> reduce tyre use karvano ke jyare ek single value banavani hoy old array na data na basis parthi
    return accumulator + val;                           // function, return, accumulator & val is compulsory 
},0);                                                   // we give 0 initain value of accumulator, if we not give then it will take first value of array as initain value of accumulator
console.log(sum);                                       // reduce() only give 1 value as output


let abc = arr.find(function(val){       // find() -> jyare array ma value ni paheli condition satisfy thase tyare te value return karse
    if(val>30) return val;              // find() only return 1 value as output
});
console.log(abc);                       //40 (bcz it is first value that satisfy the condition)


let def = arr.some(function (val) {     // some() -> return only true/false
    return val > 30;                    // if any condition is satisfy then return true otherwise false
});
console.log(def);


let xyz = arr.every(function(val){      // xyz() -> return only true/false
    return val > 30;                    // if every condition is satisfy then return true otherwise false
});
console.log(xyz);


