/*
  PROJECT 02 — Hover Mood Card + Keyboard Mirror 

  ✅ Events you will practice:
  - "mouseover"  (mouse enters an element)
  - "mouseout"   (mouse leaves an element)
  - "keydown"    (a key is pressed down)
  - "keyup"      (a key is released)

  You will build two interactive features:
  1) A card that changes "mood" when you hover in and out
  2) An input that mirrors what the user types + shows key info

  IMPORTANT:
  - For hover events, you will add/remove CSS classes on the card.
  - For keyboard events, you will use the `event` object.
*/

// =====================================================
// STEP 1) SELECT the elements you need
// -----------------------------------------------------
// Select:
// - #moodCard
// - #moodText
// - #typeInput
// - #mirrorText
// - #lastKey
// - #eventType
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
const moodCardEl = document.querySelector("#moodCard");
const moodTextEl = document.querySelector("#moodText");
const typeInputEl = document.querySelector("#typeInput");
const mirrorTextEl = document.querySelector("#mirrorText");
const lastKeyEl = document.querySelector("#lastKey");
const eventTypeEl = document.querySelector("#eventType");

// =====================================================
// STEP 2) HOVER IN: mouseover on the card
// -----------------------------------------------------
// ✅ Goal: when the mouse goes over the card:
//
// 1) add the class "isHappy" to the card
// 2) update #moodText to: "Current mood: happy"
// 3) console.log a message for debugging
//
// 💡 Tip: moodCardEl.classList.add("isHappy")
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
moodCardEl.addEventListener("mouseover", () => {
  moodCardEl.classList.add("isHappy");
  moodTextEl.textContent = "Current mood: happy";
  console.log("Mood card entered");
});

// =====================================================
// STEP 3) HOVER OUT: mouseout on the card
// -----------------------------------------------------
// ✅ Goal: when the mouse leaves the card:
//
// 1) remove the class "isHappy"
// 2) update #moodText back to: "Current mood: calm"
// 3) console.log a message
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
moodCardEl.addEventListener("mouseout", () => {
  moodCardEl.classList.remove("isHappy");
  moodTextEl.textContent = "Current mood: calm";
  console.log("Mood card left");
});

// =====================================================
// STEP 4) KEYDOWN: show live typing + key info
// -----------------------------------------------------
// ✅ Goal: when a key is pressed while typing in the input:
//
// 1) Set #mirrorText to the input's current value
// 2) Set #lastKey to event.key  (example: "a", "Enter", "Backspace")
// 3) Set #eventType to "keydown"
// 4) console.log(event.key) for debugging
//
// 💡 Tip: inputEl.value gives you the current input text
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
typeInputEl.addEventListener("keydown", (event) => {
  mirrorTextEl.textContent = typeInputEl.value;
  lastKeyEl.textContent = event.key;
  eventTypeEl.textContent = "keydown";
  console.log(event.key);
});

// =====================================================
// STEP 5) KEYUP: update event label
// -----------------------------------------------------
// ✅ Goal: when a key is released:
//
// 1) Update #eventType to "keyup"
// 2) (Optional) add the class "isFocused" to the card for 200ms
//    to give a tiny "feedback" effect while typing.
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
typeInputEl.addEventListener("keyup", () => {
  mirrorTextEl.textContent = typeInputEl.value;
  eventTypeEl.textContent = "keyup";
  moodCardEl.classList.add("isFocused");

  setTimeout(() => {
    moodCardEl.classList.remove("isFocused");
  }, 200);
});

// =====================================================
// STEP 6) DEBUG CHECK
// -----------------------------------------------------
// console.log your elements to confirm selectors worked.
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log(
  moodCardEl,
  moodTextEl,
  typeInputEl,
  mirrorTextEl,
  lastKeyEl,
  eventTypeEl,
);
