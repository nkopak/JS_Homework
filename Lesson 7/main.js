// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.getElementById('text');
// let btn = document.getElementById('btn');
// let click = btn.addEventListener('click', (ev => {
//     text.style.display = 'none';
// }));

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.innerText = ('button');
// document.body.appendChild(btn);
// let click = btn.addEventListener('click', (ev => {
//     btn.style.display = 'none';
// }));

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

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


// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menuLogo = document.createElement('h1');
// menuLogo.innerText = 'Menu';
// document.body.appendChild(menuLogo);
//
// let menuDiv = document.createElement('div');
// menuDiv.classList.add('menu');
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
//     menu.classList.toggle('menu');
//     // if(menuDiv.style.display === 'none'){
//     //     menuLogo.addEventListener('click',ev => {
//     //         menuDiv.style.display = 'block';
//     //     })
//     // }
// })

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.createElement('form');
// document.body.appendChild(form1);
//
// let input1 = document.createElement('input');
// input1.setAttribute('placeholder','Name');
// input1.setAttribute('name','name');
// form1.appendChild(input1);
//
// let input2 = document.createElement('input');
// input2.setAttribute('placeholder','Surname');
// input2.setAttribute('name','Surname');
// form1.appendChild(input2);
//
//
//
// let form2 = document.createElement('form');
// document.body.appendChild(form2);
//
// let input3 = document.createElement('input');
// input3.setAttribute('placeholder','City');
// form2.appendChild(input3);
//
// let input4 = document.createElement('input');
// input4.setAttribute('placeholder','Age');
// form2.appendChild(input4);
//
// let btn = document.createElement('button');
// document.body.appendChild(btn);
// btn.innerText = "Submit";





// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
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
