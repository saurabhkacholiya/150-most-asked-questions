1. Based on the divide-and-conquer paradigm.
2. The array is recursively split into two halves, sorted independently, and then merged.
3. Time Complexity -> O(nlogn).
4. Space Complexity -> Requires O(n) additional space for temporary arrays during merging.

5. Stable: Equal elements retain their original order after sorting.
<!-- 

arr = [
  { value: 4, id: 'a' },
  { value: 1, id: null },
  { value: 3, id: null },
  { value: 4, id: 'b' },
  { value: 2, id: null }
]; 

Stable Algorithm -> [1, 2, 3, 4a, 4b]

-->

```
mergeSort(arr)

    if arr === 1 return arr

    middle = arr / 2
    left = slice arr from index 0 to middle 
    right = slice arr form middle to end

    sortedLeft = mergeSort(left)
    sortedRight = mergeSort(right)

    return merge(sortedLeft,sortedRight)

merge(leftArr, rightArr)
    leftIndex = 0
    rightIndex = 0
    result = []
    
    while(leftIndex < leftArr.length && rightIndex < rightArr.length)
        if(leftArr[leftIndex] < rightArr[rightIndex])
            result.push(leftArr[leftIndex])
            leftIndex++
        else
            result.push(rightArr[rightIndex])
            rightIndex++
    
    append values remaining value from left index to result
    append values remaining value form right index to result

    return result
```

```js

const mergeSort = (arr) => {
    if(arr.length === 1) return arr

    const middle = Math.round(arr.length / 2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)    
}

const merge = (left,right) => {
    const leftIndex = 0
    const rightIndex = 0
    const result = []

    while(leftIndex < left[leftIndex] && rightIndex < right[rightIndex]){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return [...result, left.slice(leftIndex), right.slice(rightIndex)]
}

```
