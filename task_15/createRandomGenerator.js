function createRandomGenerator(min, max) {
  // Возвращаем функцию, которая генерирует случайное число
  return function() {
    // Генерация случайного числа в диапазоне [min, max]
    // Диапазон задаём как (max - min + 1), так как floor() округляет вниз
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

// Пример использования
const randomInRange = createRandomGenerator(1, 10);

console.log(randomInRange()); // Случайное число от 1 до 10
console.log(randomInRange()); // Случайное число от 1 до 10
console.log(randomInRange()); // Случайное число от 1 до 10