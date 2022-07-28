/* Задание 4.
    Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
    Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
    Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
какими свойствами он обладает.
*/

function Device(name, power, status) {
    this.name = name;
    this.power = power;
    this.status = status;
}

Device.prototype.checkPower = function () {
    if (this.status == 'on') {
        console.log(`${this.name} включен, потребляемая мощность ${this.power} Вт`);
    }
    else if (this.status == 'off') {
        console.log(`${this.name} выключен, потребляемая мощность 0 Вт`);
    }
}


const laptop = new Device('laptop', 65, 'on')
laptop.checkPower()

const lamp = new Device('lamp', 10, 'off')
lamp.checkPower()