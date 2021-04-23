/*
    Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
    Реализуйте его на прототипах. Определить иерархию электроприборов. Включить некоторые в 
    розетку. Посчитать потребляемую мощность. Таких приборов должно быть, как минимум, два 
    (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он 
    обладает.

    План:

    Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
    Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
    У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    Создать экземпляры каждого прибора.
    Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

    Общие требования:

    Имена функций, свойств и методов должны быть информативными.
    Соблюдать best practices:

    использование camelCase нотации для переменных и методов, PascalCase для названия 
    функций-конструкторов и классов;
    информативные имена (а не a, b);
    четкая связь между классом и его экземплярами (класс описывает множество, а 
    экземпляр конкретную реализацию);
    использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

*/

function Device(name, plugin) {
    this.name = name,
        this.getOn = function (plugin) {
            if ((this.plugin = plugin)) {
                document.write("Включен потребляемая мощность: ");
            } else {
                document.write("Выключен потребляемая мощность: ");
            }
        }
}

function ElectricalAppliance(name, power, plugin) {
    this.name = name,
        this.power = power,
        this.plugin = plugin,
        this.getPower = function (power, plugin) {
            if (plugin === true) {
                document.write(power / 1000 + "KWh" + "<br>");
            } else {
                document.write(power * 0);
            }
        }
}

ElectricalAppliance.prototype = new Device();
const laptop = new ElectricalAppliance("Lenovo");
laptop.getOn(true);
laptop.getPower(20, true);

const airpods = new ElectricalAppliance("Airpods");
airpods.getOn(false);
airpods.getPower(5, false);
