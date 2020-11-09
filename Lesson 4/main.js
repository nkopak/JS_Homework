//Task1--------------------------------------------------------------------------------------
// console.log("Task1--------------------------");
// - створити функцію яка виводить масив
// const array = [1,2,'three', false];
// let newArr = function (arr){
//     console.log(arr);
// }
// newArr(array);


// //Task2--------------------------------------------------------------------------------------
// console.log("Task2--------------------------");
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let randomArray = [4,1,234,7,967,472,564,981,27,55];
// let newRandomArray = [];
//
// let randomNum = function () {
//     for (const elem of randomArray) {
//         newRandomArray.push(elem);
//     }
// }
// randomNum();
//
// // let randomNum = function () {
// //     for (let i = 0; i < 10; i++) {
// //         let randomNumber = Math.floor(Math.random() * 100);
// //         randomArray.push(newRandomArray);
// //     }
// // }
// // randomNum();
//
// let newArr = function (array){
//     console.log(array);
// }
// newArr(newRandomArray);


// //Task3--------------------------------------------------------------------------------------
// console.log("Task3--------------------------");
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// let minNum = function (num1, num2, num3){
//     let minimalNumber = num1;
//     if(num2 < minimalNumber) {
//         minimalNumber = num2;
//     }
//     if(num3 < minimalNumber){
//         minimalNumber = num3;
//     }
//     console.log(minimalNumber);
//     return minimalNumber;
// }
// console.log(minNum(-20, 54, 5));;


// //Task4--------------------------------------------------------------------------------------
// console.log("Task4--------------------------");
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// let maxNumber = function (num1, num2, num3){
//     let maximumNumber = num1;
//     if(num2 > maximumNumber){
//         maximumNumber = num2;
//     }
//     if(num3 > maximumNumber){
//         maximumNumber = num3;
//     }
//     console.log(maximumNumber);
//     return maximumNumber;
// }
// console.log(maxNumber(-54, -20, 5));;




