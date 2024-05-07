function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i]; // Current element to be inserted
        let j = i - 1; // Index of the last element in the sorted part of the array

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift the element to the right
            j--; // Move to the previous element
        }
        
        // Insert the current element into the correct position
        arr[j + 1] = current;
        
        // Log the current state of the array after each iteration for demonstration
        console.log(`Array after iteration ${i}: ${arr}`);
    }

    return arr;
}

// Example of use:
const array = [12, 11, 13, 5, 6];
console.log("Original Array: ", array);
const sortedArray = insertionSort(array);
console.log("Sorted Array: ", sortedArray);
