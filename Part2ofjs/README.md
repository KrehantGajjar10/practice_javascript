# Part 2 of JS Practice

This folder continues the JavaScript practice series, moving beyond the core fundamentals and focusing on how JavaScript interacts with the browser, the Document Object Model (DOM), and various Web APIs.

The practice files are divided into 6 distinct parts, each containing theory and practical mini-projects.

## Table of Contents

- [Practice 1: DOM Manipulation](#practice-1-dom-manipulation)
- [Practice 2: Events and Event Handling](#practice-2-events-and-event-handling)
- [Practice 3: Forms and Form Validation](#practice-3-forms-and-form-validation)
- [Practice 4: Asynchronous Timing Functions](#practice-4-asynchronous-timing-functions)
- [Practice 5: Browser Storage APIs](#practice-5-browser-storage-apis)
- [Practice 6: UI Components & Mini-Projects](#practice-6-ui-components--mini-projects)

---

### Practice 1: DOM Manipulation
This section covers how to select, modify, and create HTML elements dynamically using JavaScript.
- **Selecting Elements**: Using `document.querySelector` and `document.querySelectorAll` to grab DOM nodes.
- **Modifying Styles**: Changing CSS styles directly via the `.style` property and managing classes using `classList` (`add`, `remove`, `toggle`).
- **Iterating Elements**: Looping through multiple selected elements (like `<li>` tags) using `forEach` and standard `for` loops.
- **Attributes**: Reading, adding, and removing attributes dynamically (`setAttribute`, `removeAttribute`).
- **Creating Elements**: Building new HTML elements (`createElement`) and injecting them into the DOM (`appendChild`).

### Practice 2: Events and Event Handling
This section focuses on making web pages interactive by responding to user actions (mouse clicks, keyboard presses, etc.).
- **Event Binding**: Listening to events using `addEventListener` and cleaning them up with `removeEventListener`.
- **Common Events**: Handling `click`, `input`, `change`, `submit`, `mouseover`, `mouseout`, `mousemove`, `keyup`, and `keydown` events.
- **The Event Object**: Understanding the event payload (`event.target`, `event.type`) and preventing default behaviors (`event.preventDefault()`).
- **Event Bubbling & Capturing**: Understanding how events propagate up the DOM tree and how to use event delegation on parent elements.
- **Practical Exercises**: 
  - A real-time character counter for inputs.
  - Keyboard input display.
  - Triggering file uploads via custom button clicks.

### Practice 3: Forms and Form Validation
This section dives into handling form data, ensuring user inputs are correct before processing them.
- **Form Basics**: Reading values from `<input>`, `<textarea>`, and `<select>` elements.
- **Preventing Submissions**: Using `event.preventDefault()` to stop the page from refreshing when a form is submitted.
- **Error Handling**: Conditionally displaying error messages below input fields if the data is invalid.
- **Regex Validation**: Using Regular Expressions (`regex.test()`) to validate complex strings, such as ensuring a proper email format.

### Practice 4: Asynchronous Timing Functions
This section explores controlling the execution of code over time.
- **`setTimeout`**: Executing a block of code once after a specified delay.
- **`clearTimeout`**: Canceling a pending timeout.
- **`setInterval`**: Executing a block of code repeatedly at a specified interval.
- **`clearInterval`**: Stopping a running interval.
- **Practical Exercises**:
  - Auto-hiding banners/alerts after a few seconds.
  - Creating a visual time countdown.
  - Simulating a loading/downloading progress bar animation.

### Practice 5: Browser Storage APIs
This section covers how to persist data in the user's browser so it isn't lost upon page refresh.
- **Storage Types**: Understanding the differences between `localStorage` (persistent), `sessionStorage` (temporary/tab-specific), and `cookies` (lightweight, sent to server).
- **CRUD Operations**: Storing data (`setItem`) and retrieving data (`getItem`) from local storage.
- **Handling Complex Data**: Using `JSON.stringify` to save Arrays and Objects to storage, and `JSON.parse` to convert them back to JavaScript objects when retrieving them.
- **Practical Exercise**: Saving and applying a user's Theme Preference (Light/Dark mode) even after they reload the page.

### Practice 6: UI Components & Mini-Projects
This final section combines the previous concepts to build more complex, interactive user interface components.
- **Call Card Stack**: Managing complex state and DOM manipulation to build a stackable card UI with "up" and "down" controls.
- **User Finder Card**: Building a dynamic search feature that filters through an array of user objects and renders the matching results dynamically to the DOM.
