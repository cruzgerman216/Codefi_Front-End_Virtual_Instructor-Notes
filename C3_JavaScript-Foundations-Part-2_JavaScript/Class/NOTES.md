# JavaScript Foundations - Part 2

[Class 3 Course Content](https://www.better.dev/javascript-functions)

## Preparation

### GOALS

By the end of this lesson, you will be able to:

1. **Create JS Functions**
2. **Create JS Objects**
3. **Grasp Common JS Built-in Objects & Methods**

![TSK finished project](../Resources/TSK)

---

### CONCEPTS

- **Function:** A _function_ is a way to create an on-demand, reusable and exectuable block of code.

- **Object:** Almost everything in JavaScript is an _object_. _Objects_ in a nutshell, are a set of self-contained key-value pairs.

---

---

## Walkthrough

### STEP 1: FUNCTIONS

**Aim**: Comprehend creating and using JavaScript Functions

| _./functions.js_ |

- [ ] **Creating Our First Function**
  - The purpose of functions is to create a block of code you can run anytime. This reduces the duplication of code and enhances the readability
  - You can replace multiple `console.log()` statements that say the same thing by creating a function that prints the statement and calling the function multiple times instead

```jsx
// console.log("You became a developer by learning with Codefi!")
// console.log("You became a developer by learning with Codefi!")
// console.log("You became a developer by learning with Codefi!")

// * FUNCTION DECLARATION (Generic) * \\
function learnToCode() {
  console.log("You became a developer by learning with Codefi!");
}

// * FUNCTION CALLS * \\
learnToCode();
learnToCode();
learnToCode();
```

🔻

- [ ] **Pass Parameters to a Function**
  - To add dynamic abilities to a funciton, it can accept an _argument_ and use that information insdie to run differently depending on what is passed in
  - Pass in a student variable, give it a default value of "nobody"
  - Use a template literal to pass in the studnets name with a string after
  - When you are calling the functino, pass in a string for a studnets name

```jsx
// * FUNCTION DECLARATION (Generic) * \\
function learnToCode(student = "nobody") {
  console.log(`${student} became a developer by learning with Codefi!`);
}
```

🔻

- [ ] **Conditionalally Rendering a Statement Depending on an Argument**
  - Pass in a second variable `language` with a default value of "nothing"
  - In the template literal string, use this argument to further the dynamic abilities
  - Use this argument to create a conditional statement
  - If the language is equal to JavaScript, render a different string

```jsx
// * FUNCTION DECLARATION (Generic) * \\
function learnToCode(student = "nobody", language = "nothing") {
  if (language.toLowerCase() === "javascript") {
    console.log("Are you learning Front-End Development?");
  } else {
    console.log("Have you tried JavaScript?");
  }
  console.log(`${student} became a developer by learning ${language}!`);
}
```

🔻

- [ ] **Functions with Return Values**
  - Create a new function `gradeAssignment(score = 0)` that takes in a score (default to 0) and returns that score
  - Call the function, pass in a score and save the result in a variable
  - `console.log()` the variable

```jsx
function gradeAssignment(score = 0) {
  return score;
}

const myTest = gradeAssignment(99);

console.log(myTest);
```

🔻

| _./index.html_ |

- [ ] **Call a Function Via Button Click**
  - Create a button that calls the `gradeAssignment()` function - pass in any score you want

```html
<!-- * MAIN CONTENT * -->
<section class="container">
  <h1>Practice JavaScript Foundations!</h1>
  <p>Click the button and check the console in your developer tools.</p>

  <button onclick="gradeAssignment(99)" class="btn-primary">
    Get my Score
  </button>
</section>
```

🔻

| _./functions.js_ |

- [ ] **Creating Anonymous Functions & ES6 Arrow Functions**
  - Create an anonymous function and store the value in a variable. _Note_: function variables can only be called AFTER they are declared
  - Practice ES6 arrow functions by refactoring the first two functions we created

```jsx
// * FUNCTION DECLARATION (ES6 ARROW) * \\
const learnToCodeES6 = (student, language) => {
  // Your Code Here
};

// * FUNCTION DECLARATION (ES6 ARROW) * \\
const gradeAssignmentES6 = (score) => {
  // Your Code Here
};

// * FUNCTION DECLARATION (Anonymous) * \\
const greet = function () {
  console.log("Hello");
};
```

🔻

**Check**: Assess your understanding of JavaScript functions.

- What is another name for a function parameter?
- How do you write an ES6 arrow function?
- When can you call a function before it is declared?

---

### STEP 2: OBJECTS

**Aim**: Comprehend Creating and Using JavaScript Objects

| _./objects.js_ |

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

**Check**: Assess your understanding of JavaScript objects

- TSK

---

### STEP 3: BUILT-IN OBJECTS

**Aim**: Comprehend the various built-in JavaScript objects

| _./built-in-objects.js_ |

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

**Check**: Assess your understanding of JavaScript built-in objects

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

- Create functions in old and modern fashion
- Code custom objects and understand their capabilities
- Recognize and use common built-in JavaScript objects

---

### RESOURCES

[TSK _(Tool)_](tsk)

[TSK _(Video)_](tsk)

[TSK _(Article)_](tsk)

---

---
