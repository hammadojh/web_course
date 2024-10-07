# JavaScript DOM Manipulation Lab Notes

## Introduction to Key Concepts

### 1. DOM Root and Navigation
- `document.documentElement`: The root of the DOM tree.
- `parentNode`: Refers to a node's parent.
- `childNodes`: Array-like collection of all child nodes (includes text nodes).
- `children`: Array of only element child nodes (excludes text nodes).
- `nextElementSibling`: Refers to the next sibling element.
- `previousElementSibling`: Refers to the previous sibling element.

### 2. DOM Manipulation Methods
- `appendChild()`: Adds a node as the last child of a parent node.
- `insertBefore()`: Inserts a node before an existing child node.
- `removeChild()`: Removes a child node.
- `createElement()`: Creates a new element node.
- `createTextNode()`: Creates a new text node.
- `cloneNode()`: Clones an existing node; the method's boolean parameter specifies whether to clone its children.

---

## Lab Exercise: Extending and Modifying a List with DOM Manipulation

### Problem: DOM Manipulation Exercise

The goal of this exercise is to practice advanced DOM manipulation techniques by modifying and extending an ordered list of colors.


### Instructions
1. **HTML Setup**:
   - Start with the following HTML structure:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <title>DOM Example</title>
         <script src="script.js" defer></script>
       </head>
       <body>
         <ol>
           <li>Red</li>
           <li>Green</li>
         </ol>
       </body>
     </html>
     ```

2. **JavaScript**:
   - Create a `script.js` file to manipulate the DOM:
     - **Step 1**: Use `document.createElement()` and `createTextNode()` to create a new `<li>` element with the text "Blue". Append it to the `<ol>` using `appendChild()`.
     - **Step 2**: Clone the first `<li>` element (containing "Red") using `cloneNode(true)`, and insert it before the "Blue" `<li>` element using `insertBefore()`.
     - **Step 3**: Use `removeChild()` to remove the last `<li>` element.
     - **Step 4**: Log the `childNodes` and `children` properties of the `<ol>` element to the console to observe the differences.

### Example Code Outline

```javascript
// Step 1: Create a new <li> element with text "Blue" and append to <ol>
let newListNode = document.createElement("li");
let newText = document.createTextNode("Blue");
newListNode.appendChild(newText);

let colorList = document.querySelector("ol");
colorList.appendChild(newListNode);

// Step 2: Clone the first <li> element and insert it before "Blue"
let firstItem = colorList.children[0];
let clonedNode = firstItem.cloneNode(true);
colorList.insertBefore(clonedNode, colorList.children[2]);

// Step 3: Remove the last <li> element
colorList.removeChild(colorList.lastElementChild);

// Step 4: Log childNodes and children of <ol>
console.log("childNodes:", colorList.childNodes); // includes text nodes
console.log("children:", colorList.children);     // only element nodes
