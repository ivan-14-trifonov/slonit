function sumNumericFields(obj) {
    let sum = 0;

    // Проходим по всем ключам объекта
    for (let key in obj) {
        // Проверяем, что значение является числом
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }

    return sum;
}

// Пример использования
const exampleObj = {
    a: 10,
    b: 20,
    c: "not a number",
    d: 30,
    e: true,
    f: 15.5
};

console.log(sumNumericFields(exampleObj)); // Вывод: 75.5