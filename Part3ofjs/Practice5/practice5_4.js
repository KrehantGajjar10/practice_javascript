/*


// JSON.parse() --> It converts a JSON string into a JavaScript object or array.
// JSON.stringify() --> It converts a JavaScript object or array into a JSON string.
// response.json() --> It reads the response body, parses the JSON, and returns a JavaScript object or array.


// string to javascript object --> JSON.parse() 
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  console.log(users);
  console.log(users[0].name);
}

getUsers();


// javascript object to string --> JSON.stringify()
const obj = {
  name: "Rahul",
  age: 21,
};

const json = JSON.stringify(obj);

console.log(typeof json);
console.log(json);


*/