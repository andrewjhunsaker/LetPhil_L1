/*
  🧠 Project 3 — Mini Console Quiz 
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

// STEP 1 — Setup variables (answers)
/*
  Create variables for 'user answers' (pretend the user answered):
  - answer1 (string) for: What is 2 + 2?
  - answer2 (string) for: What keyword makes a variable you can change?
  - answer3 (boolean) for: JavaScript runs in the browser (true/false)
  Then console.log all answers (debug step).
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const answer1 = "4";
const answer2 = "let";
const answer3 = true;

console.log("Answer 1:", answer1);
console.log("Answer 2:", answer2);
console.log("Answer 3:", answer3);

// STEP 2 — Create the correct answers
/*
  Create correct1, correct2, correct3
  Example:
  - correct1 could be "4"
  - correct2 could be "let"
  - correct3 could be true
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const correct1 = "4";
const correct2 = "let";
const correct3 = true;

// STEP 3 — Compare using === and !==
/*
  Create booleans:
  - isQ1Correct = answer1 === correct1
  - isQ2Correct = answer2 === correct2
  - isQ3Correct = answer3 === correct3
  Now create a 'wrong' check using !==:
  - isQ2Wrong = answer2 !== correct2
  Console.log each boolean.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const isQ1Correct = answer1 === correct1;
const isQ2Correct = answer2 === correct2;
const isQ3Correct = answer3 === correct3;
const isQ2Wrong = answer2 !== correct2;

console.log("Question 1 correct:", isQ1Correct);
console.log("Question 2 correct:", isQ2Correct);
console.log("Question 3 correct:", isQ3Correct);
console.log("Question 2 wrong:", isQ2Wrong);

// STEP 4 — Use > and < comparisons (requested)
/*
  Create a number called score (start at 0).
  If isQ1Correct is true, add 1 to score. Same for Q2 and Q3.
  Then console.log score.
  Create booleans:
  - hasAtLeastOne = score > 0
  - isPerfect = score < 3  (this should be false only when score is 3)
  Note: we are practicing > and < here.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let score = 0;

if (isQ1Correct) {
  score = score + 1;
}

if (isQ2Correct) {
  score = score + 1;
}

if (isQ3Correct) {
  score = score + 1;
}

console.log("Score:", score);

const hasAtLeastOne = score > 0;
const isPerfect = score < 3;

console.log("Has at least one correct answer:", hasAtLeastOne);
console.log("Score is below perfect:", isPerfect);

// STEP 5 — Use logical operators && and ||
/*
  Create:
  - passedAll = isQ1Correct && isQ2Correct && isQ3Correct
  Also create:
  - passedAtLeastOne = isQ1Correct || isQ2Correct || isQ3Correct
  Console.log both.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const passedAll = isQ1Correct && isQ2Correct && isQ3Correct;
const passedAtLeastOne = isQ1Correct || isQ2Correct || isQ3Correct;

console.log("Passed all:", passedAll);
console.log("Passed at least one:", passedAtLeastOne);

// STEP 6 — Final debugging message with if/else
/*
  Use if/else to print one final message:
  - 'Perfect score!' if passedAll is true
  - 'Some correct answers' if passedAtLeastOne is true
  - 'Try again' otherwise
  This step forces you to use parentheses + curly braces correctly.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
if (passedAll) {
  console.log("Perfect score!");
} else if (passedAtLeastOne) {
  console.log("Some correct answers");
} else {
  console.log("Try again");
}
