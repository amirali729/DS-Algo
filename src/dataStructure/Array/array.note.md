# Array

### What is it ?

An **Array** is a collection of elements stored in a **continguos memory location**. It is accessed by Index.

### why does it exist?

Before arrays, if you wanted to store multiple values, you'd need separate variables `(x1, x2, x3...)`. That doesn't scale — you can't loop over separate variables, and you can't do compile-time-unknown-size collections. Arrays solved this: one name, indexed access, contiguous memory.

### What problem does it solve?

- Storing ordered, indexed collections of data.
- Enabling O(1) random access to any element — because memory addresses are computable via math, not search.

### Why not use array for everything

Because arrays have a fixed shape in memory: inserting or removing from the middle requires shifting elements. If your workload is "lots of insert/delete in the middle," a linked list or other structure fits better. Arrays win when you need fast random access and mostly append/read.

## Mental model

Analogy: A row of numbered lockers in a hallway.

```
Locker: 0     1     2     3     4
        [10] [25] [37] [8]  [99]
```

Each locker has a fixed size and a fixed position. If I say "give me locker 3," you don't have to search — you walk straight to position 3. That's the essence of O(1) access: the position is computed, not searched for.

## Internal Structure

In memory, an array is a single contiguous block. If an array starts at memory address 1000 and each element takes 4 bytes (say, a 32-bit integer):

```
Index:    0     1     2     3     4
Address: 1000  1004  1008  1012  1016
Value:   [10]  [25]  [37]  [8]   [99]
```

To access `arr[i]`, the CPU computes:

`address = base_address + (i * element_size)`

No searching — pure arithmetic. That's why array access is `O(1)`: it's a formula, not a walk.

### Static and Dynamic arrays:

- A static array (like in C) has a fixed size decided at creation — the compiler reserves exactly that much contiguous memory.

- A dynamic array `(like JavaScript/TypeScript arrays, Python lists, Java's ArrayList)` can grow. Internally, when it runs out of room, it allocates a new, larger block (often ~2x the size), copies all existing elements over, and frees the old block. This is why dynamic arrays have amortized **O(1)** append, but occasionally an **O(n)** resize spike.

## CRUD Operations

**Create** (Insert)

Insert at the end (push):

```
Before: [10, 25, 37, 8]
Push 99
After:  [10, 25, 37, 8, 99]
```

Usually **O(1)** — unless the array needs to resize, in which case it's O(n) for that one operation.

Insert at the beginning (unshift) or middle:

```
Before: [10, 25, 37, 8]
Insert 99 at index 1
Step 1 — shift everything from index 1 onward right by one:
        [10, __, 25, 37, 8]
Step 2 — place 99 at index 1:
        [10, 99, 25, 37, 8]
```

This is **O(n)** — you must shift every element after the insertion point.

**Edge cases:** inserting at index 0 in an empty array, inserting at an out-of-bounds index, inserting into an array that's at max capacity (triggers a resize).

#### Read (Access)

`arr[i]` — direct address computation. O(1), always, regardless of array size.

#### Update

`arr[i] = newValue` — same as read, direct address write. O(1).

#### Delete

#### Delete from the end (pop): O(1) — just decrement the length, no shifting needed.

#### Delete from the middle:

```
Before: [10, 25, 37, 8, 99]
Delete index 1 (25)
Step 1 — remove:
        [10, __, 37, 8, 99]
Step 2 — shift everything after index 1 left by one:
        [10, 37, 8, 99]
```

**O(n)** — every element after the deletion point must shift left.

**Edge cases:** deleting from an empty array, deleting the last element, deleting at an invalid index.

## Time Complexity

| Operation                      | Time          | Why                                        |
| ------------------------------ | ------------- | ------------------------------------------ |
| Access **(arr[i])**            | O(1)          | Direct address computation                 |
| Search (unsorted)              | O(n)          | Must check every element in the worst case |
| Search (sorted, binary search) | O(log n)      | Halve the search space each step           |
| Insert at end                  | O(1)amortized | Occasionally O(n) when resizing            |
| Insert at start/middle         | O(n)          | Must shift subsequent elements             |
| Delete at end                  | O(1)          | No shifting needed                         |
| Delete at start/middle         | O(n)          | Must shift subsequent elements             |

**Why "amortized" for push?** Say a dynamic array doubles in size every time it's full. Most pushes are O(1). Every so often (when full), a push costs O(n) to copy everything into a new, bigger array. If you average that occasional big cost over many pushes, it works out to O(1) per push on average — this is the concept of amortized analysis.

## Advantages

1. O(1) random access — huge for lookup-heavy workloads.
1. Cache-friendly — contiguous memory means fast sequential reads (real-world speed, not just Big-O).

1. Simple, predictable memory layout — easy to reason about.
1. Foundation for other structures — stacks, queues, heaps, hash tables are all often array-backed.

## Disadvantages

1. Expensive insert/delete in the middle or beginning — O(n) due to shifting.
1. Resizing cost — dynamic arrays occasionally pay O(n) to grow.
1. Fixed-size arrays waste or run out of memory — in low-level languages, you must guess capacity upfront.
1. Not ideal for frequent insertions/removals from arbitrary positions - a linked list may fit better there.

## Use Cases

1.  Storing lists of records (users, products, log entries).
1.  Implementing stacks (push/pop at the end).
1.  Implementing queues via circular buffers.
1.  Backing structure for hash tables (buckets), heaps (complete binary tree via array indices), and matrices.
1.  Buffers in networking and file I/O — contiguous memory is what hardware wants.

## TypeScript Implementation (from scratch)

[Code](/src/dataStructure/Array/DynamicArray.ts)
