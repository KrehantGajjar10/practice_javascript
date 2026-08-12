# Part 1 of JS Practice

This folder contains a series of practice exercises covering the foundational concepts of JavaScript. The practice files are divided into 7 distinct parts, each focusing on a specific topic or set of related concepts.

## Table of Contents

- [Practice 1: Variables and Data Types](#practice-1-variables-and-data-types)
- [Practice 2: Operators](#practice-2-operators)
- [Practice 3: Control Flow (Conditionals)](#practice-3-control-flow-conditionals)
- [Practice 4: Loops & Basic Algorithms](#practice-4-loops--basic-algorithms)
- [Practice 5: Functions](#practice-5-functions)
- [Practice 6: Arrays and Array Methods](#practice-6-arrays-and-array-methods)
- [Practice 7: Objects](#practice-7-objects)

---

### Practice 1: Variables and Data Types
This section covers the basics of JavaScript variables and how to check data types. It serves as an introduction to how JavaScript stores data in memory.
- **Variables**: Using `let` to declare block-scoped variables.
- **Primitive Data Types**: Working with `String`, `Boolean`, `null`, and `Symbol`.
- **Complex Types**: Basic introduction to reference types like `Object` and `Array`.
- **Utilities**: Using the `typeof` operator to dynamically check a variable's data type.

### Practice 2: Operators
This section focuses on different types of operators used in JavaScript for mathematical computation and logical comparisons.
- **Arithmetic Operators**: Addition, Subtraction, Multiplication, Division, and Modulus (`+`, `-`, `*`, `/`, `%`).
- **Increment/Decrement Operators**: Understanding the difference between postfix and prefix operations (`x++` vs `++x`).
- **Assignment Operators**: Shorthand assignments like `+=`, `*=` to update variables easily.
- **Comparison Operators**: Relational checks (`>`, `<`, `>=`, `<=`) and equality checks (`===`, `!==` for strict comparison, `==`, `!=` for loose comparison).
- **Logical Operators**: Combining conditions using AND (`&&`), OR (`||`), and NOT (`!`).
- **Ternary Operator**: Using `condition ? true : false` as a shorthand for simple if-else statements.
- **Operator Precedence**: Understanding the order of evaluation when multiple operators are combined.

### Practice 3: Control Flow (Conditionals)
This section dives into decision-making in code. It contains exercises on routing the code execution based on specific conditions.
- **If-Else Statements**: Checking multiple conditions sequentially (e.g., grading systems checking marks like `>= 90`).
- **Switch Statements**: Handling multiple specific cases cleanly as an alternative to long `if-else` chains (e.g., printing days of the week based on a number 1-7).

### Practice 4: Loops & Basic Algorithms
This section provides extensive practice on repeating actions using loops and foundational logic building.
- **Loops**: Basic syntax and usage of `for` loops and `while` loops.
- **Algorithms & Logic Building**: 
  - Finding Even/Odd numbers within a range.
  - Multiples and Divisibility checks (e.g., checking if a number is divisible by both 3 and 5).
  - Mathematical operations like reversing numbers using modulo (`%`) and division (`/`).
  - Generating sequences such as the Fibonacci sequence.
  - Finding the Greatest Common Divisor (GCD) of two numbers.

### Practice 5: Functions
This section explores the concept of encapsulating code into reusable blocks.
- **Function Basics**: Standard Function Declarations vs Function Expressions.
- **Passing Functions**: Treating functions as first-class citizens by passing them as arguments to other functions.
- **Higher-Order Functions (HOF)**: Functions that return other functions (e.g., a Discount Calculator that configures a specific discount percentage).
- **Closures**: Creating private state. Functions retaining access to variables from their outer (lexical) scope even after the outer function has finished executing (e.g., custom Counters).
- **IIFE**: Immediately Invoked Function Expressions (`(function(){})()`) to run code immediately and protect the global namespace.

### Practice 6: Arrays and Array Methods
This section details how to work with lists of data using Arrays, moving from basic mutators to functional programming concepts.
- **Array Basics**: Creating arrays, accessing elements via index, and modifying values.
- **Basic Array Methods**: Manipulating array ends (`push`, `pop`, `unshift`, `shift`), adding/removing anywhere (`splice`), extracting portions (`slice`), and rearranging (`sort`, `reverse`).
- **Iteration Methods**: Looping through elements cleanly using `forEach`, transforming data with `map`, filtering with `filter`, aggregating data with `reduce`, and searching with `find`, `some`, `every`.
- **Advanced Array Concepts**: 
  - **Destructuring**: Unpacking array elements into distinct variables (`let [a, b] = arr`).
  - **Spread Operator**: Expanding array elements into a new array (`[...arr]`) for easy copying.

### Practice 7: Objects
This section focuses on key-value pairs and complex data structures using Objects.
- **Object Basics**: Creating objects, accessing values using dot notation (`obj.key`) vs bracket notation (`obj["key"]`).
- **Advanced Object Properties**: Using computed properties dynamically and accessing deeply nested object values.
- **Object Destructuring**: Extracting specific values into variables efficiently (`let { name } = obj`).
- **Looping through Objects**: Using the `for-in` loop, and transforming objects into arrays using `Object.keys()` and `Object.entries()`.
- **Copying Objects**: Differentiating between shallow copies (Spread operator, `Object.assign`) and deep cloning concepts.
- **Optional Chaining**: Safely accessing nested properties without throwing errors if an intermediate property is null or undefined (`obj?.property?.nested`).
