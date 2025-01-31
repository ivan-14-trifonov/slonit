function myIndexOf(arr, item, from) {
    // Если from не указан, начинаем поиск с начала массива
    if (from === undefined) {
        from = 0;
    }
    // Обработка отрицательного значения from
    if (from < 0) {
        from = Math.max(arr.length + from, 0);
    }
    // Проходим по массиву, начиная с индекса from
    for (let i = from; i < arr.length; i++) {
        // Если элемент найден, возвращаем его индекс
        if (arr[i] === item) {
            return i;
        }
    }
    // Если элемент не найден, возвращаем -1
    return -1;
}

// Пример использования:
const arr = [1, 2, 3, 4, 5, 3];
console.log(myIndexOf(arr, 3));      // 2
console.log(myIndexOf(arr, 3, 3));   // 5
console.log(myIndexOf(arr, 6));      // -1 (элемент не найден)
console.log(myIndexOf(arr, 3, -2));  // 5 (поиск с предпоследнего элемента)