/*var a = prompt("Enter 1st number: ");
var b = prompt("Enter 2nd number: ");
a = parseInt(a);
b = parseInt(b);

c = a + b;
alert ("Сумма чисел равна: " + c);

c = a - b;
alert ("Разность чисел равна: " + c);

c = a * b;
alert ("Произведение чисел равно: " + c);

c = a / b;
alert ("Частное чисел равно: " + c);

c = (a + b) / 2;
alert ("Среднее арифметическое чисел равно: " + c);*/

/*var baseLength_1 = prompt("Введите длину основания трапеции а: "); //пользователь вводит длину первого основания трапеции
var baseLength_2 = prompt("Введите длину основания трапеции b: "); //пользователь вводит длину второго основания трапеции
var trapezoidHeight = prompt("Введите высоту трапеции h: "); //пользователь вводит высоту трапеции

baseLength_1 = parseInt(baseLength_1); //мы передаем в переменные a, b, h численные значения
baseLength_2 = parseInt(baseLength_2);
trapezoidHeight = parseInt(trapezoidHeight);

var trapezoidArea = trapezoidHeight*(baseLength_1+baseLength_2)/2; //мы задаем компьютеру формулу, по которой он должен посчитать площадь трапеции
alert("Площадь трапеции равна " + trapezoidArea); //вывод значения площади трапеции*/

/*var rouble = prompt("Введите сумму в рублях: "); //сумма в рублях которую вводит пользователь
var dollar = 70.96; //сегодняшний курс доллара

rouble = parseInt(rouble); //передаем численные значения в рубль

var Itog = rouble / dollar; //вычисление количества рублей в долларах
alert("Итого: " + Itog.toFixed(2) + " долларов");

var rouble = prompt("Введите сумму в рублях: ");
var euro = 82.68; //сегодняшний курс евро

var Itog_1 = rouble / euro; //вычисление количества рублей в евро
alert("Итого: " + Itog_1.toFixed(2) + " евро"); */


/*var a = +prompt("Enter 1st number: ")
var b = +prompt("Enter 2nd number: ")

var max = a
if (a > b) {
    max = a
}else if (a == b){
    alert ("The entered numbers are equal to")
}
 else{
    max = b
}
alert(max)*/

/*for (var i = 0; i < 1000; i++){
    document.write("ABOBA </br>")
}*/

var userAnswer = prompt("C чем вкуснее есть котлетки?")
var score = 0
userAnswer.toLowerCase();
if (userAnswer == "с пюрешкой" || userAnswer == "просто так" || userAnswer == "с хлебом"){
    alert ("Вы угадали, ура)")
    score++
}else{
    alert("Вы не угадали")
}
userAnswer = prompt("что видят с закрытыми глазами?")
userAnswer.toLowerCase();
if (userAnswer == "сны" || userAnswer == "сон" || userAnswer == "сновидения"){
    alert ("Вы угадали, ура)")
    score++
}else{
    alert("Вы не угадали")
    
}
userAnswer = prompt("что бьют лентяи?")
userAnswer.toLowerCase();
if (userAnswer == "баклуши" || userAnswer == "груши"){
    alert ("Вы угадали, ура)")
    score++
}else{
    alert("Вы не угадали")
    
}
var HighScore = score
if (score == 3){
    alert("Ваше количество баллов: " + score + ". Поздравляю, вы выиграли")
}else if (score == 1 || score == 2){
    alert("Ваше количество баллов: " + score + 
   ". Вы играли хорошо, но можете еще лучше. Обновите страницу и попробуйте еще раз.")
}
else{
    alert("К сожалению, вы не набрали ни одного балла и проиграли. Обновите страницу и попробуйте еще раз.")
}

