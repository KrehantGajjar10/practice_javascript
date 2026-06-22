let valform = document.querySelector("form");
let inpemail = document.querySelector("#email");
let inppassword = document.querySelector("#password");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let resultMessage = document.querySelector("#resultMessage");

valform.addEventListener("submit",function(dets){
    dets.preventDefault();
    emailError.textContent = "";
    passwordError.textContent = "";
    resultMessage.textContent = "";
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,64}$/;

    let ansemail = emailRegex.test(inpemail.value.trim());
    let anspassword = passwordRegex.test(inppassword.value);
    let resultflag = true;

    if (!ansemail) {
        emailError.textContent = "Invalid Email";
        resultflag = false;
    }
    if (!anspassword) {
        passwordError.textContent = "Invalid Password";
        resultflag = false;
    }
    if (resultflag) {
        resultMessage.textContent = "Valid";
    }
});