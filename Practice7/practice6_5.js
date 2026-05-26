// Copying objects: spread, Object.assign, deep clone

let obj = {
    name: "Krehant",
    age: 20,
    email: "krehant@gmail.com",
};

let obj2 = {...obj};
console.log(obj2);

let obj3 = Object.assign({ price: 100000}, obj);
console.log(obj3);
