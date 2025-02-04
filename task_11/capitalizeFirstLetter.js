function capitalizeFirstLetter(input) {
    if (!input || typeof input !== 'string') {
        return input; // Возвращаем исходное значение, если оно не является строкой
    }
    return input[0].toUpperCase() + input.slice(1);
}

// Пример использования:
const userInput = "пример строки";
const correctedInput = capitalizeFirstLetter(userInput);
console.log(correctedInput); // Вывод: "Пример строки"