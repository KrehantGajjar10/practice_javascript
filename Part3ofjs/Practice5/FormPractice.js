const form = document.getElementById("userForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name,
      email,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    document.getElementById("message").textContent =
      "User Created Successfully!";

    console.log(data);
  } else {
    document.getElementById("message").textContent = "Request Failed";
  }
});
