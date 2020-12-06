// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
// let div = document.createElement('div');
// div.setAttribute('id', 'text');
// document.body.appendChild(div);
//
// let text = document.getElementById('text');
// text.style.backgroundColor ='green';
// text.style.width ='300px';
// text.style.height ='100px';
//
// let button = document.createElement('button');
// button.setAttribute('id', 'btn');
// button.innerText = 'Click!';
// document.body.appendChild(button);
//
// let btn = document.getElementById('btn');
// let click = btn.addEventListener('click', (ev => {
//     text.style.display = 'none';
// }));

//=======================================================================================================================
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.innerText = ('button');
// document.body.appendChild(btn);
// let click = btn.addEventListener('click', (ev => {
//     btn.style.display = 'none';
// }));

//=======================================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const forms = document.createElement('form');
// forms.setAttribute('name','form');
// document.body.appendChild(forms);
//
// const input = document.createElement('input');
// input.setAttribute("type", "number");
// input.setAttribute("name", "age");
// forms.appendChild(input);
//
// const btn = document.createElement('button');
// btn.setAttribute('type','button');
// forms.appendChild(btn);
// btn.innerText = 'Submit';
//
// btn.addEventListener('click', ev => {
//     let age = document.forms.form.age.value;
//     if(age>=18){
//         alert(`Welcome! Your age is ${age}`);
//     } else {
//         alert('Get older');
//     }
// })

//=======================================================================================================================
// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menuLogo = document.createElement('h1');
// menuLogo.innerText = 'Menu';
// document.body.appendChild(menuLogo);
//
// let menuDiv = document.createElement('div');
// document.body.appendChild(menuDiv);
//
// let ul = document.createElement('ul');
// menuDiv.appendChild(ul);
//
// let li = document.createElement('li');
// li.innerText = 'Main page'
// ul.appendChild(li);
//
// let li2 = document.createElement('li');
// li2.innerText = 'Shop'
// ul.appendChild(li2);
//
// let li3 = document.createElement('li');
// li3.innerText = 'Contacts'
// ul.appendChild(li3);
//
// menuLogo.addEventListener('click',ev => {
//     menuDiv.classList.toggle('hidden');
// })
//=======================================================================================================================
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
// for (const elem of comments) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//
//     // let comTitle = elem.title;
//     // let comBody = elem.body;
//     // let comment = `${comTitle} : ${comBody}`
//     let title = document.createElement('h3');
//     title.innerText = elem.title;
//     div.appendChild(title);
//
//     let body = document.createElement('h4');
//     body.innerText = elem.body;
//     div.appendChild(body);
//
//     let button = document.createElement('button');
//     button.innerText = 'Hide';
//     div.appendChild(button);
//
//     button.addEventListener('click',ev => {
//         body.classList.toggle('hidden');
//     })
// }
//=======================================================================================================================
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.createElement('form');
// form1.setAttribute('name','form1');
// document.body.appendChild(form1);
//
// let input1 = document.createElement('input');
// input1.setAttribute('placeholder','Name');
// input1.setAttribute('value','');
// input1.setAttribute('name','name');
// form1.appendChild(input1);
// let formFirst = document.forms.form1;
// let name = formFirst.name;
//
// let input2 = document.createElement('input');
// input2.setAttribute('placeholder','Surname');
// input2.setAttribute('value','');
// input2.setAttribute('name','surname');
// form1.appendChild(input2);
// let surname = formFirst.surname;
//
// let form2 = document.createElement('form');
// form2.setAttribute('name','form2');
// document.body.appendChild(form2);
//
// let input3 = document.createElement('input');
// input3.setAttribute('placeholder','City');
// input3.setAttribute('value','');
// input3.setAttribute('name','city');
// form2.appendChild(input3);
// let formSecond = document.forms.form2;
// let city = formSecond.city;
//
// let input4 = document.createElement('input');
// input4.setAttribute('placeholder','Age');
// input4.setAttribute('value','');
// input4.setAttribute('name','age');
// form2.appendChild(input4);
// let age = formSecond.age;
//
// let btn = document.createElement('button');
// document.body.appendChild(btn);
// btn.innerText = "Submit";
//
// btn.addEventListener('click',ev => {
//     console.log(`${name.value} ${surname.value} ${city.value} ${age.value}`);
// })


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// function table(tr, td, elem){
//     let table = document.createElement('table');
//     document.body.appendChild(table);
//     table.style.border = '1px solid black';
//
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//         tr.style.border = '1px solid black';
//         for (let j = 0; j < td; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.style.border = '1px solid black';
//
//             let p = document.createElement('p');
//             td.appendChild(p);
//             p.innerText = elem;
//         }
//     }
// }
// table(3,4, 'hello');


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let trInput = document.createElement('input');
// trInput.setAttribute('value', '');
// trInput.setAttribute('placeholder', 'Table rows');
// document.body.appendChild(trInput);
//
// let tdInput = document.createElement('input');
// tdInput.setAttribute('value', '');
// tdInput.setAttribute('placeholder', 'Table data');
// document.body.appendChild(tdInput);
//
// let infoInput = document.createElement('input');
// infoInput.setAttribute('value', '');
// infoInput.setAttribute('placeholder', 'Text');
// document.body.appendChild(infoInput);
//
// let button = document.createElement('button');
// button.setAttribute('type', 'submit');
// button.innerText = 'Make a Table!'
// document.body.appendChild(button);
//
// button.addEventListener('click',()=>{
//     table(trInput.value, tdInput.value, infoInput.value);
// })
//
// function table(tr, td, elem){
//     let table = document.createElement('table');
//     document.body.appendChild(table);
//     table.style.border = '1px solid black';
//
//     for (let i = 0; i < tr; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//         tr.style.border = '1px solid black';
//         for (let j = 0; j < td; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//             td.style.border = '1px solid black';
//
//             let p = document.createElement('p');
//             td.appendChild(p);
//             p.innerText = elem;
//         }
//     }<
// }

