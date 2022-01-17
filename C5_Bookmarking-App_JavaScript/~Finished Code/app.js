// * ========== HTML Element Selectors ========== * \\
const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");

// * ========== Function Declarations ========== * \\
// FUNCTION:
function focusInput() {
  body.classList.add("focus-form");
}

// FUNCTION:
function endFocus() {
  if (body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}

// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for "focusin" event on the "input" and runs the "focusInput" function
input.addEventListener("focusin", focusInput);
// EVENT LISTENER: Listens for "focusout" event on the "input" and runs the "endFocus" function
input.addEventListener("focusout", endFocus);
// EVENT LISTENER: Listens for "" event on the "overlay" and runs the "endFocus" function
overlay.addEventListener("click", endFocus);
