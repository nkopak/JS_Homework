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


//Task26--------------------------------------------------------------------------------------
console.log("Task26--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

const arr1Task26 = [1, 2, 3];
const arr2Task26 = [];

for(let i = arr1Task26[2]; i > 0 ; i--){
    arr2Task26.push(i);
}
console.log(arr2Task26);


//Task27--------------------------------------------------------------------------------------
console.log("Task27--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
const arr1Task27 = [1, 2, 3];
const arr2Task27 = [4, 5, 6];

for(const element of arr2Task27){
    arr1Task27.push(element);
}
console.log(arr1Task27);


//Task28--------------------------------------------------------------------------------------
console.log("Task28--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
const arr1Task28 = [1, 2, 3];

for(let i = 6; i >= 4 ; i--){
    arr1Task28.unshift(i);
}
console.log(arr1Task28);


//Task29--------------------------------------------------------------------------------------
console.log("Task29--------------------------");
document.write("<br>");
//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

const arrTask29 = ['js', 'css', 'jq'];
const firstElem = arrTask29.shift([0]);

document.write("<h1>First element is: " + firstElem + "</h1>");


//Task30--------------------------------------------------------------------------------------
console.log("Task30--------------------------");
document.write("<br>");
//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

const arrTask30 = ['js', 'css', 'jq'];
const lastElem = arrTask30.pop([arrTask30.length-1]);

document.write("<h1>Last element is: " + lastElem + "</h1>");


//Task31--------------------------------------------------------------------------------------
console.log("Task31--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arrTask31 = [1, 2, 3, 4, 5];

arrTask31 = arrTask31.slice(3);
console.log(arrTask31);


//Task32--------------------------------------------------------------------------------------
console.log("Task32--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let arrTask32 = [1, 2, 3, 4, 5];

arrTask32 = arrTask32.slice(0, 2);
console.log(arrTask32);


//Task33--------------------------------------------------------------------------------------
console.log("Task33--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let arrTask33 = [1, 2, 3, 4, 5];

arrTask33.splice(1, 2);
console.log(arrTask33);


//Task34--------------------------------------------------------------------------------------
console.log("Task34--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arrTask34 = [1, 2, 3, 4, 5];

arrTask34.splice(3, 0,'a', 'b', 'c');
console.log(arrTask34);


//Task35--------------------------------------------------------------------------------------
console.log("Task35--------------------------");
document.write("<br>");
//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arrTask35 = [1, 2, 3, 4, 5];

arrTask35.splice(1, 0,'a', 'b');
arrTask35.splice(6, 0,'c');
arrTask35.splice(8,0,'e');

console.log(arrTask35);


//Task36--------------------------------------------------------------------------------------
console.log("Task36--------------------------");
document.write("<br>");
//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const arrTask36 = [12,155,213,37,84,50,69,72,81,92];

for(const element of arrTask36){
    if(element % 2 === 0 ){
        console.log(element);
    }
}

//Task37--------------------------------------------------------------------------------------
console.log("Task37--------------------------");
document.write("<br>");
//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

const arr1Task37 = [12,'Pet',213,false,84,50,true,72,'81',92];
const arr2Task37 = [];

for(const element of arr1Task37){
    arr2Task37.push(element);
}
console.log(arr1Task37)
console.log(arr2Task37);


//Task38--------------------------------------------------------------------------------------
console.log("Task38--------------------------");
document.write("<br>");
//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const arr1Task38 = [12,'Pet',213,false,84,50,true,72,'81',92];
let arr2Task38 = [];

for(const element of arr1Task38) {
    arr2Task38[i++] = element;
}
console.log(arr2Task38);



