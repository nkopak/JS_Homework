//Task1--------------------------------------------------------------------------------------
// console.log("Task1--------------------------");
// - створити функцію яка виводить масив
// const array1 = [1,2,'three', false];
// let newArr = function (array){
//     console.log(array);
// }
// newArr(array1);


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
//     let numbers = arguments;
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
//     let objNum = arr.length;
//     return objNum;
// }
// console.log(objNum(objArray));


// //Task9--------------------------------------------------------------------------------------
// console.log("Task9--------------------------");
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них




// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]




