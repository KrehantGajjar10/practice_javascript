/*


// Status Code & meaning

// 200	Success
// 201	Resource created
// 204	Success, no content
// 400	Bad request
// 401	Authentication required
// 403	Permission denied
// 404	Resource not found
// 500	Server error

async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    const users = await response.json();

    console.log(users);
}

getUsers();


*/