/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

const randomNumber = [];
const arrayLength = 5;
const requiredValue = 3;

for (let i = 0; i < arrayLength; i++) {
    randomNumber[i] = Math.round((Math.random() * 9.4));
}

console.log(`Массив: ${randomNumber}`);
console.log(`Сумма элементов массива: ${CalculateSumOfElementsOfArray(randomNumber)}`);
console.log(`Минимальное значение: ${GetMinValueOfArrayElements(randomNumber)}`);
DoesTheRequiredValueExist(randomNumber, requiredValue);

function CalculateSumOfElementsOfArray(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum = sum + inputArray[i];
    }
    return sum;
}

function GetMinValueOfArrayElements(inputArray) {
    let min = inputArray[0];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < min) { min = inputArray[i] };
    }
    return min;
}

function DoesTheRequiredValueExist(inputArray, Value) {
    let doesValueExist = false;
    for (let i = 0; i < inputArray.length; i++) {
        doesValueExist = inputArray[i] === Value;
        if (doesValueExist === true) { break; }
    }
    (doesValueExist === true) ? console.log(`Число ${Value} в массиве есть`) : console.log(`Числа ${Value} в массиве нет`);
}



