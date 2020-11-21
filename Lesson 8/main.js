// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textArea = document.getElementById('text');
//
// textArea.addEventListener('input', ()=>{
//     localStorage.setItem('text',textArea.value);
// })
// textArea.innerText = localStorage.getItem('text');
//=======================================================================================================================
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
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



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let textarea = document.getElementById('textarea');
// let button = document.getElementById('btn');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
//
// let infoArr = [];
// let i = 0;
//
//
// button.addEventListener('click', ()=>{
//     localStorage.setItem(`text ${i++}`, JSON.stringify(textarea.value));
//     let info = textarea.value;
//     infoArr.push(info);
//     // console.log(infoArr);
//     // console.log(i);
// })
//
// prev.addEventListener('click', ()=>{
//     let prevI = --infoArr.length;
//     if(prevI >= infoArr.length){
//         textarea.value = JSON.parse(localStorage.getItem(`text ${prevI}`));
//         console.log(textarea.value);
//     } else if(prevI <= infoArr.length){
//         textarea.value = JSON.parse(localStorage.getItem(`text 0`));
//         console.log(textarea.value);
//     }
//     console.log(infoArr);
// })
//
// next.addEventListener('click',()=>{
//     let nextI = ++infoArr.length;
//     if(nextI = infoArr.length){
//         nextI = infoArr.length
//     }
//     textarea.value = JSON.parse(localStorage.getItem(`text ${nextI}`));
//     console.log(textarea.value);
//
// })
//
// textarea.value = JSON.parse(localStorage.getItem(`text ${infoArr.length}`));

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.

// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта



function setData(tag){
    let name = document.querySelector('#name');
    for (const elem of tag) {
        localStorage.setItem(elem.id, elem.value)
    }
}

function getData(tag){
    let field = document.querySelector('.field')
    let showUser = document.querySelector('#show');
    if (showUser.value === localStorage.getItem('name')){
        for (let i = 0; i < localStorage.length; i++) {
            let elem = localStorage.getItem(localStorage.key(i));
            field.innerHTML = `${localStorage.key(i)} ${elem}`;
        }
    }
}
