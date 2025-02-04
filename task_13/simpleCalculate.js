// Арифметические операции
const operations = {
    multiply: (a, b) => a * b,  // Умножение
    add: (a, b) => a + b,       // Сложение
    divide: (a, b) => a / b,    // Деление
    subtract: (a, b) => a - b,  // Вычитание
};

// Выполнение вычисления
const calculate = (a, b, operation) => {
    // Если указана операция, которой нет в operations
    if (operation === undefined) {
        return undefined;
    }
    else {
        return operation(a, b);
    }
    return operation(a, b);
};

// Пример использования
const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18