A priority queue is a data structure for maintaining a set S of elements, each with an associated value called a key. A max-priority queue supports the following operations:

<!-- S -> array , x -> index, k -> key / value -->
INSERT (S,x) inserts the element x into the set S, which is equivalent to the operation S = S U {x}
MAXIMUM(S) returns the element of S with largest key
EXTRACT-MAX(S) removes and returns the element of S with the largest K
INCREASE-KEY(S,x,k) increases the value of index x with given key I


```
<!-- Returning of heap extract max is O(log n) -->
HEAP-EXTRACT-MAX(A) 
    if A.heapSize < 0
        throw Error "heap underflow
    max = A[0]
    A[0] = A[A.heapSize - 1]
    A.heapSize = A.heapSize - 1
    maxHeapify(A,0)
    return max

HEAP-INCREASE-KEY(A,i,key)
    if(key < A[i])
        error "New key is smaller than current key"
    A[i] = key
    <!-- ----------- parent(i) => i - 1/2  -->
    while i > 0 && A[parent(i)] < A[i]
        swap A[i] with A[parent(i)]
        i = parent(i)

MAX-HEAP-INSERT(A,KEY)
    A.heapSize = A.heapSize + 1
    A[A.heapSize - 1] = -Infinity
    HEAP-INCREASE-KEY(A,A.heapSize,key)

```

<!-- This i will work on later part -->

Potential Knowledge Gaps and Areas for Improvement
Advanced Priority Queue Operations:

Operations like removing arbitrary elements or decreasing a key in a min-heap.
Understanding how a d-ary heap (generalized binary heap) works.
Complex Applications:

Applying heaps to solve real-world problems like job scheduling, interval problems, or streaming data.
Dynamic Median: Using two heaps (min-heap and max-heap) to efficiently calculate the median of a stream of numbers.
Heap Variants:

Familiarize yourself with Fibonacci Heaps or Binomial Heaps, often discussed in advanced algorithms.
Algorithm-Specific Usage:

Using priority queues in Dijkstra's Algorithm and Prim's Algorithm for graphs.
Heap-based solutions for Kth smallest/largest elements or merge K sorted arrays.
Amortized Analysis:

Understanding the amortized time complexity of heap operations in scenarios like bulk insertions or meld operations in Fibonacci Heaps.
Coding Efficiency:

Practice writing heap functions from scratch during timed coding sessions.
Optimize the heap-based solutions for problems like top-K frequent elements or task scheduling with cooling periods.
Alternative Data Structures:

When to use heaps versus alternatives like balanced binary search trees (e.g., AVL or Red-Black Trees).
