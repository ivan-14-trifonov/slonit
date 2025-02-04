function isSubstring(str1, str2) {
    // Проверяем, является ли str1 подстрокой str2 или str2 подстрокой str1
    return str1.includes(str2) || str2.includes(str1);
}

// Примеры использования:
console.log(isSubstring("hello", "hello world")); // true, "hello" является подстрокой "hello world"
console.log(isSubstring("hello world", "world")); // true, "world" является подстрокой "hello world"
console.log(isSubstring("foo", "bar")); // false, ни одна строка не является подстрокой другой