/* Задание 3.
    Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

let string = "Hello";

string = string.split('');
string = string.reverse();
string = string.join('');
console.log(string);