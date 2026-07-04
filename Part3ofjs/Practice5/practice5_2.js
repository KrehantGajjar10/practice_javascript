/*

function getUser() {
  fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
      document.querySelector(".users").innerHTML = "";
      data.results.forEach(function (user) {
        console.log(user);

        // 1. Create the main card container
        const card = document.createElement("div");
        card.className =
          "w-full max-w-sm bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 text-center";

        // 2. Create the Profile Avatar Section
        const avatarDiv = document.createElement("div");
        avatarDiv.className = "flex justify-center mb-5";

        const img = document.createElement("img");
        img.className =
          "w-32 h-32 object-cover rounded-full border-4 border-gray-800";
        img.src = user.picture.large;
        img.alt = "User Profile Picture";

        // Append image to avatar div
        avatarDiv.appendChild(img);

        // 3. Create the User Info Section
        const infoDiv = document.createElement("div");

        // Name
        const nameEl = document.createElement("h2");
        nameEl.className = "text-2xl font-bold text-white";
        nameEl.textContent = user.name.first + " " + user.name.last;

        // Email
        const emailEl = document.createElement("p");
        emailEl.className = "text-sm font-medium text-blue-400 mt-1";
        emailEl.textContent = user.email;

        // call
        const callEl = document.createElement("p");
        callEl.className = "text-gray-400 mt-5 text-sm leading-relaxed";
        callEl.textContent = `Phone No.: ${user.phone}`;

        // Append text elements to info div
        infoDiv.appendChild(nameEl);
        infoDiv.appendChild(emailEl);
        infoDiv.appendChild(callEl);

        // 4. Assemble the card structure
        card.appendChild(avatarDiv);
        card.appendChild(infoDiv);

        // 5. Append the card to whatever container you have in your HTML
        document.querySelector(".users").appendChild(card);
      });
    });
}

getUser();

document.querySelector("#refresh-btn").addEventListener("click",function(){
    getUser();
})

*/
