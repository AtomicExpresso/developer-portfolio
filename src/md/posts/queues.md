---
title: 'Queues'
date: '02-16-2023'
author: "Admin"
tags: "Computer Science"
preview: "Implementation of queues explained"
thumbnail: "https://www.researchgate.net/publication/361873108/figure/fig3/AS:1182492224688130@1658939524537/Schematic-diagram-of-the-queue-memory-operation-FIFO-principle-A-new-element-added-to.png"
---

In Computer Science, a queue is a data structure used for storing and managing data in a specific order. It follows the order of First in, First out (FIFO); the first element to be added to the queue will be the first element to be removed from the queue. Queues are commonly used in algorithms involving sorting data. For example, an ecommerce store would probably use a queue to handle orders, where each order is shipped according to when it was received.

![ResearchGate](https://www.researchgate.net/publication/361873108/figure/fig3/AS:1182492224688130@1658939524537/Schematic-diagram-of-the-queue-memory-operation-FIFO-principle-A-new-element-added-to.png)

### **Basic Operations on Queue:**
- **enqueue()**: Add elements to the end of the queue
- **dequeue()**: Remove elements at the front of the queue

### **Complexity analysis:**
Queues are a linear data structure, so insertion and removal should run at linear run time.

- **Time Complexity:** O(1)
- **Space Complexity:** O(N)


### **Real world example:**
Suppose you run a ticket booth at a movie theater. Each person in the queue can only buy one ticket at a time, then they return to the end of the queue. This process continues until everyone in the queue has bought their desired number of tickets, and the queue is empty.

**Solution 1 - O(T)**: where T is the number of tickets needed to buy
```python
from collections import deque


def TicketQueue(queue):
	queue = deque(queue)
	while queue:
    	queue[0] -= 1  # The person at the front buys a ticket
    	if queue[0] == 0:
        	queue.popleft()  # Remove the person if they are done
    	else:
        	queue.append(queue.popleft())  # Move the person to the back

```
I implemented an efficient solution using Python's collections module. I started by creating a deque instance to represent the queue. Then, I used a while loop to continuously process the queue.

Within the loop, I subtracted 1 from the person at the front of the queue to represent them buying a ticket. I then checked, using an if statement, whether they had reached their desired number of tickets. If so, I removed them from the queue. Otherwise, I moved them to the back of the queue. This process continues until the queue is empty.

Using deque ensures that both removing from the front and adding to the back of the queue are efficient operations, making this implementation optimal.

Alternatively, if you don't want to use the collections module. You could also use a O(N*T) solution (where N, is the number of people and T is the number of tickets needed to buy). However this will be a less efficient solution.

**Solution 2 - O(N*T)**
```python
def TicketQueue(queue):
	while queue:  # Continue until the queue is empty
    	queue[0] -= 1  # The person at the front buys a ticket
   	 
    	if queue[0] == 0:
        	# If the person has bought all their tickets, remove them from the queue
        	queue.pop(0)
    	else:
        	# Move the person at the front to the back
        	queue.append(queue.pop(0))
```
This solution follows a similar approach to the previous one but does not rely on any external modules or libraries. Instead, it operates directly on a standard Python list. However, this comes at the cost of being less efficient in both time and space complexity. Specifically, operations like removing the front of the queue (```pop(0)```) and appending to the end increase the time complexity due to the underlying implementation of lists in Python.

### **LeetCode Problems:**

- [1700. Number of Students Unable to Eat Lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/?envType=problem-list-v2&envId=queue)
- [2073. Time Needed to Buy Tickets](https://leetcode.com/problems/time-needed-to-buy-tickets/description/?envType=problem-list-v2&envId=queue)

### **Sources Cited:**
ResearchGate, Sakowski, Sebastian & Waldmajer, Jacek & Majsterek, Ireneusz & Poplawski, Tomasz. (2022). DNA Computing: Concepts for Medical Applications. Applied Sciences. 12. 6928. 10.3390/app12146928.
