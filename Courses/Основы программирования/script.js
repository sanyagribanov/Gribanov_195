alert ("Hello, World!");

var name = prompt("Enter your name: ");
alert ("Hello" + name);

var a = prompt("Enter 1st number: ");
var b = prompt("Enter 2nd number: ");
a = parseInt(a); //компьютер видит, что пользователь вводит числа и будет выполнять действие именно с ними
b = parseInt(b);

c = a + b; //сумма
alert ("Сумма чисел равна: " + c);

c = a - b; //разность
alert ("Разность чисел равна: " + c);

c = a * b; //произведение
alert ("Произведение чисел равно: " + c);

c = a / b; //частное
alert ("Частное чисел равно: " + c);

c = (a + b) / 2; //среднее арифметическое
alert ("Среднее арифметическое чисел равно: " + c);
