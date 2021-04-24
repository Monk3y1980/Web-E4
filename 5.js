<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        /*
        Переписать консольное приложение из предыдущего юнита на классы.
        Общие требования:

        Имена классов, свойств и методов должны быть информативными.
        Соблюдать best practices
        Использовать синтаксис ES6.
        */
        class Device {
            constructor(name, plugin) {
                this.name = name
            }
            getOn(plugin) {
                if (this.plugin = plugin) {
                    document.write("Включен потребляемая мощность: ");
                } else {
                    document.write("Выключен потребляемая мощность: ");
                }
            }
        }

        class ElectricalAppliance extends Device {
            constructor(name, plugin, power){
                super(getOn, name, plugin);
            }
            getPower(power, plugin) {
            if (plugin === true) {
                document.write(power / 1000 + "KWh" + "<br>");
                return super.getOn();
            } else {
                document.write(power * 0);
                return super.getOn();
            }
        }
    </script>
</body>

</html>