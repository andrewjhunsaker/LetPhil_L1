/*
📊 Compare Numbers — 

GOAL:
Practice:
- Math.max()
- Math.min()
- Math.abs()

RULES:
- Use console.log() for every result
*/

/* STEP 1 — Create numbers */
// Create 3 numbers (one should be negative)
// console.log them
// ✅ WRITE YOUR CODE UNDER THIS LINE
const firstNumber = 14;
const secondNumber = -8;
const thirdNumber = 27;
console.log(firstNumber, secondNumber, thirdNumber);

/* STEP 2 — Math.max() */
// Find the largest number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
const largestNumber = Math.max(firstNumber, secondNumber, thirdNumber);
console.log("Largest:", largestNumber);

/* STEP 3 — Math.min() */
// Find the smallest number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
const smallestNumber = Math.min(firstNumber, secondNumber, thirdNumber);
console.log("Smallest:", smallestNumber);

/* STEP 4 — Math.abs() */
// Use Math.abs() on the negative number
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
const absoluteNumber = Math.abs(secondNumber);
console.log("Absolute value:", absoluteNumber);
