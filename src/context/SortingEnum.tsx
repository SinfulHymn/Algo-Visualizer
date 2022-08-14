export const SortingAlgorithms={
    BubbleSort : "Bubble-Sort",
    QuickSort :"Quick-Sort",
    InsertionSort : "Insertion-Sort",
    MergeSort : "Merge-Sort",
    BogoSort : "Bogo-Sort"
}

export const SetSortingAlgorithms = {
    [SortingAlgorithms.BubbleSort]: {
        name: "Bubble Sort",
        description: "Bubble Sort is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
        complexity: "O(n^2)",
    },
    [SortingAlgorithms.QuickSort]: {
        name: "Quick Sort",
        description: "Quick Sort is a divide and conquer algorithm that works by partitioning a list into two sublists and recursively sorting each sublist.",
        complexity: "O(n log n)",
    },
    [SortingAlgorithms.InsertionSort]: {
        name: "Insertion Sort",
        description: "Insertion Sort is a simple sorting algorithm that works by iterating over the list and inserting each element into the correct position.",
        complexity: "O(n^2)",
    },
    [SortingAlgorithms.MergeSort]: {
        name: "Merge Sort",
        description: "Merge Sort is a divide and conquer algorithm that works by splitting a list into two sublists and recursively sorting each sublist.",
        complexity: "O(n log n)",
    },
    [SortingAlgorithms.BogoSort]: {
        name: "Bogo Sort",
        description: "Bogo Sort is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
        complexity: "O(1)",
    }
}