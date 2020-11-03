//Завдання 1---------------------------------------------------------------------------
// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123,
//     3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
let str1 = 'hello';
let str2 =  ' owu';
let str3 = ' com';
let str4 = ' ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;

console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);
alert(str1 + str2 + str3 + str4 + num1 + num2 + num3 + num4 + num5 + num6 + num7 + bool1 + bool2);
document.write(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);


//Завдання 2---------------------------------------------------------------------------
// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log ,
// alert, document.write
str1 = 'Hi';
str2 =  ' Okten';
str3 = ' Web';
str4 = ' school';
num1 = 3;
num2 = 17;
num3 = -475;
num4 = 342;
num5 = 5.23;
num6 = 7.45;
num7 = 27;
bool1 = false;
bool2 = true;

console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);
alert(str1 + str2 + str3 + str4 + num1 + num2 + num3 + num4 + num5 + num6 + num7 + bool1 + bool2);
document.write(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);


//Завдання 3---------------------------------------------------------------------------
// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const numConst1 = 1;
const numConst2 = 2;
const numConst3 = 3;
const strConst1 = ' I';
const strConst2 = ' like';
const strConst3 = ' turtles';

console.log(numConst1, numConst2, numConst3, strConst1, strConst2, strConst3);
alert(numConst1 + numConst2 + numConst3 + strConst1 + strConst2 + strConst3);
document.write(numConst1, numConst2, numConst3, strConst1, strConst2, strConst3)


//Завдання 4---------------------------------------------------------------------------
// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать
// разные переменные. Вывести каждую при помощи console.log , alert, document.write

let lastName = prompt("Enter your last name: ");
let firstName = prompt("Enter your first name: ");
let middleName = prompt("Enter your middle name: ");

console.log( lastName + " " + firstName + " " + middleName);
alert("You are: " + lastName + " " + firstName + " " + middleName);
document.write("<h3>You are: </h3>" + lastName + " " + firstName + " " + middleName);


//Завдання 5---------------------------------------------------------------------------
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = lastName + " " + firstName + " " + middleName;
console.log("Person is: " + person);
alert("Person is: " + lastName + " " + firstName + " " + middleName);
document.write("<h3>Person is: </h3>" + lastName + " " + firstName + " " + middleName);

//Завдання 6---------------------------------------------------------------------------
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let lastNameMother = prompt("Enter your mother`s last name: ");
let firstNameMother = prompt("Enter your mother`s first name: ");
let middleNameMother = prompt("Enter your mother`s middle name: ");

let personMother = lastNameMother + " " + firstNameMother + " " + middleNameMother;
console.log("Mother`s name is: " + personMother);
alert("Your mother`s name is: " + personMother);
document.write("<h3>Mother`s name is: </h3>" + personMother);

let lastNameFather = prompt("Enter your father`s last name: ");
let firstNameFather = prompt("Enter your father`s first name: ");
let middleNameFather = prompt("Enter your father`s middle name: ");

let personFather = lastNameFather + " " + firstNameFather + " " + middleNameFather;
console.log("Father`s name is: " + personFather);
alert("Your father`s name is: " + personFather);
document.write("<h3>Father`s name is: </h3>" + personFather);

let lastNameBrother = prompt("Enter your brother`s last name: ");
let firstNameBrother = prompt("Enter your brother`s first name: ");
let middleNameBrother = prompt("Enter your brother`s middle name: ");

let personBrother = lastNameBrother + " " + firstNameBrother + " " + middleNameBrother;
console.log("Brother`s name is: " + personBrother);
alert("Your brother`s name is: " + personBrother);
document.write("<h3>Brother`s name is: </h3>" + personBrother);

//Завдання 7---------------------------------------------------------------------------
// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let task7Number1 = +prompt('Завдання 7: Enter first number: ');
let task7Number2 = +prompt('Завдання 7: Enter second number: ');
let task7Number3 = +prompt('Завдання 7: Enter third number: ');

console.log("First number is: " + task7Number1 + ". " + "Second number is: " + task7Number2 + ". " +
    "Third number is: " + task7Number3 + ". ");


//Завдання 8---------------------------------------------------------------------------
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let task8Number1 = parseInt(prompt("Завдання 8: First number is: "));
let task8Number2 = parseInt(prompt("Завдання 8: Second number is: "));
let task8Number3 = parseInt(prompt("Завдання 8: Third number is: "));
let task8Number4 = parseInt(prompt("Завдання 8: Forth number is: "));

let task8Result = task8Number1 + task8Number2 + task8Number3 + task8Number4;

console.log("Your result is: " + task8Result);


//Завдання 9---------------------------------------------------------------------------
// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let task9Number1 = parseFloat(prompt("Завдання 9: First floating point number is: "));
let task9Number2 = parseFloat(prompt("Завдання 9: Second floating point number is: "));
let task9Number3 = parseFloat(prompt("Завдання 9: Third floating point number is: "));

let task9Result = task9Number1 + task9Number2 + task9Number3;

console.log("Your result is: " + task9Result);


//Завдання 10---------------------------------------------------------------------------
// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let task10Number1 = parseFloat(prompt("Завдання 10: First floating point number is: "));
let task10Number2 = parseFloat(prompt("Завдання 10: Second floating point number is: "));
let task10Number3 = parseFloat(prompt("Завдання 10: Third floating point number is: "));

let task10Result = task10Number1 + task10Number2 + task10Number3;

console.log("Your result is: " + Math.round(task10Result));


//Завдання 11---------------------------------------------------------------------------
// при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут
// возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в
// степень второго числа.

let task11Number1 = parseInt(prompt("Завдання 11: Base number is: "));
let task11Number2 = parseInt(prompt("Завдання 11: Exponent number is: "));

console.log("Result: " + Math.pow( task11Number1, task11Number2 ));


//Завдання 12---------------------------------------------------------------------------
// При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
// let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log("Data type of " + a + " is: " + typeof a);
console.log("Data type of " + b + " is: " + typeof b);
console.log("Data type of " + c + " is: " + typeof c);
console.log("Data type of " + d + " is: " + typeof d);


//Завдання 13---------------------------------------------------------------------------
// Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
let task13Case1 = 5 < 6;          //-> true
let task13Case2 = 5 > 6;          //-> false
let task13Case3 = 5 >= 6;         //-> false
let task13Case4 = 5 == 6;         //-> false
let task13Case5 = 10 == 10;       //-> true
let task13Case6 = 10 >= 10;       //-> true
let task13Case7 = 10 < 10;        //-> false
let task13Case8 = 10 > 10;        //-> false
let task13Case9 = 10 != 10;       //-> false
let task13Case10 = 123 === '123'; //-> false
let task13Case11 = 123 == '123';  //-> true

console.log(task13Case1);
console.log(task13Case2);
console.log(task13Case3);
console.log(task13Case4);
console.log(task13Case5);
console.log(task13Case6);
console.log(task13Case7);
console.log(task13Case8);
console.log(task13Case9);
console.log(task13Case10);
console.log(task13Case11);











