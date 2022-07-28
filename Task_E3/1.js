/* Задание 1.
    Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой
элемент, то он учитывается и выводится отдельно.
    При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки,
null и так далее.
    Оформите решение в виде функции.
*/

let arr = [1, 2, 's', '4', 3, '/', 0, null, '26', '0', '+'];
let sumEven = 0;
let sumOdd = 0;
let sumZero = 0;
let sumNull = 0;
let sumSymbol = 0;

function checkElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      sumNull++;
    } else {
      arr[i] = +arr[i];
      if (arr[i] % 2 === 0 && arr[i] !== 0) {
        sumEven++;
      } else if (arr[i] % 2) {
        sumOdd++;
      } else if (arr[i] === 0) {
        sumZero++;
      } else {
        sumSymbol++;
      }
    }
  }
console.log(`
Количество четных элементов: ${sumEven},
Количество нечетных элементов: ${sumOdd},
Количество нулей: ${sumZero},
Количество null: ${sumNull},
Количество знаков: ${sumSymbol}.
`)
}

checkElement(arr);