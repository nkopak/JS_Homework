//Task1--------------------------------------------------------------------------------------
// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

const arrNumbers = [0,5,15,23,145];
const arrStrings = ["Phone", "Sandero", "Cat", "Chocolate", "Mask"];
const arrEverything = [0,"WIFI",true,23,false];

console.log(arrNumbers, arrStrings, arrEverything);

//Task2--------------------------------------------------------------------------------------
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const arrTask2 = [];
arrTask2[0] = "Iron Maiden";
arrTask2[1] = "Led Zeppelin";
arrTask2[2] = true;
arrTask2[3] = 83749;

console.log(arrTask2);


//Task3--------------------------------------------------------------------------------------
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i = 0; i <=10; i++){
    document.write("<div>Okten</div>")
}


//Task4--------------------------------------------------------------------------------------
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i = 0; i <=10; i++){
    document.write("<div>Okten " + i + "</div>")
}


//Task5--------------------------------------------------------------------------------------
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let indexTask5 = 0;
while(indexTask5 <= 20){
    document.write("<h1>Вивести 20 блоків h1</h1>");
    indexTask5++;
}


//Task6--------------------------------------------------------------------------------------
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let indexTask6 = 0;
while(indexTask6 <= 20){
    document.write("<h1>Вивести 20 блоків h1: " + indexTask6 + "</h1>" );
    indexTask6++;
}


//Task7--------------------------------------------------------------------------------------
console.log("Task7--------------------------");
//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const arrTask7 = [15, 568, 7879, 45, 94, 68, 248, 336, 798, 1987];

for( let i = 0; i < arrTask7.length; i++){
    console.log(arrTask7[i]);
}


//Task8--------------------------------------------------------------------------------------
console.log("Task8--------------------------");
//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const arrTask8 = ["Shot In The Dark","Thunderstruck", "Back In Black", "Highway to Hell", "You Shook Me All Night Long",
    "Shoot to Thrill", "Hells Bells", "Who Made Who", "T.N.T.", "Hells Bells"];

for( let i = 0; i < arrTask8.length; i++){
    console.log(arrTask8[i]);
}


//Task9--------------------------------------------------------------------------------------
console.log("Task9--------------------------");
//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arrTask9 = [24587, true, "CS GO", false, "Honda", 544, null, "lenovo", 1997, true];

for( let i = 0; i < arrTask9.length; i++){
    console.log(arrTask9[i]);
}


//Task10--------------------------------------------------------------------------------------
console.log("Task10--------------------------");
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const arrTask10 = [24587, true, "CS GO", false, "Honda", 544, null, "lenovo", 1997, true];

for( let i = 0; i < arrTask10.length; i++){
    if(typeof arrTask10[i] === "boolean"){
        console.log(arrTask10[i]);
    }
}


//Task11--------------------------------------------------------------------------------------
console.log("Task11--------------------------");
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

const arrTask11 = [24587, true, "CS GO", false, "Honda", 544, null, "lenovo", 1997, true];

for( let i = 0; i<arrTask11.length; i++){
    if(typeof arrTask11[i] === "number"){
        console.log(arrTask11[i]);
    }
}


//Task12--------------------------------------------------------------------------------------
console.log("Task12--------------------------");
//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

const arrTask12 = [24587, true, "CS GO", false, "Honda", 544, null, "lenovo", 1997, true];

for( let i = 0; i<arrTask12.length; i++){
    if(typeof arrTask12[i] === "string"){
        console.log(arrTask12[i]);
    }
}


//Task13--------------------------------------------------------------------------------------
console.log("Task13--------------------------");
//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const arrTask13 =[];

arrTask13[0] = 123;
arrTask13[1] = "Dog";
arrTask13[2] = true;
arrTask13[3] = 456;
arrTask13[4] = "Cat";
arrTask13[5] = false;
arrTask13[6] = 789;
arrTask13[7] = "Fish";
arrTask13[8] = true;
arrTask13[9] = "Turtle";
arrTask13[10] = false;

for(let i = 0; i<arrTask13.length; i++){
    console.log(arrTask13[i]);
}


