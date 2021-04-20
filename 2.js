/*

Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.

*/
const newObj = {
    Str1: "Evgeny",
    Str2: "Oldeburg",
};

function search(obj, somestring) {
    if (somestring in obj) {
        return true;
    } else {
        return false;
    }
}

search(newObj, "Str1");
