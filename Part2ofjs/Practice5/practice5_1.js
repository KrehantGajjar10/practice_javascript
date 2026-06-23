/*

// localStorage -> aa data browser ni ander store thay je browser bandh thaya pachhi pan store j rahe (jyare aapde hatao hoy tyare j remove thay) (tab close/reload -> dont work for deleting the data)
// sessionstorage -> aa data temporary store thay jo tab bandh to data jato rahe (reload dont work for deleting the data)
// cookies -> aa pan data store kare and aa data browser ma cookie name ni property ma save thay and aa less data or light data mate use thay


//localStorage
// How to store data - setItem
// How to fetch data - getItem
// How to remove data - removeItem
// How to update data - setItem
// How to clear everything - clear
localStorage.setItem("name","Krehant");
let a = localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.setItem("name","GOAT");
localStorage.setItem("age","20");
localStorage.clear();


//sessionStorage
// How to store data - setItem
// How to fetch data - getItem
// How to remove data - removeItem
// How to update data - setItem
// How to clear everything - clear
sessionStorage.setItem("name","Dhvanit");
let b = sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.setItem("name","GOD");
sessionStorage.setItem("age","20");
sessionStorage.clear(); 


// cookies
// browser ma small data store karva mate use thay
// cookies ~4kb
// localstorage sessionStorage ~5Mb
// cookies ma je pan data store karo ee data page reload thata automatically server par jaay
document.cookie = "email=krehant@test.com"

*/