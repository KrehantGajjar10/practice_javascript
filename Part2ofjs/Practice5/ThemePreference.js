function setLightOrDark() {
    document.body.classList.remove("light", "dark");

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.add("light");
    }
}

if (localStorage.getItem("theme")) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(localStorage.getItem("theme"));
} else {
    setLightOrDark();
}

window.matchMedia ("(prefers-color-scheme: dark)").addEventListener("change",function(){
    if (!localStorage.getItem("theme")) {
        setLightOrDark();
    }
})

let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    if (document.body.classList.contains("dark")) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme","light");
    } else {
       document.body.classList.add("dark");
       document.body.classList.remove("light");
       localStorage.setItem("theme","dark");
    }
})
