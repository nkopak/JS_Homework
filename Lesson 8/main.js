//=======================task 1
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textArea = document.getElementById('text');
//
// textArea.addEventListener('input', ()=>{
//     localStorage.setItem('text',textArea.value);
// })
// textArea.innerText = localStorage.getItem('text');
//==========================task2
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.

// let form = document.getElementById('form');
// let input = document.getElementById('input');
// let textarea = document.getElementById('textarea');
// let check1 = document.getElementById('check1');
// let check2 = document.getElementById('check2');
// let check3 = document.getElementById('check3');
// let check4 = document.getElementById('check4');
// let radio1 = document.getElementById('radio1');
// let radio2 = document.getElementById('radio2');
// let select = document.getElementById('select');
//
// form.addEventListener('input', ()=>{
//     localStorage.setItem('input', input.value);
//     localStorage.setItem('select', select.value);
//     localStorage.setItem('textarea', textarea.value);
//     localStorage.setItem("check1", check1.checked);
//     localStorage.setItem("check2", check2.checked);
//     localStorage.setItem("check3", check3.checked);
//     localStorage.setItem("check4", check4.checked);
//     localStorage.setItem("radio1", radio1.checked);
//     localStorage.setItem("radio2", radio2.checked);
// })
//
// input.value = localStorage.getItem('input');
// select.value = localStorage.getItem('select');
// textarea.value = localStorage.getItem('textarea');
// check1.checked = JSON.parse(localStorage.getItem('check1'));
// check2.checked = JSON.parse(localStorage.getItem('check2'));
// check3.checked = JSON.parse(localStorage.getItem('check3'));
// check4.checked = JSON.parse(localStorage.getItem('check4'));
// radio1.checked = JSON.parse(localStorage.getItem('radio1'));
// radio2.checked = JSON.parse(localStorage.getItem('radio2'));

//     Сделайте ваш скрипт как можно более универсальным.
// const form = document.getElementById('form');
// getData(form)
//
// function saveForm(t){
//     setData(t)
// }
//
// function setData(tag){
//     for (let i = 0; i < tag.length; i++) {
//         const elem = tag[i];
//         if(elem.type === 'checkbox' || elem.type === 'radio'){
//             if(elem.checked){
//                 elem.value = true
//             } else {
//                 elem.value = false
//             }
//         }
//         localStorage.setItem(`${elem.id}`, `${elem.value}`)
//     }
// }
//
// function getData(tag){
//     for (let i = 0; i < localStorage.length+8; i++) {
//         if(localStorage.hasOwnProperty(tag.children[i].id)){
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if(tag.children[i].value === "true"){
//                 console.log(tag.children[i]);
//                 tag.children[i].setAttribute('checked', 'checked');
//             }
//         }
//     }
// }

//==========================task3
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let textarea = document.getElementById('textarea');
// let button = document.getElementById('btn');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
//
// button.addEventListener('click', ()=>{
//     localStorage.setItem(localStorage.length++, textarea.value);
// })
//
// prev.addEventListener('click', ()=>{
//     next.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key)=== textarea.value){
//                 index=key;
//             }
//         }
//         // console.log(index);
//     }
//     if(index==='1'){
//         prev.style.visibility = 'hidden';
//         return
//     }
//     textarea.value = localStorage.getItem(index - 1)
// })
//
// next.addEventListener('click', ()=>{
//     prev.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key)=== textarea.value){
//                 index=key;
//                 // console.log(`Key ${key}`);
//                 // console.log(`Index ${index}`);
//                 // console.log(`Length ${localStorage.length.toString()}`);
//                 // console.log('================');
//             }
//         }
//     }
//     if(index == localStorage.length.toString()-1){
//         next.style.visibility = 'hidden';
//         // console.log(`Index ${index}`);
//         // console.log(`Length ${localStorage.length.toString()}`);
//         return
//     }
//     textarea.value = localStorage.getItem(+index + 1)
// })

//==========================task4
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.

// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// let tempUser = {};
// let content = document.querySelector('#content');
// let saveUser = document.querySelector('#save');
// let form = document.querySelector('#form1');
//
// let user_arr = 'user_arr';
// let allContacts = [];
//
// saveUser.addEventListener('click', () => {
//     let contact = {...tempUser};
//     for (const item of form.children) {
//         if (item.id && item.type !== 'submit') {
//             contact[item.id] = item.value;
//         }
//     }
//     allContacts.push(contact);
//     console.log(contact);
//     console.log(allContacts);
//     saveToLS(contact);
// })
// getFromLS()
//
// function saveToLS(user) {
//     if (localStorage.hasOwnProperty(user_arr)) {
//         let arrayUsers = JSON.parse(localStorage.getItem(user_arr));
//         console.log(arrayUsers);
//         let findUser = arrayUsers.find(value => value.phone === user.phone)
//         if (findUser) {
//
//             let filter = arrayUsers.filter(value => value.phone !== user.phone)
//             filter.push(user);
//
//             localStorage.setItem(user_arr, JSON.stringify(filter))
//         } else {
//             arrayUsers.push(user);
//             localStorage.setItem(user_arr, JSON.stringify(arrayUsers))
//         }
//     } else {
//         localStorage.setItem(user_arr, JSON.stringify([user]))
//     }
// }
//
// function getFromLS() {
//     if (localStorage.hasOwnProperty(user_arr)) {
//         let arrayUsers = JSON.parse(localStorage.getItem(user_arr))
//         for (const user of arrayUsers) {
//             content.appendChild(createDivUserInfo(user));
//         }
//     }
// }
//
// function createDivUserInfo(user) {
//     let infoBlock = document.createElement('fieldset');
//     let flag = true;
//     for (const key in user) {
//         if (flag) {
//             let header = document.createElement('h4');
//             header.innerText = `${key}: ${user[key]}`;
//             infoBlock.appendChild(header);
//             flag = false
//         } else {
//             let p = document.createElement('p');
//             p.innerText = `${key}: ${user[key]}`;
//             infoBlock.appendChild(p);
//         }
//     }
//     infoBlock.style = 'float: left';
//     let editBtn = document.createElement('button');
//     let deleteBtn = document.createElement('button');
//
//     editBtn.innerText = 'Edit';
//     editBtn.addEventListener('click', () => {
//         editContact(user.phone);
//     });
//
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.addEventListener('click', () => {
//         deleteContact(user.phone);
//     })
//
//
//     infoBlock.appendChild(editBtn);
//     infoBlock.appendChild(deleteBtn);
//     return infoBlock;
// }
//
// function deleteContact(phone) {
//     let arr = JSON.parse(localStorage.getItem(user_arr));
//     let filter = arr.filter(user => user.phone !== phone);
//     localStorage.setItem(user_arr, JSON.stringify(filter));
//     location.reload();
// }
//
// function editContact(phone) {
//     let arr = JSON.parse(localStorage.getItem(user_arr));
//     let user = arr.find(user => user.phone === phone);
//     for (const item of form.children) {
//         if (item.id && item.type !== 'submit') {
//             for (const key in user) {
//                 if (item.id === key) {
//                     item.value = user[key];
//                 }
//             }
//         }
//     }
//     tempUser = user;
// }
























