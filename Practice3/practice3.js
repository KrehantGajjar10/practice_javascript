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