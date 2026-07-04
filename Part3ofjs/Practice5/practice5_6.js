/*

// POST Request
async function createUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Krunal", email: "krunal@example.com" }),
  });
  console.log(response.status);
  const data = await response.json();
  console.log(data);
}
createUser();


// 201 → Resource Created

*/