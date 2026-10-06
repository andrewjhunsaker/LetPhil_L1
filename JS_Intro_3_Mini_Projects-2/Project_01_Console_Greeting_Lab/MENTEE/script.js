/*
  🧠 Project 1 — Console Greeting Lab 

  IMPORTANT RULES:
  - After each step: SAVE → REFRESH → check the CONSOLE.
*/

// ------------------------------
// SYNTAX SPOTLIGHT (read this!)
// ------------------------------
// ;  semicolon → ends a statement (often optional, but we will use it for clarity).
// () parentheses → used to CALL a function, like console.log(...), and in if (condition).
// {} curly braces → create a BLOCK of code, like if (...) { ... } else { ... }
// "" or '' quotes → make a STRING.
// numbers → like 10, 3.14, 520

// STEP 1 — Your first JavaScript line
/*
  Write a console log that says: Hello JavaScript!
  Make sure you include:
  - parentheses: console.log( ... )
  - quotes for the string
  - a semicolon at the end ;
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log("Hello JavaScript!");

// STEP 2 — Variables (let vs const)
/*
  Create a variable called name using const (because it won't change).
  Example: const name = "John";
  Create a variable called mood using let (because it CAN change).
  Example: let mood = "excited";
  Console.log both variables so you can SEE their values.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const name = "Andy";
let mood = "excited";

console.log("Name:", name);
console.log("Mood:", mood);

// STEP 3 — Data types (string, number, boolean)
/*
  Create:
  - a string: favoriteFood
  - a number: age
  - a boolean: isLearningJS
  Then console.log each one.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const favoriteFood = "pizza";
const age = 25;
const isLearningJS = true;

console.log("Favorite food:", favoriteFood);
console.log("Age:", age);
console.log("Learning JavaScript:", isLearningJS);

// STEP 4 — Operators (+ and -) mini demo
/*
  Create a number called points = 10
  Then create:
  - pointsAfterWin = points + 5
  - pointsAfterLoss = points - 3
  Console.log all 3 numbers to confirm + and - work.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const points = 10;
const pointsAfterWin = points + 5;
const pointsAfterLoss = points - 3;

console.log("Starting points:", points);
console.log("Points after a win:", pointsAfterWin);
console.log("Points after a loss:", pointsAfterLoss);

// STEP 5 — Curly braces practice (if/else block)
/*
  Write an if/else that checks if isLearningJS is true.
  If true: console.log("Keep going!")
  Else: console.log("Start today!")
  Notice how if/else uses parentheses (condition) and curly braces { }.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
if (isLearningJS === true) {
  console.log("Keep going!");
} else {
  console.log("Start today!");
}
