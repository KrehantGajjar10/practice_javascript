/*

// Copying objects: spread, Object.assign, deep clone

let obj = {
    name: "Krehant",
    age: 20,
    email: "krehant@gmail.com",
    address: {
        city: "Ahmedabad",
    },
};

let obj2 = {...obj};            // spread
console.log(obj2);

let obj3 = Object.assign({ price: 100000}, obj);    // Object.assign
console.log(obj3);

let obj4 = JSON.parse(JSON.stringify(obj));         // deep clone -> first object to string and then string to object 
obj4.address.city = "Mumbai";                       // after we change the value of second one it don't affect original one
console.log(obj);
console.log(obj4);

*/