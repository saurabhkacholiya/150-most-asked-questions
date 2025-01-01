- worst case O(N^2) sorting
- quicksort is often the best practical choice for sorting because it is remarkably efficient on the average O(N logN)
- Quicksort is fast in practice due to good cache performance and the fact that its average-case time complexity is O(n log n). It works well for general-purpose sorting but can be slow in the worst case if a poor pivot is chosen.
- To ensure O(n log n) performance, you can use strategies like randomized pivots or median-of-three.

- When we talk about cache efficiency, we're primarily concerned with how well the algorithm makes use of the CPU cache, which is much faster than RAM. The CPU cache stores frequently accessed data to reduce the time it takes to fetch data from the slower main memory (RAM). Algorithms that make good use of this cache can reduce memory access latency, thus speeding up computations.

- Locality of Reference: Quicksort is typically cache-efficient because it works on smaller subarrays at each recursive call (divide and conquer approach). This means that the elements that need to be compared and swapped are likely to be close to each other in memory, benefiting from better cache locality (i.e., when one piece of data is loaded into the cache, nearby pieces are often loaded together).

- Since quicksort tends to work on smaller sections of the array, the data it needs is more likely to be stored in the CPU cache. This means fewer expensive memory accesses to RAM and faster execution.

```
quickSort(arr,leftIndex,rightIndex)
    if(leftIndex < rightIndex)
        const pivotIndex = partition(arr,leftIndex,rightIndex)
        quickSort(arr,leftIndex,pivotIndex - 1)
        quickSort(arr,pivotIndex + 1,rightIndex)

partition(arr,leftIndex, rightIndex)
    const pivotValue = arr[rightIndex]
    let i = leftIndex - 1
    <!-- Why rightIndex - 1 so that we are not comparing pivot value -->
    for j = leftIndex to rightIndex - 1
        if(arr[j] <= pivotValue)
            i++
            Swap i, j
    swap i + 1, j
    return i + 1
```

```js
const arr = [45, 63, 1, 23, 7, 5, 3, 1];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const quickSort = (arr, lIdx, rIdx) => {
  if (lIdx < rIdx) {
    const pivot = partition(arr, lIdx, rIdx);
    quickSort(arr, lIdx, pivot - 1);
    quickSort(arr, pivot + 1, rIdx);
  }
};

const partition = (arr, lIdx, rIdx) => {
  const pivotVal = arr[rIdx];
  let i = lIdx - 1;
  for (let j = lIdx; j < rIdx; j++) {
    if (arr[j] <= pivotVal) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, rIdx);
  return i + 1;
};

quickSort(arr, 0, arr.length - 1);

```
