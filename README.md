This JavaScript code implements the Insertion Sort algorithm. Let's break it down:

Function insertionSort(arr):
This function takes an array arr as input and sorts it using the Insertion Sort algorithm.
It starts by getting the length of the array n.
Sorting Process:
The algorithm iterates through the array, starting from the second element (index 1) up to the last element.
For each iteration, it considers the current element (arr[i]) as the element to be inserted into the sorted part of the array.
It initializes a variable j to the index of the last element in the sorted part (one element before the current element).
It then checks whether the element at index j (last element in the sorted part) is greater than the current element. If it is, it shifts the element to the right by one position and decrements j to move to the previous element in the sorted part.
This process continues until it finds the correct position for the current element in the sorted part.
Finally, it inserts the current element into the correct position in the sorted part of the array.
Logging the state of the array:
After each iteration of the sorting process, the function logs the current state of the array for demonstration purposes.
Example of Use:
An example array [12, 11, 13, 5, 6] is defined.
The original array is logged to the console.
The insertionSort function is called with the original array.
The sorted array returned by the function is logged to the console.
Output:
The output demonstrates how the array changes after each iteration of the Insertion Sort algorithm until it becomes sorted.
Insertion Sort is an efficient algorithm for sorting small datasets or nearly sorted datasets. It works by repeatedly moving elements one position at a time to their correct position in the sorted part of the array.
