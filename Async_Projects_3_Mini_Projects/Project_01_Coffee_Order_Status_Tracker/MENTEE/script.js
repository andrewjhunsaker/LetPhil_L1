/*
===========================================================
PROJECT 1 — Coffee Order Status Tracker (setTimeout)
===========================================================

🎯 WHAT YOU ARE BUILDING
A small UI where you click “Place Order” and the order progresses:
Idle → Pending → Brewing → Ready

You will SEE the difference between:
✅ Synchronous code (runs immediately)
✅ Asynchronous code (runs later)

-----------------------------------------------------------
IMPORTANT CONCEPT (READ THIS)
When you click a button:
1) Your click handler runs synchronously (right now)
2) Any setTimeout callbacks run later (after the delay)
That’s why your first console logs appear before the status changes.

-----------------------------------------------------------
STEP 1 — Grab all DOM elements (IDs already exist in HTML)
Use document.getElementById(...) to store these in variables:

Buttons:
- placeBtn
- cancelBtn
- resetBtn

Status UI:
- statusText (the big status text)
- orderIdText (the order id label)
- stepPending, stepBrewing, stepReady (timeline rows)

-----------------------------------------------------------
STEP 2 — Create "state" variables (memory in JS)
You need to remember things between clicks.

Create:
- currentOrderId (string)
- timeoutIds (array) to store each setTimeout id

Why array?
Because you might schedule more than 1 timeout and need to cancel ALL of them.

Example idea:
const timeoutIds = [];
const id = setTimeout(...);
timeoutIds.push(id);

-----------------------------------------------------------
STEP 3 — Create small UI helper functions (clean code)
Create functions that do ONE job each:

A) resetTimeline()
   - remove classes "active" and "done" from all steps
   - set statusText back to "Idle"
   - set orderIdText to "—"

B) setStep(stepElement, state)
   - state can be "active" or "done"
   - if "active": add class active
   - if "done": remove active, add done

C) setStatus(text, tone)
   - set statusText.textContent to text
   - tone can be "neutral", "warn", "good", "bad"
   - update a CSS class on the statusText OR body to change color

D) clearAllTimeouts()
   - loop through timeoutIds and call clearTimeout(id)
   - then empty the array (timeoutIds = [])

-----------------------------------------------------------
STEP 4 — Place Order button (setTimeout chain)
When user clicks Place Order:

1) console.log("SYNC: Place Order clicked")
   (This proves this part runs immediately)

2) clearAllTimeouts()
   (If user clicks Place Order twice, you don't want old timers still running)

3) generate an order id:
   Example: "CF-" + random 4 digits
   Save to currentOrderId and show in orderIdText

4) disable placeBtn, enable cancelBtn

5) Immediately show "Pending"
   - setStatus("Pending", "warn")
   - setStep(stepPending, "active")

6) Schedule "Brewing" after ~1500ms
   - mark pending done
   - mark brewing active
   - setStatus("Brewing", "warn")
   - store the timeout id

7) Schedule "Ready" after ~3500ms total
   - mark brewing done
   - mark ready active
   - setStatus("Ready", "good")
   - disable cancelBtn, enable placeBtn
   - store the timeout id

-----------------------------------------------------------
STEP 5 — Cancel button (clearTimeout)
When user clicks Cancel:

1) console.log("SYNC: Cancel clicked")
2) clearAllTimeouts()  ✅ (this stops future steps)
3) setStatus("Cancelled", "bad")
4) enable placeBtn, disable cancelBtn

-----------------------------------------------------------
STEP 6 — Reset button
Reset should always bring you back to Idle:
- clearAllTimeouts()
- resetTimeline()
- enable placeBtn, disable cancelBtn

-----------------------------------------------------------
✅ TEST YOUR APP
- Click Place Order → Cancel quickly → should stop progressing
- Click Place Order and wait → should reach Ready
- Click Reset at any time → should return to Idle cleanly
*/

// ✅ WRITE YOUR CODE BELOW THIS LINE
const placeBtn = document.getElementById("placeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const resetBtn = document.getElementById("resetBtn");
const statusText = document.getElementById("statusText");
const orderIdText = document.getElementById("orderIdText");
const stepPending = document.getElementById("stepPending");
const stepBrewing = document.getElementById("stepBrewing");
const stepReady = document.getElementById("stepReady");

let currentOrderId = "";
const timeoutIds = [];
const steps = [stepPending, stepBrewing, stepReady];

function resetTimeline() {
  steps.forEach((step) => step.classList.remove("active", "done"));
  setStatus("Idle", "neutral");
  orderIdText.textContent = "—";
  currentOrderId = "";
}

function setStep(stepElement, state) {
  if (state === "active") {
    stepElement.classList.remove("done");
    stepElement.classList.add("active");
  }

  if (state === "done") {
    stepElement.classList.remove("active");
    stepElement.classList.add("done");
  }
}

function setStatus(text, tone) {
  statusText.textContent = text;
  statusText.classList.remove("toneNeutral", "toneWarn", "toneGood", "toneBad");
  const toneClasses = {
    neutral: "toneNeutral",
    warn: "toneWarn",
    good: "toneGood",
    bad: "toneBad",
  };
  statusText.classList.add(toneClasses[tone]);
}

function clearAllTimeouts() {
  timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  timeoutIds.length = 0;
}

placeBtn.addEventListener("click", () => {
  console.log("SYNC: Place Order clicked");
  clearAllTimeouts();
  resetTimeline();

  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  currentOrderId = `CF-${randomDigits}`;
  orderIdText.textContent = currentOrderId;
  placeBtn.disabled = true;
  cancelBtn.disabled = false;
  setStatus("Pending", "warn");
  setStep(stepPending, "active");

  const brewingTimeoutId = setTimeout(() => {
    setStep(stepPending, "done");
    setStep(stepBrewing, "active");
    setStatus("Brewing", "warn");
  }, 1500);

  const readyTimeoutId = setTimeout(() => {
    setStep(stepBrewing, "done");
    setStep(stepReady, "active");
    setStatus("Ready", "good");
    cancelBtn.disabled = true;
    placeBtn.disabled = false;
  }, 3500);

  timeoutIds.push(brewingTimeoutId, readyTimeoutId);
});

cancelBtn.addEventListener("click", () => {
  console.log("SYNC: Cancel clicked");
  clearAllTimeouts();
  setStatus("Cancelled", "bad");
  placeBtn.disabled = false;
  cancelBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearAllTimeouts();
  resetTimeline();
  placeBtn.disabled = false;
  cancelBtn.disabled = true;
});
