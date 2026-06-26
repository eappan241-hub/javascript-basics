//simple calculator
let num1 = 6;
let num2 = 0;

let operator = "/";

if (operator === "+") {
    console.log(num1 + num2);
}
else if (operator === "-") {
    console.log(num1 - num2);
}
else if (operator === "*") {
    console.log(num1 * num2);
}
else if (operator === "/") {
    if (num2 !== 0) {
        console.log(num1 / num2);
    } else {
        console.log("Cannot divide by zero");
    }
}
else {
    console.log("Invalid Operator");
}

// Create a variable `marks` to store student marks (0–100).


// Add bonus marks using an assignment operator (+=).


// Determine the grade using if-else:
// 90–100 → Grade A
// 70–89 → Grade B
// 50–69 → Grade C
// Below 50 → Grade F


// Determine Pass/Fail using a ternary operator:
// (marks >= 50 ? "Pass" : "Fail")


// Give remarks based on grade using a switch statement:
// A → "Excellent!"
// B → "Good"
// C → "Average"
// F → "Needs Improvement"


// Print the results in the console:
// Marks, Grade, Result, Remark
let mark = 90;
let bonus = 5;

mark += bonus;

if (mark > 100) {
    mark = 100;
}

let grade;

if (mark >= 90) {
    grade = "A";
} else if (mark >= 70) {
    grade = "B";
} else if (mark >= 50) {
    grade = "C";
} else {
    grade = "F";
}

let result = (mark >= 50) ? "Pass" : "Fail";

let remark;

switch (grade) {
    case "A":
        remark = "Excellent!";
        break;
    case "B":
        remark = "Good";
        break;
    case "C":
        remark = "Average";
        break;
    case "F":
        remark = "Needs Improvement";
        break;
    default:
        remark = "Invalid Grade";
}

console.log("Marks:", mark);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Remark:", remark);
