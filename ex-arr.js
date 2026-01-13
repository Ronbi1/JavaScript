const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// array.splice(index, number of element to delete, element to add);
numbers.splice(1, 2);
numbers[3] = 1;
numbers.splice(numbers.length - 4);
numbers.splice(0, 0, 0);

console.log(numbers);