/* Задание 6.
    Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/

let arr = [1, 1, 1, 1];

function sameElements(arr) {
  for (var i = 0; i < arr.length; i++) if (arr[i] !== arr[0]) return false;
  return true;
}

console.log(sameElements(arr));