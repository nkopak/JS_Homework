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
let arrTask26 = [1, 2, 3];

for ( let i = 0; i <= arrTask26.length ; i++){
    let del = arrTask26.pop;
    arrTask26.push(i);
}
console.log(arrTask26);