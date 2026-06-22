/*

// Downloading animation
let count = 0;
let seconds = 3;
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");

let intv = setInterval(function(){
    if (count <= 99) {
        count++;
        progress.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    } else{
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(intv);
    }
},(seconds*1000)/100);

*/