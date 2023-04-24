/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

const inputArray = [1, 2, 3, 4, 5, 6, 7];
const outputArray = inputArray.slice();
const arrayOfDeletedElements = outputArray.splice(3,2);

console.log(`Исходный массив: ${inputArray}`);
console.log(`Выходной массив: ${outputArray}`);
