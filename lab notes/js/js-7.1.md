# 7.1 Using JS with HTML

---


## Introduction to Key JavaScript Concepts

### 1. Document Object Model (DOM)

- **document Object**: Represents the entire DOM and allows interaction with HTML elements.
- **Basic DOM Manipulation**:
  - `document.getElementById("id")`: Accesses an HTML element by ID for manipulation.
  - `document.writeln()`: Writes HTML directly to the document, updating the DOM.

### 2. JavaScript in HTML
- **Inline JavaScript**: Use `<script>` tags within the HTML `<body>` or `<head>` to add functionality.
- **External JavaScript**: Link JavaScript files with `<script src="file.js"></script>`, separating code from HTML.

### 3. The `window` Object
- **Definition**: Represents the browser window and provides properties and methods for window management. It is an example of a global object in the browser environment. Other global objects include `document`, `console`, and `navigator`.

- **Common Methods**:
  - `window.confirm()`: Displays a confirmation dialog box, returning `true` if OK is clicked, `false` if Cancel.
  - `window.prompt()`: Displays a dialog asking for user input, returning their response.
  - `window.alert()`: Shows an alert dialog box with an OK button.
  - **Extra**:
    - `window.open()`: Opens a new window/tab.
    - `window.location`: Retrieves the current URL.
    - `window.innerHeight` & `window.innerWidth`: Gets window dimensions.

### 4. Using the Console for Debugging
- **Purpose**: Displays output messages useful for development and debugging.
- **Console Methods**:
  - `console.log("message")`: Logs informational messages to the console.
  - `console.warn("warning")`: Displays a warning message.
  - `console.error("error")`: Shows an error message.
  - `console.dir(object)`: Displays an interactive list of an object’s properties.

### 5. Async and Defer Attributes
- **async**: JavaScript file loads asynchronously, executing as soon as it’s available.
- **defer**: JavaScript file loads in the background and executes after HTML is fully parsed.

---

## Lab Exercise: Interactive Quiz Webpage

### Problem: Create a Mini Interactive Quiz

This lab exercise will guide you through creating a mini interactive quiz webpage using JavaScript.

1. **HTML Setup**:
   - Create an HTML page with:
     - A `<p>` element for a welcome message.
     - A `<button>` to start the quiz.
     - An empty `<div>` for displaying the quiz question.

2. **JavaScript Instructions**:
   - **Step 1**: Log a welcome message to the console using `console.log()`.
   - **Step 2**: Attach a `click` event to the button:
     - Use `window.confirm()` to ask if the user is ready.
     - If the user selects "OK", display a question in the `<div>`.
   - **Step 3**: Use `window.prompt()` to get the user’s answer.
     - If correct, use `document.writeln()` to display "Correct!" in the document.
     - If incorrect, use `window.alert()` to display the correct answer.
   - **Step 4**: Log the user’s answer in the console to show whether it was correct or incorrect.

3. **Extra Challenge**:
   - Add an array of questions and randomly display one when the quiz starts.

---


### Example Code Outline 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mini Quiz</title>
</head>
<body>
    <p>Welcome to the Quiz!</p>
    <button id="startQuiz">Start Quiz</button>
    <div id="quizContainer"></div>

    <script>
        console.log("Welcome to the Quiz!");

        document.getElementById("startQuiz").onclick = function() {
            let ready = window.confirm("Are you ready to start?");
            if (ready) {
                let question = "What is 2 + 2?";
                let answer = window.prompt(question);
                
                if (answer == "4") {
                    document.writeln("Correct!");
                } else {
                    window.alert("Incorrect. The correct answer is 4.");
                }

                console.log("User answered: " + answer);
            }
        };
    </script>
</body>
</html>
```

---

## Concept Mapping Table

| **Concept**                | **Application in the Problem**                                                                             |
|----------------------------|------------------------------------------------------------------------------------------------------------|
| **DOM Manipulation**       | `document.getElementById()`, `document.writeln()` for displaying output in the HTML.                        |
| **JavaScript in HTML**     | JavaScript embedded in `<script>` tags for functionality.                                                  |
| **`window` Object**        | `window.confirm()`, `window.prompt()`, and `window.alert()` for user interaction and control.              |
| **Console for Debugging**  | `console.log()` used to log messages and capture user inputs.                                              |
| **API**                    | Interaction with browser components (DOM, console, window) demonstrates the use of APIs.                   |
| **Async & Defer**          | (Optional) `async` and `defer` attributes can optimize script loading if using external JavaScript.        |
