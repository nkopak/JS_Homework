// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// ==============================================
// function Tag (tagName,tagAction,atrArr){
//     this.name = tagName;
//     this.action = tagAction;
//     this.array = atrArr;
// }
//
// let a = new Tag( '<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords',actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download',actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}
//     ])
//
// let div = new Tag( '<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',[
//     {titleOfAttr: 'align',actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title',actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ])
//
// let h1 = new Tag( '<h1>','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',[
//     {titleOfAttr: 'align',actionOfAttr: 'Определяет выравнивание заголовка.'}
// ])
//
// let span = new Tag( '<span>','Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'class',actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ])
//
// let input = new Tag( '<input>','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'class',actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ])
//
// let form = new Tag( '<form>','Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.',[
//     {titleOfAttr: 'id',actionOfAttr: 'идентификатор'}
// ])
//
// let option = new Tag( '<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',[
//     {titleOfAttr: 'disabled',actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label',actionOfAttr: 'Указание метки пункта списка.'}
// ])
//
// let select = new Tag( '<select>','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'disabled',actionOfAttr: 'Заблокировать для доступа элемент списка.'}
// ]);
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);


//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class Tag{
//     constructor(tagName, tagAction, atrArr) {
//         this.name = tagName;
//         this.action = tagAction;
//         this.array = atrArr;
//     }
// }
//
// let a = new Tag( '<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords',actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download',actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}
// ])
// console.log(a);
//
// let div = new Tag( '<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',[
//     {titleOfAttr: 'align',actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title',actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ])
// console.log(div);
//
// let h1 = new Tag( '<h1>','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',[
//     {titleOfAttr: 'align',actionOfAttr: 'Определяет выравнивание заголовка.'}
// ])
// console.log(h1);
//
// let span = new Tag( '<span>','Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'class',actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ])
// console.log(span);
//
// let input = new Tag( '<input>','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'class',actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ])
// console.log(input);
//
// let form = new Tag( '<form>','Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.',[
//     {titleOfAttr: 'id',actionOfAttr: 'идентификатор'}
// ])
// console.log(form);
//
// let option = new Tag( '<option>','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',[
//     {titleOfAttr: 'disabled',actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label',actionOfAttr: 'Указание метки пункта списка.'}
// ])
// console.log(option);
//
// let select = new Tag( '<select>','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',[
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'disabled',actionOfAttr: 'Заблокировать для доступа элемент списка.'}
// ]);
// console.log(select);


// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//     model: "fabia",
//     manufacturer: "skoda",
//     prodYear: 2008,
//     topSpeed: 160,
//     engVolume: 1.4,
//
//     drive: function drive() {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} км/год`);
//     },
//
//     info: function info() {
//         console.log(`Car specs: model-${this.model}, manufacturer-${this.manufacturer}, production year-${this.prodYear},
//                 top speed - ${this.topSpeed}, engine volume - ${this.engVolume}`);
//     },
//
//     newSpeed: function increaseMaxSpeed(newSpeed) {
//         this.topSpeed += newSpeed;
//         console.log(this.topSpeed);
//     },
//
//     changeYear: function changeYear(newYear) {
//         this.prodYear = newYear;
//         console.log(this.prodYear);
//     },
//
//     addDriver: function addDriver(name, exp) {
//         this.driver = {name: name, exp: exp};
//         Object.assign({}, this.driver)
//         console.log(this.driver);
//     }
// }
//
// car.drive();
// car.info();
// car.newSpeed(20);
// car.changeYear(2012);
// car.addDriver("volodymyr", 4);






// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, manufacturer, prodYear, topSpeed, engVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.prodYear = prodYear;
//     this.topSpeed = topSpeed;
//     this.engVolume = engVolume;
//
//
//      this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.topSpeed} км/год`);
//     }
//
//     this.info = function (){
//         console.log(`Car specs: model-${this.model}, manufacturer-${this.manufacturer}, production year-${this.prodYear},
//                 top speed - ${this.topSpeed}, engine volume - ${this.engVolume}`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.topSpeed += newSpeed;
//         console.log(this.topSpeed);
//     }
//
//     this.changeYear = function (newYear){
//         this.prodYear = newYear;
//         console.log(this.prodYear);
//     }
//
//     this.addDriver = function (name, exp){
//         this.driver = {name: name, exp: exp};
//         Object.assign({}, this.driver)
//         console.log(this.driver);
//     }
// }
//
// let skoda = new Car("fabia",'skoda',2008, 160, 1.4);
//
// skoda.drive();
// skoda.info();
// skoda.increaseMaxSpeed(20);
// skoda.changeYear(2012);
// skoda.addDriver("volodymyr", 4);
// console.log(skoda);




// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class Car{
//     constructor(model, manufacturer, prodYear, topSpeed, engVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.prodYear = prodYear;
//         this.topSpeed = topSpeed;
//         this.engVolume = engVolume;
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.topSpeed} км/год`);
//     }
//
//     info(){
//         console.log(`Car specs: model-${this.model}, manufacturer-${this.manufacturer}, production year-${this.prodYear},
//                 top speed - ${this.topSpeed}, engine volume - ${this.engVolume}`);
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.topSpeed += newSpeed;
//         console.log(this.topSpeed);
//     }
//
//     changeYear(newYear){
//         this.prodYear = newYear;
//         console.log(this.prodYear);
//     }
//
//     addDriver(name, exp){
//         this.driver = {name: name, exp: exp};
//         Object.assign({}, this.driver)
//         console.log(this.driver);
//     }
// }
//
// let skoda = new Car("fabia",'skoda',2008, 160, 1.4);
//
// skoda.drive();
// skoda.info();
// skoda.increaseMaxSpeed(20);
// skoda.changeYear(2012);
// skoda.addDriver("volodymyr", 4);
// console.log(skoda);

//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.size = shoesSize;
//     }
// }
//
// let girl1 = new Cinderella('Solia', 19, 36);
// let girl2 = new Cinderella('Vasylyna', 24, 37);
// let girl3 = new Cinderella('Sofia', 21, 38);
// let girl4 = new Cinderella('Anna', 23, 37);
// let girl5 = new Cinderella('Nelia', 25, 35);
// let girl6 = new Cinderella('Nastia', 22, 38);
// let girl7 = new Cinderella('Yulia', 25, 39);
// let girl8 = new Cinderella('Marta', 27, 34);
// let girl9 = new Cinderella('Ira', 20, 38);
// let girl10 = new Cinderella('Diana', 23, 37);
//
// let cinderellas = [];
// cinderellas.push(girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10);
// console.log(cinderellas);
//
// class Prince{
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.size = shoesSize;
//     }
//
//     findPrincess() {
//         for (const girl of cinderellas) {
//             if (girl.size === this.size) {
//                 console.log(`Hurray! ${girl.name} and ${this.name} are gonna marry:)`);
//             }
//         }
//     }
//
// }
//
// let prince = new Prince('Yurii', 24, 36)
// prince.findPrincess();


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name,age,shoeSize){
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
// }
//
// let girl1 = new Cinderella('Solia', 19, 36);
// let girl2 = new Cinderella('Vasylyna', 24, 37);
// let girl3 = new Cinderella('Sofia', 21, 38);
// let girl4 = new Cinderella('Anna', 23, 37);
// let girl5 = new Cinderella('Nelia', 25, 35);
// let girl6 = new Cinderella('Nastia', 22, 38);
// let girl7 = new Cinderella('Yulia', 25, 39);
// let girl8 = new Cinderella('Marta', 27, 34);
// let girl9 = new Cinderella('Ira', 20, 38);
// let girl10 = new Cinderella('Diana', 23, 37);
//
// let cinderellas = [];
// cinderellas.push(girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10);
// console.log(cinderellas);
//
//
// function Prince(name,age,shoeSize){
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//
//     this.findPrincess = function (girls){
//         for (const girl of girls) {
//             if(girl.shoeSize === prince.shoeSize){
//                 console.log(`Hurray! ${girl.name} and ${prince.name} are gonna marry:)`);
//             }
//         }
//     }
// }
//
// let prince = new Prince('Yurii', 24, 36);
// prince.findPrincess(cinderellas);