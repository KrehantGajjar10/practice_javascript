// setTimeout & clearTimeout
let tm1 = setTimeout(function(){            // only run one time after 5s (5000 ms)
    console.log("Print after 5 second");
},5000);

clearTimeout(tm1);                          // clear setTimeout