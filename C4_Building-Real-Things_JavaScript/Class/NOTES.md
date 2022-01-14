# Building Real Things

[Class 4 Course Content](https://www.better.dev/javascript-dom-and-dom-events)

## Preparation

### GOALS

By the end of this lesson, you will be able to:

1. **Use and Manipulate the DOM**
2. **Create a JavaScript Accordion Menu**
3. **Code a JavaScript Progress Bar**
4. **Make a JS Stopwatch**
5. **Build a Pricing Calculator**

![TSK finished project](../Resources/TSK)

---

### CONCEPTS

- **DOM:** _TSK_ is tsk

- **TSK:** _TSK_ is tsk

---

---

## Walkthrough

### STEP 1: DOM & DOM EVENTS

**Aim**: Create buttons that change the background of the document in three different ways

- Look through the JavaScript document object

| _./dom.html_ |

- [ ] **Add an onclick event to the first button**
  - Walk through the code we have
  - Add an onclick event to call a function in JavaScript to update the background

```html
<!-- Button 1: inline HTML -->
<button class="btn btn_inline" onclick="changeBackground()">Button 1</button>
```

🔻
| _./dom.js_ |

- [ ] **Create a function that changes the background of the document**

  - Create a new function
  - Inside that function, change the `body.style.backgroundColor` to "#bae6fd"

- _NOTE_: it is cleanest to have all the functionality in JavaSciprt (seperation of concerns)

```jsx
// * Inline HTML * \\
function changeBackground() {
  document.body.style.backgroundColor = "#bae6fd";
}
```

🔻

- [ ] **Change background on a single button using JavaScript onclick property**
  - Create a new variable to select the second button
  - Set the `.onclick` property on the variable equal to a function that changes the body's background to "#a7f3d0"

```jsx
// * JavaScript button onclick property * \\
const javascriptSingleButton = document.querySelector(".btn_onclick");

javascriptSingleButton.onclick = function () {
  document.body.style.backgroundColor = "#a7f3d0";
};
```

🔻

- [ ] **Change background on multiple buttons dynamically using JavaScript onclick properties**
  - Change the `querySelector` to `querySelectorAll`
  - Use the `forEach` method to loop over all the buttons in the node list and set the body's background style

```jsx
// * JavaScript button onclick properties * \\
const javascriptMultipleButtons = document.querySelectorAll(".btn_onclick");

javascriptMultipleButtons.forEach((button) => {
  button.onclick = function () {
    document.body.style.backgroundColor = "#a7f3d0";
  };
});
```

🔻

- [ ] **Code a function to chnage the background to a random color**
  - Create a function that generates a random hexidecimal value
  - Set the documents body's backgroiund color to the random value

```jsx
// * JavaScript Event listener * \\
function changeBgToRandom() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}
```

🔻

- [ ] **Add event listeners that call the `changeBgToRandom` function**
  - Create a variable that selects the fifth button
  - Add an event listener to the variable, listen for the "click" event, and call the `changeBgToRandom` function
  - Add an event listener to the variable, listen for the "mouseenter" event, and call the `changeBgToRandom` function

```jsx
// * JavaScript Event listener * \\
function changeBgToRandom() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}

const eventListenerButton = document.querySelector(".btn_event-listener");
eventListenerButton.addEventListener("click", changeBgToRandom);
eventListenerButton.addEventListener("mouseenter", changeBgToRandom);
```

🔻

**Check**: Make sure each button does what we expect

- Does the first button change the background color to "#bae6fd"?
- Does the second, third, and fourth button change the color to "#a7f3d0"?
- Does the fifth button change the background to a random color on hover and on click?

---

### STEP 2: PRICING CALCULATOR

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

### STEP 3: CRAZY BUTTONS

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

### STEP 4: STOPWATCH

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

### STEP 5: ACCORDION

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

### STEP 6: SCROLLING PROGRESS

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
