function insertionSort(arr) {
    console.log(arr);
    console.log('----------');
    for(let i = 1; i < arr.length; i++) {
        const v = arr[i];
        let j = i -1;

        while(j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = v;

        console.log(arr);
    }

    console.log('----------');
    return arr;
}

console.log(insertionSort([5,7,2,1,4,6]));