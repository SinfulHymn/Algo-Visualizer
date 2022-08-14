function bubbleSort(numbers: number[]) {
    console.log(numbers);
    for (var i = 0; i < numbers.length; i++) {
        console.log('first loop i', i, 'array', numbers);
        for (var j = 0; j < numbers.length - 1; j++) {
            console.log('second loop j', j, 'array', numbers);
            console.log(`array[${j}]>array[${j+1}]: `, `${numbers[j]} > ${numbers[j+1]}`, numbers[j] > numbers[j+1]);
            if (numbers[j] > numbers[j + 1]) {
                console.log('swapping', numbers[j], 'and', numbers[j + 1]);
                [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]]
            }
        }
    }
    return numbers
}


bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

export default bubbleSort;