/*
🎛️ Filter & Map Studio — 

GOAL:
Practice the "data transformation" array methods:
- filter (keeps certain items)
- map (transforms every item)

RULES:
- Write code under each step.
- Use console.log() to compare before vs after.
*/

/* -----------------------------------------
   STEP 1 — Create a numbers array
   -----------------------------------------
   1) Create an array called numbers with 10 numbers
      Example: [3, 8, 12, 1, 6, 9, 20, 4, 7, 15]
   2) console.log it
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const numbers = [3, 8, 12, 1, 6, 9, 20, 4, 7, 15];
console.log(numbers);

/* -----------------------------------------
   STEP 2 — filter: keep only numbers >= 10
   -----------------------------------------
   1) Create a new array called bigNumbers using filter
   2) Keep only numbers that are 10 or higher
   3) console.log bigNumbers
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const bigNumbers = numbers.filter((number) => number >= 10);
console.log(bigNumbers);

/* -----------------------------------------
   STEP 3 — filter: keep only EVEN numbers
   -----------------------------------------
   1) Create a new array called evenNumbers using filter
   2) Keep only numbers that are even
   Hint:
   n % 2 === 0
   3) console.log evenNumbers
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

/* -----------------------------------------
   STEP 4 — map: double every number
   -----------------------------------------
   1) Create a new array called doubled using map
   2) Each number should become number * 2
   3) console.log doubled
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

/* -----------------------------------------
   STEP 5 — Combine filter + map
   -----------------------------------------
   Create a new array called result:
   - Step A: filter numbers to keep only numbers > 5
   - Step B: map those numbers to add 100 to each one

   Then console.log result
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const result = numbers
  .filter((number) => number > 5)
  .map((number) => number + 100);

console.log(result);
