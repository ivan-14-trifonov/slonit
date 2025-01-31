function mySlice(arr, start, end) {
    // Если start не указан, начинаем с начала массива
    if (start === undefined) {
        start = 0;
    }
    // Если end не указан, идем до конца массива
    if (end === undefined) {
        end = arr.length;
    }
    // Обработка отрицательных индексов
    if (start < 0) {
        start = Math.max(arr.length + start, 0);
    }
    if (end < 0) {
        end = Math.max(arr.length + end, 0);
    }
    // Создаем новый массив для результата
    const result = [];
    // Проходим по элементам массива от start до end
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

// Пример использования:
const arr = [1, 2, 3, 4, 5];
console.log(mySlice(arr, 1, 3));   // [2, 3]
console.log(mySlice(arr, 2));      // [3, 4, 5]
console.log(mySlice(arr, -2));     // [4, 5]
console.log(mySlice(arr, -3, -1)); // [3, 4]
console.log(mySlice(arr, 3, 1));   // []
console.log(mySlice(arr, -2, 1));  // [], равносильно mySlice(arr, 3, 1)