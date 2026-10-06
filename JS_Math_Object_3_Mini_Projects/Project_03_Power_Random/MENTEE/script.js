/*
🎲 Power & Random — 

GOAL:
Practice:
- Math.pow()
- Math.sqrt()
- Math.random()

RULES:
- Observe how random numbers change on refresh
*/

/* STEP 1 — Exponentiation */
// Use Math.pow(2, 4)
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
const power = Math.pow(2, 4);
console.log("Power:", power);

/* STEP 2 — Square root */
// Use Math.sqrt(81)
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
const squareRoot = Math.sqrt(81);
console.log("Square root:", squareRoot);

/* STEP 3 — Random number (0–1) */
// Generate a random number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
const randomDecimal = Math.random();
console.log("Random decimal:", randomDecimal);

/* STEP 4 — Random whole number (1–10) */
// Generate a random integer between 1 and 10
// Hint: Math.floor(Math.random() * 10) + 1
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
const randomWholeNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random whole number:", randomWholeNumber);
