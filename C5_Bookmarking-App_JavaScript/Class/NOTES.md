# Bookmarking App

[Class 5 Course Content](tsk)

## Preparation

### GOALS

By the end of this lesson, you will be able to:

1. **Create Floating Inputs**
2. **Utilize Local Storage**
3. **Fetch Data from an API**

![TSK finished project](../Resources/TSK)

---

### CONCEPTS

- **Local Storage:** _Local Storage_ is tsk

- **API:** An _API (Application Programming Interface)_ is tsk

---

---

## Walkthrough

### STEP 1: FLOATING INPUT

**Aim**: Create the main layout, styles and basic form functionality for the application

| _./index.html_ |

- [ ] **TSK**
  - Create a title
  - Create an overlay div
  - Create a form with a lable, input, and button
  - Link to the CSS & JavaScipt files

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Link Stasher | Save Links & Clear Your Mind!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- * MAIN CONTENT * -->
    <main class="container">
      <!-- Title -->
      <h1>Link Stasher!</h1>

      <!-- Overlay -->
      <div class="overlay"></div>

      <!-- Input Form -->
      <form id="link-form">
        <label for="link" class="sr-only">Enter Your Link</label>
        <input
          class="link-input"
          type="text"
          id="link"
          name="link"
          placeholder="What did you find?"
        />
        <button type="submit" class="btn" aria-label="Add new link">
          &plus;
        </button>
      </form>
    </main>

    <!-- * JAVASCRIPT * -->
    <script src="./app.js"></script>
  </body>
</html>
```

🔻

| _./styles.css_ |

- [ ] **Style the main container**
  - Add the container style to take full width & height
  - Find an image on unsplash.com and save locally
  - Use the image to be a background for the page

```css
.container {
  text-align: center;
  background: url("./images/night-sky_bg.jpg") no-repeat center/cover;
  min-height: 100vh;
  width: 100vw;
}
```

🔻

- [ ] **Style the form and input**

```css
form {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(275px, 50%, 700px);
  margin: 0 auto;
}

.link-input {
  padding: 0.5em 1.25em;
  font-size: 1.25rem;
  border-radius: 8px;
  width: 100%;
}
```

🔻

- [ ] **Style the overlay**

```css
.overlay {
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  opacity: 0;

  transition: 300ms ease opacity;
}
```

🔻

- [ ] **Style the body when the form is focused**
  - Add body styles for the form, input, and overlay
  - Add transitions

```css
body.focus-form form {
  transform: scale(1.1);
}
body.focus-form .link-input {
  padding: 0.75em 1.5em;
  font-size: 1.5rem;
}
body.focus-form .overlay {
  opacity: 1;
}
// . . .
form {
  // . . .
  transition: 500ms cubic-bezier(0.17, 0.67, 0.35, 1.6) opacity;
}

.link-input {
  // . . .
  transition: 500ms cubic-bezier(0.17, 0.67, 0.35, 1.6) all;
}
```

🔻

| _./app.js_ |

- [ ] **Establish the Element Selectors**
  - Create a variable for the body element
  - Create a variable for the input element
  - Create a variable for the overlay element

```jsx
// * ========== HTML Element Selectors ========== * \\
const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");
```

🔻

- [ ] **Initiate the Event Listeners**
  - Create an event listener on the input's "focus" event
  - Create an event listener on the overlay's "click" event

```jsx
// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for "focus" event on the "input" and runs the "focusInput" function
input.addEventListener("focus", focusInput);
// EVENT LISTENER: Listens for "click" event on the "overlay" and runs the "endFocus" function
overlay.addEventListener("click", endFocus);
```

🔻

- [ ] **Declare the Functions**
  - Create the `TSK` function
  - Creat the `TSK` function

```jsx
// * ========== Function Declarations ========== * \\
// FUNCTION: Adds the "focus-form" class on the body when the form is in focus
function focusInput() {
  body.classList.add("focus-form");
}

// FUNCTION: Removes the "focus-form" class on the body when the form is out of focus
function endFocus() {
  if (body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}
```

🔻

- [ ] **Split the input Event Listener**
  - Create an event listener on the input for the "focusin" event
  - Create an event listener on the input for the "focusout" event

```jsx
// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for "focusin" event on the "input" and runs the "focusInput" function
input.addEventListener("focusin", focusInput);
// EVENT LISTENER: Listens for "focusout" event on the "input" and runs the "endFocus" function
input.addEventListener("focusout", endFocus);
// . . .
```

🔻

**Check**: TSK

- Does the overlay take up the whole screen?
- When you click or tab into the input, does the overlay show and the form get larger?

---

### STEP 2: SHOWING BOOKMARKS

**Aim**: TSK

| _TSK_ |

- [ ] **TSK**

```jsx

```

🔻

- [ ] **TSK**

```jsx

```

🔻

| _TSK_ |

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

**Check**: TSK

- TSK

---

### STEP 3: LOCAL STORAGE

**Aim**: TSK

| _TSK_ |

- [ ] **TSK**

```jsx

```

🔻

- [ ] **TSK**

```jsx

```

🔻

| _TSK_ |

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

**Check**: TSK

- TSK

---

### STEP 4: DELETING BOOKMARKS

**Aim**: TSK

| _TSK_ |

- [ ] **TSK**

```jsx

```

🔻

- [ ] **TSK**

```jsx

```

🔻

| _TSK_ |

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

**Check**: TSK

- TSK

---

### STEP 5: FETCHING DATA

**Aim**: TSK

| _TSK_ |

- [ ] **TSK**

```jsx

```

🔻

- [ ] **TSK**

```jsx

```

🔻

| _TSK_ |

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

- [ ] **TSK**

```jsx
// TSK
```

🔻

**Check**: TSK

- TSK

---

---

## Review

### ACCOMPLISHMENTS

Congratulations yet again! 🎊🎉

Feel proud that **you learned something new and valuable today**.

Learning to code is a journey, and you are taking the necessary steps to improve your skills and opportunities for the future.

_Good on you!_

Specifically, we learned how to:

- TSK
- TSK
- TSK

---

### RESOURCES

[TSK _(Tool)_](tsk)

[TSK _(Video)_](tsk)

[TSK _(Article)_](tsk)

---

---
