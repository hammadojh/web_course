# JavaScript Event-Driven Programming Lab Notes

## Introduction to Key Concepts

### 1. Event-Driven Programming
- **Event**: An action (e.g., click, input, keypress) that the browser responds to.
- **Event-Driven Programming**: A style of programming where code runs in response to events.
- **Event Handler / Event Listener**: Code that runs when a specific event occurs.

### 2. Using `addEventListener()`
- `addEventListener()`: Attaches an event handler to a specified element, allowing multiple events to be handled for the same element.
- **Event Object**: Passed as a parameter to the event handler, providing details about the event (e.g., `event.target`, `event.key`).

### 3. Common Event Types
- `click`: Triggered when an element is clicked.
- `mouseover`: Triggered when the mouse pointer moves over an element.
- `keydown`: Triggered when a keyboard key is pressed down.
- `keyup`: Triggered when a keyboard key is released.
- `focus`: Triggered when an element receives keyboard input focus.
- `blur`: Triggered when an element loses focus.
- `change`: Triggered when an input element's value is modified.
- `input`: Triggered whenever the value of an `<input>` or `<textarea>` element changes.
- `DOMContentLoaded`: Triggered when the HTML document has finished loading and parsing.
- `load`: Triggered when the entire webpage, including dependent resources, has loaded.
- `submit`: Triggered when a form is submitted.

---

## Lab Exercise: Focus and Blur Event Handling

### Problem: Focus and Blur Event Handling

The goal of this exercise is to practice implementing focus and blur event handlers on input elements to change their border colors dynamically.


### Instructions
1. **HTML Setup**:
   - Start with the following HTML structure:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <title>Event Handling Example</title>
         <script src="events.js" defer></script>
       </head>
       <body>
         <p>
           <label for="name">Name:</label>
           <input type="text" id="name">
         </p>
         <p>
           <label for="answer">Answer:</label>
           <input type="number" id="answer">
         </p>
       </body>
     </html>
     ```

2. **JavaScript**:
   - Create an `events.js` file to implement event-driven programming:
     - **Step 1**: Select all `<input>` elements using `querySelectorAll()`.
     - **Step 2**: Use a loop to iterate over the inputs and:
       - Set the initial border color to red.
       - Add a `focus` event listener to change the border color to green.
       - Add a `blur` event listener to change the border color to blue when the input loses focus.

### Example Code Outline

```javascript
// Step 1: Select all input elements
let inputs = document.querySelectorAll("input");

// Step 2: Loop through each input and add focus and blur event listeners
inputs.forEach(input => {
  input.style.border = "1px solid red"; // Initial border color

  input.addEventListener("focus", function() {
    this.style.border = "1px solid green"; // Change border to green on focus
  });

  input.addEventListener("blur", function() {
    this.style.border = "1px solid blue"; // Change border to blue on blur
  });
});
