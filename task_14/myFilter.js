// Аналог метода Array.prototype.filter
function myFilter(array, callback) {
  // Создаем новый массив для хранения результатов
  const result = [];
  
  // Проходим по каждому элементу исходного массива
  for (let el of array) {
    // Если результат выполнения колбэка true, добавляем элемент в результат
    if (callback(el)) {
      result.push(el);
    }
  }
  
  // Возвращаем новый массив с отфильтрованными элементами
  return result;
}

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, (num) => num > 3);
console.log(greaterThanThree); // [4, 5]