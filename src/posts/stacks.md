---
title: 'Stacking Up: A Deep Dive into Stacks'
date: '01-02-2024'
author: "Admin"
tags: "Development"
preview: " A Deep Dive into Stacks and Their Real-World Applications"
thumbnail: "https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhY2slMjAlMjBvZiUyMHJvY2tzfGVufDB8fDB8fHww"
---

Stacks are concepts in Data Structures and Algorithms. In this article, I'll explain what they are, different types, how they function and some examples of when to use them.

**Prerequisites:**
- Knowledge of Arrays
- Knowledge of Programming and basic Computer Science
- Knowledge of Big-o-notation

#### **What is a Stack?**

In programming, a stack is an abstract data structure that serves as a collection of elements, such as a stack of books or plates. They follow two main operations:

- **Push:** Adds an element to the top of the stack
- **Pop:** Removes the most recently added element

Stacks are commonly used in algorithms and applications because of their efficient insertion and removal operations. They can be implemented using contiguous memory, like an array, or non-contiguous memory, like a linked list.

Additionally, the order in which an element is added or removed from a stack is known as, Last-in, First-Out or commonly referred to LIFO for short. Going back to our analogy of a stack of plates, it wouldn't be ideal for someone to remove a plate from the middle of a stack, as you would first have to remove all the other plates and then grab one, then add all those plates back. A more intuitive solution would be to simply remove the plate at the top. The plate below the current top plate would now be elevated to the top of the stack.

#### **Applications of stack:**

How exactly are stacks used in real-world software applications? Applications like text editors use stacks to implement undo (pop the last action) and redo (push the reversed action). A more advanced example would be how stacks are used in algorithms like Depth-First Search (DFS) for navigating graphs or solving puzzles like mazes.

#### **Different types of stacks:**

While the general concept of stacks is straightforward, specialized stacks are designed to solve specific problems efficiently. Some of the notable types of stacks include:

**Monotonic Stack**

A specialized stack used to maintain elements in a monotonic order (either non-increasing or non-decreasing).
Commonly used in problems involving finding the next greater or smaller element 

**Leetcode examples of Monotonic stacks:**
- [Next Greater Element I - Problem #496](https://leetcode.com/problems/next-greater-element-i/description/)
- [Daily Temperatures - Problem #739](https://leetcode.com/problems/daily-temperatures/description/)

**Circular Stack**

A stack implemented with a fixed size that wraps around when the end of the storage is reached.
Useful in systems with fixed memory constraints, like embedded systems.

**Leetcode examples of Circular stacks:** 
- [Sliding Window Maximum - Problem #239](https://leetcode.com/problems/sliding-window-maximum/)
- [Defuse the Bomb - Problem #1652](https://leetcode.com/problems/defuse-the-bomb/)

