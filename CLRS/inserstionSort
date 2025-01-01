A = [5,2,4,6,1,3]

- Time complexity O(N^2) 
- Space complexity O(1)


for j = 1 of A.length
key = A[j]
i = j - 1
while(i >= 0 && A[i] > key){
    A[i + 1] = A[i]
    i = i - 1
}
A[i + 1] = key

```js

const arr = [5,2,4,6,1,3]

const fn = (arr) => {
    for(let j = 1; j < arr.length; j++){
        const key = arr[j]
        let i = j - 1
        while(i >= 0 && arr[i] > key){
            arr[i + 1] = arr[i]
            i = i  - 1
        }
        arr[i + 1] = key
    }

    console.log('arr is ', arr)
}

fn(arr)
```
