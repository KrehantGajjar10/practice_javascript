let nam = document.querySelector("#name");
let form2 = document.querySelector("form");

form2.addEventListener("submit", function (dets) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans = regex.test("harsh@test.com");
    console.log(ans);
});
