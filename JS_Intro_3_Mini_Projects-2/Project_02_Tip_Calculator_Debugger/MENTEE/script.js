/*
  🧠 Project 2 — Tip Calculator Debugger 
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

// STEP 1 — Set the inputs (numbers)
/*
  Create these numbers:
  - billAmount (example: 520)
  - tipPercentWhole (example: 15 for 15%)
  - peopleCount (example: 2)
  Console.log the inputs so you can SEE them.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const billAmount = 520;
const tipPercentWhole = 15;
const peopleCount = 2;

console.log("Bill amount:", billAmount);
console.log("Tip percent:", tipPercentWhole);
console.log("People:", peopleCount);

// STEP 2 — Percentage logic (15% → decimal)
/*
  Convert the whole percent into a decimal:
  Example: 15% becomes 15 / 100 which equals 0.15
  Create: tipPercentDecimal = tipPercentWhole / 100
  Console.log tipPercentDecimal.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const tipPercentDecimal = tipPercentWhole / 100;
console.log("Tip as a decimal:", tipPercentDecimal);

// STEP 3 — Calculate the tip (multiplication)
/*
  Create tipAmount = billAmount * tipPercentDecimal
  Console.log tipAmount (debug step).
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const tipAmount = billAmount * tipPercentDecimal;
console.log("Tip amount:", tipAmount);

// STEP 4 — Calculate total bill (addition)
/*
  Create totalAmount = billAmount + tipAmount
  Console.log totalAmount.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const totalAmount = billAmount + tipAmount;
console.log("Total amount:", totalAmount);

// STEP 5 — Split per person (division)
/*
  Create perPerson = totalAmount / peopleCount
  Console.log perPerson.
  Note: you might see decimals — that's normal.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const perPerson = totalAmount / peopleCount;
console.log("Amount per person:", perPerson);

// STEP 6 — Use % (remainder) operator (requested)
/*
  Use % to check if the bill is divisible evenly by peopleCount.
  Create remainder = billAmount % peopleCount
  Console.log remainder.
  If remainder is 0, it divides evenly. If not, there's a leftover remainder.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const remainder = billAmount % peopleCount;
console.log("Bill division remainder:", remainder);

// STEP 7 — Debugging checks (>, <)
/*
  Console.log booleans that answer:
  - Is tipAmount > 0 ?
  - Is totalAmount > billAmount ?
  - Is remainder < peopleCount ? (it should be!)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log("Is the tip greater than zero?", tipAmount > 0);
console.log("Is the total greater than the bill?", totalAmount > billAmount);
console.log("Is the remainder less than the number of people?", remainder < peopleCount);
