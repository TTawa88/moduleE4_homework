/* Задание 5.
    Переписать консольное приложение из предыдущего юнита на классы.
*/

class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}

class DeviceReport extends Device {
	constructor(status, name, power) {
		super(name, power);
		this.status = status;
	}
	checkPower() {
		if (this.status == 'on') {
			console.log(`${this.name} включен, потребляемая мощность ${this.power} Вт`);
		}
		else if (this.status == 'off') {
			console.log(`${this.name} выключен, потребляемая мощность 0 Вт`);
		}
	}
}


const laptop = new DeviceReport('on', 'laptop', 65)
laptop.checkPower()

const lamp = new DeviceReport('off', 'Lamp', 10)
lamp.checkPower()