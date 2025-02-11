function createLogger() {
  // Массив для хранения сообщений, доступный только внутри замыкания
  const messages = [];

  // Возвращаем объект с методами
  return {
    // Метод для добавления сообщения в массив
    log(message) {
      messages.push(message);
    },

    // Метод для получения всех сообщений
    getLogs() {
      return messages;
    },
  };
}

// Пример использования
const logger = createLogger();

logger.log("Первое сообщение");
logger.log("Второе сообщение");

console.log(logger.getLogs()); // ["Первое сообщение", "Второе сообщение"]