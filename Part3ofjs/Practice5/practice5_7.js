/*

// Error Handling
async function getUsers() {
  try {
    console.log("Loading users...");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");     // "https://jsonplaceholder.typicode.com/abc" -> HTTP Error (404)       // "https://jsonplaceholder123456.typicode.com/users" -> Network Error

    console.log("Status Code:", response.status);

    // Handle HTTP Errors (404, 500, etc.)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert JSON to JavaScript Object
    const users = await response.json();

    console.log("Users Loaded Successfully!\n");

    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}`);
    });
  } catch (error) {
    console.log("Something Went Wrong!");

    console.log(error.message);
  }
}

getUsers();



*/