// //Task5--------------------------------------------------------------------------------------
// console.log("Task5--------------------------");
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minMaxNumbers(){
//     let maxNumber = arguments[0];
//     let minNumber = arguments[0];
//
//     for (const num of arguments) {
//         if(num > maxNumber){
//             maxNumber = num;
//         }
//     }
//     for (const num of arguments) {
//         if(num < minNumber){
//             minNumber = num;
//         }
//     }
//     console.log(`Maximum number is ${maxNumber}`);
//     console.log(`Minimum number is ${minNumber}`);
// }
// minMaxNumbers(0,-8,54,12,342,-25,2);


// //Task6--------------------------------------------------------------------------------------
// console.log("Task6--------------------------");
// - створити функцію яка повертає найбільше число з масиву
// const array = [4,-2,15,87,-37,-4,451,251];
//
// function biggestNum(arr){
//     let biggestNum = arr[0];
//     for (const elem of arr) {
//         if(elem > biggestNum){
//             biggestNum = elem;
//         }
//     }
//     return biggestNum
// }
// console.log(biggestNum(array));


// //Task6--------------------------------------------------------------------------------------
// console.log("Task6--------------------------");
// - створити функцію яка повертає найменьше число з масиву
// const array = [4,-2,15,87,-37,-4,451,251];
//
// function smallestNum(arr){
//     let smallestNum = arr[0];
//     for (const elem of arr) {
//         if(elem < smallestNum){
//             smallestNum = elem;
//         }
//     }
//     return smallestNum;
// }
// console.log(smallestNum(array));


// //Task7--------------------------------------------------------------------------------------
// console.log("Task7--------------------------");
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function numOfArray(arr){
//     let sum = 0;
//     for (const elem of arr) {
//         sum = sum + elem;
//     }
//     return sum;
// }
// console.log(numOfArray([2, 4, 3, 1,-24]));


// //Task8--------------------------------------------------------------------------------------
// console.log("Task8--------------------------");
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arithmeticMean(arr){
//     let sum = 0;
//
//     for (const elem of arr) {
//         sum = sum + elem;
//         // console.log(sum);
//     }
//     const average = sum / arr.length;
//     return average;
// }
//
// console.log(arithmeticMean([2, 5, 7, 32, 18, 2846, 9]));;


// //Task8--------------------------------------------------------------------------------------
// console.log("Task8--------------------------");
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// const objArray = [
//     {name: 'Varun', pet: false},
//     {name: 'Palka', pet: 'dog'},
//     {name: 'Volupta', pet: 'cat'}
// ];
//
// function objNum(arr){
//     let objNum = 0;
//     for (const elem of arr) {
//         if(typeof elem === "object"){
//             objNum++;
//         }
//     }
//     return objNum;
// }
// console.log(objNum(objArray));


// //Task9--------------------------------------------------------------------------------------
// console.log("Task9--------------------------");
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// const objArray = [
//     {name: 'Varun', pet: false},
//     {name: 'Palka', pet: 'dog'},
//     {name: 'Volupta', pet: 'cat'},
//     {name: 'Varun', pet: false},
//     {name: 'Palka', pet: 'dog'},
//     {name: 'Volupta', pet: 'cat', car: 'skoda'}
// ];
//
// function objFields(arr){
//     let objFields = 0;
//     for (const elem of arr) {
//         for (const key in elem) {
//             objFields++;
//         }
//     }
//     return objFields;
// }
// console.log(objFields(objArray));


//Task10--------------------------------------------------------------------------------------
// console.log("Task10--------------------------");
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let array1 = [1,2,3,4];
// let array2 = [2,3,4,5];
//
// function sum(arr1,arr2){
//     let arrResult = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(i===j){
//                 sum = arr1[i] + arr2[j];
//                 arrResult.push(sum);
//             }
//         }
//     }
//     return arrResult;
// }
// console.log(sum(array1, array2));;



//Task11--------------------------------------------------------------------------------------
// console.log("Task11--------------------------");
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array = [1,2,3,4,5,6];
//
// function replace(arr, i){
//     let replaceArr = arr;
//     if( i < arr.length-2) {
//         let indexLeft = arr[i];
//         arr[i] = arr[i + 1];
//         let indexRight = arr[i+1]
//         arr[i+1] = indexLeft;
//     }else{
//         console.log('Index is too big')
//     }
//     return replaceArr;
// }
// console.log(replace(array, 1));


//Task12--------------------------------------------------------------------------------------
// console.log("Task12--------------------------");
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arrayZeros = [4,0,5,3,0,0,21,7,0,6];
//
// function zerosToEnd(arr) {
//     let zero = [];
//     let num = [];
//     let result = [];
//     for (const elem of arr) {
//         if(elem === 0){
//             zero.push(elem)
//         } else {
//             result.push(elem)
//         }
//     }
//     result = result.concat(zero);
//     return result;
// }
// console.log(zerosToEnd(arrayZeros));


//Task13--------------------------------------------------------------------------------------
// console.log("Task13--------------------------");
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function hello(elementType,text){
//     let div = document.createElement(elementType);
//     document.body.appendChild(div);
//     div.innerText = text;
// }
// hello('h1','Hello owu!');


//Task14--------------------------------------------------------------------------------------
// console.log("Task14--------------------------");
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// const arrCars = [{model: 'civic', prodYear: 1998, power: 100, color: "blue"},
//     {model: 'corolla', prodYear: 2003, power: 90, color: "grey"},
//     {model: 'tavria', prodYear: 1991, power: 42, color: "red"},
//     {model: 'mtz', prodYear: 1970, power: 8, color: "yellow"},
//     {model: 'cx-5', prodYear: 2015, power: 180, color: "beige"},
//     {model: 'land-cruiser', prodYear: 2008, power: 200, color: "black"},
//     {model: 'almera', prodYear: 2010, power: 120, color: "white"},
//     {model: 'duster', prodYear: 2012, power: 134, color: "green"},
//     {model: 'charger', prodYear: 2016, power: 600, color: "pink"},
//     {model: 'camry', prodYear: 2018, power: 250, color: "cyan"},];
//
// function carDiv(arr, elem_id){
//     let ul = document.createElement('ul');
//     document.body.appendChild(ul);
//     let div = document.getElementById(elem_id);
//
//     let li = document.createElement('li');
//     let divProp = document.createElement('div');
//     let prodYear = document.createElement('div');
//     let power = document.createElement('div');
//     let color = document.createElement('div');
//
//     for (const elem of arr) {
//         divProp = document.createElement('div');
//         li.appendChild(divProp);
//
//         li = document.createElement('li');
//         ul.appendChild(li);
//         li.innerHTML = '<h1>' + elem.model + '</h1>';
//
//         prodYear = document.createElement('div');
//         li.appendChild(prodYear);
//         divProp.appendChild(prodYear);
//         prodYear.innerHTML = `Production year: ${elem.prodYear} `;
//
//         power = document.createElement('div');
//         li.appendChild(power);
//         divProp.appendChild(power);
//         power.innerHTML = `Power: ${elem.power} `;
//
//         color = document.createElement('div');
//         li.appendChild(color);
//         divProp.appendChild(color);
//         color.innerHTML = `Color: ${elem.color} `;
//     }
//     div.appendChild(ul);
// }
// carDiv(arrCars, 'list');


// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false},
//     ];
//     let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function userWithCities(arr1,arr2) {
//     let users = JSON.parse(JSON.stringify(arr1));
//     let cities = JSON.parse(JSON.stringify(arr2));
//
//     let usersWithCities = [];
//     for (let userElem of users) {
//         for (let i = 0; i < cities.length; i++) {
//             if (userElem.id === cities[i].user_id) {
//                 const address = cities[i];
//                 userElem.address = address;
//             }
//         }
//         usersWithCities.push(userElem);
//     }
//     console.log(usersWithCities);
// }
// userWithCities(usersWithId,citiesWithId);


