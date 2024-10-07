# 7.2 Document Object Model (DOM)


## Introduction to Key Concepts

### 1. Document Object Model (DOM)
- **Node**: An individual object in the DOM tree.
- **Root Node**: The top-most node in the DOM.
- **Child Node**: Directly under another node.
- **Parent Node**: Directly above another node.

### 2. DOM Methods
- `document.getElementById()`: Returns a node by its `id` attribute.
- `document.getElementsByTagName()`: Returns an array of nodes by their tag name.
- `document.getElementsByClassName()`: Returns an array of nodes by their class name.
- `document.querySelector()`: Returns the first node matching a CSS selector.
- `document.querySelectorAll()`: Returns all nodes matching a CSS selector.

### 3. Modifying the DOM
- `removeAttribute()`: Removes an attribute from a node.
- `textContent`: Gets or sets a node's text content.
- `innerHTML`: Gets or sets a node's content as an HTML string.

---

## Lab Exercise: DOM Manipulation Activity

### Problem: DOM Manipulation Activity

This problem will modify a webpage about early programming languages by updating its content and structure using JavaScript DOM manipulation techniques.



### Instructions
1. **HTML Setup**:
   - Start with the following HTML structure:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <title>Early Programming Languages</title>
         <script src="dom.js" defer></script>
       </head>
       <body>
         <p id="description">Early programming languages still in use:</p>
         <ul class="languages">
           <li>Fortran</li>
           <li>Lisp</li>
           <li>COBOL</li>
           <li>BASIC</li>
         </ul>
       </body>
     </html>
     ```

2. **JavaScript**:
   - Create a `dom.js` file to manipulate the DOM:
     - **Step 1**: Use `document.getElementById()` to select the `<p>` element and log its `textContent` to the console.
     - **Step 2**: Use `document.querySelectorAll()` to select all `<li>` elements and log the text content of each one.
     - **Step 3**: Modify the content of the `<p>` element using `.textContent` to add " (Updated)" to its text.
     - **Step 4**: Change the first `<li>` element's text to "Python (Added)" using `.textContent`.
     - **Step 5**: Remove the `class` attribute from `<ul>` using `.removeAttribute()`.
     - **Step 6**: Add a new `<li>` element to the `<ul>` list with `innerHTML`.

---
### Example Code Outline

```js

// Step 1: Log text content of <p> with id "description"
let description = document.getElementById("description");
console.log("Paragraph text:", description.textContent);

// Step 2: Log text content of all <li> elements
let languages = document.querySelectorAll("li");
languages.forEach((item, index) => {
  console.log(`Language ${index + 1}:`, item.textContent);
});

// Step 3: Modify text content of <p> to add " (Updated)"
description.textContent += " (Updated)";

// Step 4: Change first <li> element's text content to "Python (Added)"
languages[0].textContent = "Python (Added)";

// Step 5: Remove class attribute from <ul> with class "languages"
let list = document.querySelector(".languages");
list.removeAttribute("class");

// Step 6: Add a new <li> element to the <ul> list using innerHTML
list.innerHTML += "<li>JavaScript</li>";

// Log final HTML structure of the <ul>
console.log("Updated list HTML:", list.innerHTML);
```

---

## Concept Mapping Table

| **Concept**                | **Application in the Problem**                                                                 |
|----------------------------|------------------------------------------------------------------------------------------------|
| **Node Concepts**          | Demonstrated through various node types (element, attribute, text) in the HTML structure.      |
| **DOM Methods**            | Using `getElementById`, `querySelectorAll`, and `removeAttribute` to interact with nodes.      |
| **Modifying the DOM**      | Using `.textContent` to change text and `.innerHTML` to add HTML elements dynamically.         |
| **Basic DOM Structure**    | Identified by observing `parent` and `child` relationships within the HTML and JavaScript.     |
