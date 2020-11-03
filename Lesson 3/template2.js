// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :


//Task1--------------------------------------------------------------------------------------
// console.log("Task1--------------------------");
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let elemTask1 = document.getElementById('main_header');
elemTask1.style.color = 'blue';


//Task2--------------------------------------------------------------------------------------
// -- робить шириниу елементу ul 400 пікселів
let elemTask2 = document.getElementsByTagName('ul');
for (let i = 0; i < elemTask2.length; i++) {
    elemTask2[i].style.width = "400px";
}


//Task3--------------------------------------------------------------------------------------
// -- робить шириниу всіх елементів з класом linkList шириною 50%
let elemTask3 = document.getElementsByClassName("linkList");
for (let i = 0; i < elemTask3.length; i++) {
    elemTask3[i].style.width = "50%";
}

//Task4--------------------------------------------------------------------------------------
// -- отримує текст який зберігається в елементі з класом listElement2
let elemTask4 = document.getElementsByClassName("linkList listElement2");
for (let i = 0; i < elemTask4.length; i++) {
    console.log(elemTask4[i].textContent);
}

//Task5--------------------------------------------------------------------------------------
// -- отримує всі елементи li та змінює ім колір фону на сірий
let elemTask5 = document.getElementsByTagName('li');
for (let i = 0; i < elemTask5.length; i++) {
    elemTask5[i].style.backgroundColor = "grey";

}

//Task6--------------------------------------------------------------------------------------
// -- отримує всі елементи 'a' та додає їм клас anchor
let elemTask6 = document.getElementsByTagName('a');
for (let i = 0; i < elemTask6.length; i++) {
    elemTask6[i].classList.add('anchor');

}

//Task7--------------------------------------------------------------------------------------
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let elemTask7 = document.getElementsByTagName("a");
for (let i = 0; i < elemTask7.length; i++) {
    if(elemTask7[i].textContent === "link3"){
        elemTask7[i].style.fontSize = "40px"
    };
}

//Task8--------------------------------------------------------------------------------------
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let elemTask8 = document.getElementsByTagName("a");
for (let i = 0; i < elemTask8.length; i++) {
        elemTask8[i].classList.add("element_XXX");

}

//Task9--------------------------------------------------------------------------------------
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let elemTask9 = document.getElementsByClassName('sub-header');
let colorInput1 = prompt('Enter color: ');
for (let i = 0; i < elemTask9.length; i++) {
    elemTask9[i].style.backgroundColor = colorInput1;

}

//Task10--------------------------------------------------------------------------------------
// -- отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемунту = content 2 segment. Колір отримати з prompt()
let elemTask10 = document.getElementsByClassName('sub-header');
let colorInput2 = prompt('Enter color: ');

for (let i = 0; i < elemTask10.length; i++) {
    if(elemTask10[i].textContent === "content 2 segment")
    elemTask10[i].style.backgroundColor = colorInput2;

}


//Task11--------------------------------------------------------------------------------------
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let elemTask11 = document.getElementsByClassName('content_1');
let textInput = prompt('Enter text: ');
for (let i = 0; i < elemTask11.length; i++) {
    elemTask11[i].textContent = textInput;

}


//Task12--------------------------------------------------------------------------------------
// -- отримати елементи p та змінити їм padding на довільне значення
let elemTask12 = document.getElementsByTagName('p');

for (let i = 0; i < elemTask12.length; i++) {
    elemTask12[i].style.padding = "20px";

}

//Task13--------------------------------------------------------------------------------------
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let elemTask13 = document.getElementsByClassName('text2');

for (let i = 0; i < elemTask13.length; i++) {
    elemTask13[i].textContent = "Okten";

}

