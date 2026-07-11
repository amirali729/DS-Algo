# Arrays

Welcome to the **Array** section of this repository.

This folder is dedicated to understanding arrays from the ground up by implementing our own dynamic array instead of relying on JavaScript's built-in `Array`. The goal is to understand **how arrays actually work internally**, not just how to use them.

---

## 🎯 Objectives

By the end of this section, you should understand:

- What an array is
- How arrays are stored in memory
- Fixed-size vs Dynamic arrays
- Indexing and why it is **O(1)**
- Why inserting or deleting elements can be expensive
- How resizing works
- Time complexity of common operations
- How JavaScript arrays differ from low-level arrays
- How to build your own dynamic array from scratch

---

## 📚 Learning Resources

### 📝 Notes

Detailed explanations, theory and concepts can be found here:

- [`array.note.md`](./array.note.md)

Read the notes first before diving into the implementation.

---

## 💻 Implementation

The complete custom implementation is located here:

- [`MyArray.ts`](./MyArray.ts)

This file contains the actual implementation of our custom array along with comments explaining how each operation works.

---

## 🧪 Examples

Examples of using the custom array can be found in the example file (if available).

Example:

```ts
const numbers = new MyArray<number>();

numbers.push(10);
numbers.push(20);
numbers.push(30);

console.log(numbers.get(1)); // 20

numbers.remove(0);

console.log(numbers.toArray());
```

The purpose of the examples is to verify that the implementation behaves correctly and to demonstrate how each method is used.

---

## 📂 Folder Structure

```
array/
│
├── MyArray.ts        # Custom implementation
├── array.note.md     # Theory and notes
├── README.md         # Documentation
└── examples.ts       # Usage examples (optional)
```

---

## 🚀 Features to Implement

Throughout this section, we will gradually implement features such as:

- Constructor
- Push
- Pop
- Insert
- Remove
- Get
- Set
- Clear
- Resize
- Search
- Contains
- Index Of
- Reverse
- Iterator Support
- Convert to Native Array

Each feature will be implemented manually to understand the underlying logic.

## 🧠 What You'll Learn

This section focuses on understanding:

- Memory layout
- References
- Dynamic resizing
- Capacity management
- Performance trade-offs
- Algorithmic thinking
- Clean TypeScript implementation

Instead of memorizing operations, you'll learn _why_ they behave the way they do.

---

## 📖 Recommended Learning Order

1. Read `array.note.md`
2. Study the implementation in `MyArray.ts`
3. Run the examples
4. Experiment by modifying the implementation
5. Analyze the time complexity of each operation

---

## 🎯 Goal

The goal is not just to build an array.

The goal is to understand the design decisions behind one of the most fundamental data structures in computer science. This understanding will make it easier to learn more advanced data structures such as stacks, queues, hash tables, trees, heaps, and graphs.

Every future data structure in this repository will build upon the concepts introduced here.
