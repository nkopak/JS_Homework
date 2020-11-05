// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// //Task1--------------------------------------------------------------------------------------
// console.log("Task1--------------------------");
// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // - отримує текст з параграфа з id "content"
// let elementTask1 = document.getElementById('content');
// console.log(elementTask1);
//
// //Task2--------------------------------------------------------------------------------------
// console.log("Task2--------------------------");
// // - отримує текст з блоку з id "rules"
// let elementTask2 = document.getElementById('rules');
// console.log(elementTask2);
//
// //Task3--------------------------------------------------------------------------------------
// console.log("Task3--------------------------");
// // - замініть текст параграфа з id 'content' на будь-який інший
// let elementTask3 = elementTask1.innerText = "Вітаю на платформі!!!";
// // console.log(elementTask3);
//
// //Task4--------------------------------------------------------------------------------------
// console.log("Task4--------------------------");
// // - замініть текст параграфа з id 'rules' на будь-який інший
// let elementTask4 = elementTask2.innerText = "lorem ipsum";
// // console.log(elementTask4);
//
// //Task5--------------------------------------------------------------------------------------
// console.log("Task5--------------------------");
// // - змініть кожному елементу колір фону на червоний
// let elementTask5 = document.getElementsByTagName('ul');
//
// for (let i = 0; i < elementTask5.length; i++) {
//     elementTask5[i].style.backgroundColor = "red";
// }
//
// elementTask1.style.backgroundColor = "red";
// elementTask2.style.backgroundColor = "red";
//
// //Task6--------------------------------------------------------------------------------------
// console.log("Task6--------------------------");
// // - змініть кожному елементу колір тексту на синій
// for (let i = 0; i < elementTask5.length; i++) {
//     elementTask5[i].style.color = "blue";
// }
//
// elementTask1.style.color = "blue";
// elementTask2.style.color = "blue";
//
// //Task7--------------------------------------------------------------------------------------
// console.log("Task7--------------------------");
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let elementTask7 = document.getElementsByClassName('fc bp');
// for (let i = 0; i < elementTask7.length; i++) {
//     console.log(elementTask7[i]);
// }
//
// //Task8--------------------------------------------------------------------------------------
// console.log("Task8--------------------------");
// // - отримати всі елементи з класом fc_rules
// let elementTask8 = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < elementTask8.length; i++) {
//     console.log(elementTask8[i]);
// }
//
// //Task9--------------------------------------------------------------------------------------
// console.log("Task9--------------------------");
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let i = 0; i < elementTask8.length; i++) {
//     elementTask8[i].style.color = "yellow";
// }
//
