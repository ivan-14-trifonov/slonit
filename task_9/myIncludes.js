function myIncludes(arr, item, from) {
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
        // Если элемент найден, возвращаем true
        if (arr[i] === item) {
            return true;
        }
    }
    // Если элемент не найден, возвращаем false
    return false;
}

// Пример использования:
const arr = [1, 2, 3, 4, 5, 3];
console.log(myIncludes(arr, 3));      // true
console.log(myIncludes(arr, 3, 3));   // true
console.log(myIncludes(arr, 6));      // false (элемент не найден)
console.log(myIncludes(arr, 3, -2));  // true (поиск с предпоследнего элемента)