//Task14--------------------------------------------------------------------------------------
console.log("Task14--------------------------");
document.write("<br>")
//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i<=10; i++){
    console.log(i);
    document.write(i);
}


//Task15--------------------------------------------------------------------------------------
console.log("Task15--------------------------");
document.write("<br>");
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for ( let i = 0; i<=100; i++ ){
    console.log(i);
    document.write(i);
}


//Task16--------------------------------------------------------------------------------------
console.log("Task16--------------------------");
document.write("<br>");
//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for( let i = 0; i <=100; i+=2){
    console.log(i);
    document.write(i);
}

//Task17--------------------------------------------------------------------------------------
console.log("Task17--------------------------");
document.write("<br>");
//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for( let i = 0; i <=100; i++){
    if(i%2 === 0){
        console.log(i);
        document.write(" " + i);
    }
}

// for( let i = 0; i <=100; i+=2){
//     console.log(i);
//     document.write(" " + i);
// }


//Task18--------------------------------------------------------------------------------------
console.log("Task18--------------------------");
document.write("<br>");
//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for( let i = 0; i <=100; i++){
    if(i%2 === 1){
        console.log(i);
        document.write(" " + i);
    }
}

// for( let i = 1; i <=100; i+=2){
//         console.log(i);
//         document.write(" " + i);
// }


//Task19--------------------------------------------------------------------------------------
console.log("Task19--------------------------");
document.write("<br>");
//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for( let i = 1; i <=2; i++){
//     for( let i = 0; i <= 60; i++){
//         console.log("sec: " + i);
//     }
//     console.log("min: " + i);
// }


//Task20--------------------------------------------------------------------------------------
console.log("Task20--------------------------");
document.write("<br>");

// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for( let i = 1; i <=2; i++){
//     for (let i = 1; i <= 60; i++) {
//         for (let i = 0; i <= 60; i++) {
//             console.log("sec: " + i);
//         }
//         console.log("min: " + i);
//     }
//     console.log("hour: " + i);
// }


// Додатково
//Task21--------------------------------------------------------------------------------------

console.log("Task21--------------------------");
document.write("<br>");
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
const arrTask21 = [ 'a', 'b', 'c'];
let wordTask21 = "";

for( let i = 0; i < arrTask21.length; i++){
    wordTask21 = wordTask21 + arrTask21[i];
}
console.log(wordTask21);


//Task22--------------------------------------------------------------------------------------
console.log("Task22--------------------------");
document.write("<br>");
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
const arrTask22 = [ 'a', 'b', 'c'];
let wordTask22 = "";

let i = 0;
while( i < arrTask22.length){
    wordTask22 = wordTask22 + arrTask22[i];
    i++;
}
console.log(wordTask22);


//Task23--------------------------------------------------------------------------------------
console.log("Task23--------------------------");
document.write("<br>");
//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
const arrTask23 = [ 'a', 'b', 'c'];
let wordTask23 = "";

for( const element of arrTask23){
    wordTask23 = wordTask23 + element;
}
console.log(wordTask23);


//Task24--------------------------------------------------------------------------------------
console.log("Task24--------------------------");
document.write("<br>");
//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
const arrTask24 = [ 'a', 'b', 'c'];
let wordTask24 = "";

for( const element in arrTask24){
    wordTask24 = wordTask24 + arrTask24[element];
}
console.log(wordTask24);

// =================
// =================
// =================
// =================
//Task25--------------------------------------------------------------------------------------
console.log("Task25--------------------------");
document.write("<br>");
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

const arr1Task25 = ['a', 'b', 'c'];
const arr2Task25 = [1, 2, 3];

for (const value of arr2Task25) {
    arr1Task25.push(value);
}
console.log(arr1Task25);


// //Task26--------------------------------------------------------------------------------------
// console.log("Task26--------------------------");
// document.write("<br>");
// //Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrTask26 = [1, 2, 3];
//
// for ( let i = 0; i <= arrTask26.length ; i++){
//     let del = arrTask26.pop;
//     arrTask26.push(i);
// }
// console.log(arrTask26);



















