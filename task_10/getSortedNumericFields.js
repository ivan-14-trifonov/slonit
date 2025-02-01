function getSortedNumericFields(obj) {
    // Создаем массив для хранения названий числовых полей
    const numericFields = [];

    // Проходим по всем ключам объекта
    for (let key in obj) {
        // Проверяем, что значение является числом
        if (typeof obj[key] === 'number') {
            // Добавляем название поля в массив
            numericFields.push(key);
        }
    }

    // Сортируем массив по названиям полей (по убыванию)
    numericFields.sort((a, b) => b.localeCompare(a));

    return numericFields;
}

// Пример использования
const exampleObj = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
};

console.log(getSortedNumericFields(exampleObj)); // Вывод: ['projects', 'likes', 'friends']