// READ (GET)
// We want all students.
// async function getStudents() {

//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     const students = await response.json();

//     console.log(students);

// }

// getStudents();



// CREATE (POST)
// Add a new student.
// async function createStudent() {

//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//         {
//             method: "POST",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify({
//                 name: "Amit",
//                 age: 22
//             })
//         }
//     );

//     const student = await response.json();

//     console.log(student);

// }

// createStudent();



// UPDATE (PUT)
// Replace the entire student.
// async function replaceStudent() {

//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1",
//         {
//             method: "PUT",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify({
//                 name: "Rahul Patel",
//                 age: 25
//             })
//         }
//     );

//     const student = await response.json();

//     console.log(student);

// }

// replaceStudent();


// UPDATE (PATCH)
// Only update one field.
// async function updateAge() {

//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/1",
//         {
//             method: "PATCH",

//             headers: {
//                 "Content-Type": "application/json"
//             },

//             body: JSON.stringify({
//                 age: 21
//             })
//         }
//     );

//     const student = await response.json();

//     console.log(student);

// }

// updateAge();



// DELETE
// Delete User 2.
// async function deleteStudent() {

//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/2",
//         {
//             method: "DELETE"
//         }
//     );

//     console.log(response.status);

// }

// deleteStudent();


// | Method | URL        | Action              |
// | ------ | ---------- | ------------------- |
// | GET    | `/users`   | Get all users       |
// | POST   | `/users`   | Create user         |
// | GET    | `/users/1` | Get one user        |
// | PUT    | `/users/1` | Replace user        |
// | PATCH  | `/users/1` | Update part of user |
// | DELETE | `/users/1` | Delete user         |
