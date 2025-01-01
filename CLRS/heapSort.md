1. Binary Heap data structure
2. Heap data structure useful for heapsort, but it also makes an efficient priority queue
3. Why Start Heapifying from (n/2) - 1 ?  The index of the last non-leaf node in a binary heap.
4. TC 
Building the heap: O(n)
Sorting phase: 𝑂(𝑛 log 𝑛)
5. SC -> O(1) in place sorting is done
6. The HEAPSORT procedure takes time O.n lg n, since the call to BUILD-MAX- HEAP takes time O(n) and each of the n - 1 calls to MAX-HEAPIFY takes time O(log n) 
7. MAX-HEAPIFY takes time O(log n) on each node there are only 2 option to left or right or current index value in the array is greater so that why O(log n) time. 

```
buildHeapSort(A)
   buildMaxHeap(A)
   for i = A.length down to 0
    swap A[0] with A[i]
    A.heapSize = A.heapSize - 1 // or pass 3rd variable with maxHeap length and every time reduce it.
    maxHeapify(A,0) // as we have swaped we need to verify the correctness of max-heap value so we are doing maxHeapify on swaped value



builMaxdHeap(A)
    for i = (A.length / 2) - 1 to 0
    maxHeapify(A,i)


maxHeapify(A,i)
    l = Left(i) -> 2 * i + 1
    r = Right(i) -> 2 * i + 2
    largest = i

    if(l < A.length && A[l] > A[i])
        largest = l

    if(r < A.length && A[r] > A[largest])
        largest = r

    if(largest !== i)
        swap value of A[i] with largest
        maxHeapify(A,largest)
```

```js

const log = console.log
function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

const heapify = (arr,i) => {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let largest = i

    if(left < arr.heapSize && arr[left] > arr[i]){
        largest = left
    }

    if(right < arr.heapSize && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i){
        swap(i,largest,arr)
        heapify(arr,largest)
    }
    
}

const heapSort = (arr) => {
    arr.heapSize = arr.length
    for(let i = Math.round(arr.length/2) - 1; i >= 0;i--){
        heapify(arr,i)
    }


    for (let i = arr.length - 1; i > 0; i--) {
        swap(0, i, arr);
        arr.heapSize = arr.heapSize - 1
        heapify(arr, 0);
    }
    log('arr is ', arr)
}


heapSort([8, 10, 9, 150,5, 6, 3])


```
