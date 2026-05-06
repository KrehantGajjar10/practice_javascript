let marks = 78;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 75 && marks < 90) {
    console.log("Grade B");
} else if (marks >= 60 && marks < 75) {
    console.log("Grade C");
} else if (marks >= 40 && marks < 60) {
    console.log("Grade D");
} else if (marks >= 0 && marks < 40) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}

// ------------------------

let day = 7;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}