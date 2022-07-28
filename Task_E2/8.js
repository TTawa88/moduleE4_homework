/* Задание 8.
    Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
    Используйте шаблонные строки.
*/

let map = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["banana", "yellow"]
]);

map.forEach(function(item, index) {
    console.log(`Ключ — ${index}, значение — ${item}`);
});