//<!--carousel-->
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let images = ['https://i.pinimg.com/736x/25/40/de/2540de1db897bbbc4972d348447f0bb8.jpg',
// 'https://i.pinimg.com/originals/b9/86/bc/b986bcd86ceecddf4d35a2f53e94e30e.jpg',
// 'https://cutecatsanddogs.com/wp-content/uploads/2014/10/funny-videos-funny-cats-funny-ca1.jpg',
// 'https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2019/08/08/KNOWYOURMEME-sad-cat-crying-1120.JPG',
// 'https://i.pinimg.com/564x/75/1e/6d/751e6d6a890c6ff97326849bd0c2f604.jpg']
//
// let right = document.getElementById('right');
// let left = document.getElementById('left');
// document.carousel.src = images[0];
// let i = 0;
//
// right.addEventListener('click', ()=>{
//     if(i < images.length-1){
//         i++;
//         document.carousel.src = images[i];
//         return
//     }
//         i = 0;
//         document.carousel.src = images[i];
// })
//
// left.addEventListener('click', ()=>{
//     if(i <= 0){
//         i = images.length-1
//         document.carousel.src = images[i];
//         return
//     }
//         i--;
//         document.carousel.src = images[i]
// })


//<!--bad words-->
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let badWords = ['курва', 'сука', 'чорт', 'дідько', 'пизда', 'пиздєц', 'хуй', 'підар', 'уйобок', 'блядь', 'їбати', 'їбанат', 'хер', 'мудило', 'гімнюк', 'засранець', 'fuck', 'bitch', 'asshole', 'jackass', 'shit', 'suck', 'dick', 'idiot', ]

// let word = document.getElementById('badWord');
// let btn = document.getElementById('submit');
// let div = document.getElementsByTagName('div')[0];
// let label = document.getElementById('label');
// label.innerText = 'Введіть слово: ';
//
// btn.addEventListener('click',()=>{
//     let chosenWord = word.value.toLowerCase();
//
//     for (const word of badWords) {
//         if (chosenWord === word){
//             alert('Не матюкайся!');
//             return
//         }
//     }
//     let greet = document.createElement('h1');
//     div.appendChild(greet);
//     greet.innerText = 'То є нормальне слово:)';
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['курва', 'сука', 'чорт', 'дідько', 'пизда', 'пиздєц', 'хуй', 'підар', 'уйобок', 'блядь', 'їбати', 'їбанат', 'хер', 'мудило', 'гімнюк', 'засранець', 'fuck', 'bitch', 'asshole', 'jackass', 'shit', 'suck', 'dick', 'idiot', ]
// let words = document.getElementById('badWord');
// let btn = document.getElementById('submit');
// let div = document.getElementsByTagName('div')[0];
//let label = document.getElementById('label');
// label.innerText = 'Введіть речення: ';
//
// btn.addEventListener('click',()=>{
//     let wordsArray = words.value.toLowerCase().split(' ');
//
//     for (const word of badWords) {
//         if (wordsArray.includes(word)){
//             alert('Не матюкайся!');
//             return
//         }
//     }
//     let greet = document.createElement('h1');
//     div.appendChild(greet);
//     greet.innerText = 'Поганих слів не знайдено в масиві не знайдено:)';
// })
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

