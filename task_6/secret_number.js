let low = 1;     // Нижняя граница диапазона
let high = 100;  // Верхняя граница диапазона
let guess;       // Текущее предположение

// Первый компьютер загадывает число от low до high
const targetNumber = Math.floor(Math.random() * high) + low;
console.log(`Компьютер 1 загадал число: ${targetNumber}.\n`);

while (true) {

    // Вычисляем среднее значение текущего диапазона
    guess = Math.floor((low + high) / 2);
    console.log(`Компьютер 2: Пробую число ${guess}.`);

    // Проверка результата
    if (guess === targetNumber) {
        console.log('Компьютер 1: Угадал!');
        break;
    } 

    // Выводим подсказку и обновляем диапазон
    else if (guess < targetNumber) {
        console.log('Компьютер 1: Больше.\n');
        low = guess + 1;
    } 
    else {
        console.log('Компьютер 1: Меньше.\n');
        high = guess - 1;
    }
}