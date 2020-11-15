//Task1-------------------------------------------------------------------------------
// - создать массив с 20 числами.
// const array =  [5,4,1,58,9,3,54,7,1,5545,235,0,568,79,156, 58, 68, 120,12, 95];

// -- при помощи метода sort и колбека  отсортировать массив.
// let sort = array.sort((a,b)=>{
//     return a - b;
// });
// console.log(sort);
//
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sort2 = array.sort((a,b)=>{
//     return b - a;
// });
// console.log(sort2);

// -- при помощи filter получить числа кратные 3
// let filter3 = array.filter((value) => value%3 ===0)
// console.log(filter3);

// -- при помощи filter получить числа кратные 10
// let filter10 = array.filter((value) => value%10 ===0)
// console.log(filter10);

// -- перебрать (проитерировать) массив при помощи foreach()
// let iterForEach = array.forEach((value, index) => {
//     console.log(index +" : "+value);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = array.map((value, index) => {
//     value = value*3;
//     return value;
// });
// console.log(map);

//Task2-------------------------------------------------------------------------------
// - создать массив со словами на 15-20 элементов.
// let array = ['okten','java','c++','c#','ruby','javascript','python','car mechanic','bus driver','dog','cat', 'cow',
//     'plane','bike','queen','freddie']
// -- отсортировать его по алфавиту в восходящем порядке.
// let sort = array.sort((a, b) => {
//     if(a<b){
//         return -1
//     }
//     if(a>b){
//         return 1
//     }
// })
// console.log(sort);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort = array.sort((a, b) => {
//     if(a<b){
//         return 1
//     }
//     if(a>b){
//         return -1
//     }
// })
// console.log(sort);

// -- отфильтровать слова длиной менее 4х символов
// let filter = array.filter(value => {
//     if(value.length < 4){
//         return value;
//     }
// })
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = array.map(value => {
//     let newValue = value.concat('!');
//     return newValue
// })
// console.log(map);


//Task3-------------------------------------------------------------------------------
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
        ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let ageSort = users.sort((a, b) => {
//   if(a.age < b.age){
//       return -1
//   }
//   if(a.age > b.age){
//       return 1
//   }
// })
// console.log(ageSort);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let signCountUp = users.sort((a, b) => {
//
//     if(a.name.length < b.name.length){
//         return -1
//     }
//     if(a.name.length > b.name.length){
//         return 1
//     }
// })
// console.log(signCountUp);

// let signCountDown = users.sort((a, b) => {
//
//     if(a.name.length < b.name.length){
//         return 1
//     }
//     if(a.name.length > b.name.length){
//         return -1
//     }
// })
// console.log(signCountDown);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let addId = users.map((value, index) =>  {
//     let id = Object.assign({},value,{id: index})
//     return id
//
// })
// console.log(addId);
// // console.log(users);
//
// // - відсортувати його за індентифікатором
// let sort = addId.sort((a, b) => {
//     if(a.id < b.id){
//         return -1
//     }
//     if(a.id > b.id){
//         return 1
//     }
// })
// console.log(sort);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calc(a, b, callback) {
//     callback(a, b)
// }
// calc(1, 2, (a, b) => {
//         console.log(a + b);
//     }
// )
// calc(504,21,(a,b)=>{
//     console.log(a / b);})

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calc(a,b,c,callback){
//     callback(a,b,c)
// }
// calc(4,8,15.5,(a,b,c)=>{
//     console.log(a * b + c);
// })



// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//Task4------------------------------------------------------------------------------------------------
// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hatchback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hatchback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//     ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let engineVolume = cars.filter((value, index) => {
//     let elem = value;
//     if(value.volume >= 3){
//         console.log(value);
//     }
//     return elem;
// });
// console.log(engineVolume);

// - двигун = 2л
// let engineVolume = cars.filter(value => {
//     let elem = value;
//     if(value.volume === 2){
//         console.log(value);
//     }
//     return elem;
// })

// - виробник мерс
// let producer = cars.filter(value => {
//     let elem = value;
//     if(value.producer === "mercedes"){
//         console.log(value);
//     }
//     return elem;
// })

// - двигун більше 3х літрів + виробник мерседес
// let engineMers = cars.filter(value => {
//     let elem = value;
//     if(value.volume >= 3 && value.producer ==="mercedes"){
//         console.log(value);
//     }
//     return elem;
// })
// - двигун більше 3х літрів + виробник субару
// let engineMers = cars.filter(value => {
//     let elem = value;
//     if(value.volume >= 3 && value.producer ==="subaru"){
//         console.log(value);
//     }
//     return elem;
// })

// - сили більше ніж 300
// let power = cars.filter(value => {
//     let elem = value;
//     if(value.power >= 300){
//         console.log(value);
//     }
//     return elem;
// })

// - сили більше ніж 300 + виробник субару
// let powerSubaru = cars.filter(value => {
//     let elem = value;
//     if(value.power>=300 && value.producer ==="subaru"){
//         console.log(value);
//     }
//     return elem;
// })

// - мотор серіі ej
// let ejEngine = cars.filter((value, index, array1) =>  {
//     if(value.engine.includes("ej")){
//         console.log(value);
//     }
// })
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let car = cars.filter((value) =>  {
//     if(value.engine.includes("ej") && value.power ===300 && value.producer ==="subaru"){
//         console.log(value);
//     }
// })

// - двигун меньше 3х літрів + виробник мерседес
// let car = cars.filter(value => {
//     if(value.volume < 3 && value.producer ==="mercedes"){
//         console.log(value);
//     }
// })

// - двигун більше 2л + сили більше 250
// let car = cars.filter(value => {
//     if(value.volume > 2 && value.power > 250){
//         console.log(value);
//     }
// })

// - сили більше 250  + виробник бмв
// let car = cars.filter(value => {
//     if(value.power > 250 && value.producer === 'bmw'){
//         console.log(value);
//     }
// })


//Task5------------------------------------------------------------------------------------------------
    // - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//     ];

// -- отсортировать его по id пользователей
// let sortUsers = usersWithAddress.sort((a, b) => {
//     return a.id - b.id;
// })
// console.log(sortUsers);

// -- отсортировать его по id пользователей в обратном опрядке
// let sortUsers = usersWithAddress.sort((a, b) => {
//     return b.id - a.id;
// })
// console.log(sortUsers);

// -- отсортировать его по возрасту пользователей
// let sortUsers = usersWithAddress.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(sortUsers);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortUsers = usersWithAddress.sort((a, b) => {
//     return b.age - a.age;
// })
// console.log(sortUsers);

// -- отсортировать его по имени пользователей
// let sortUsers = usersWithAddress.sort((a, b) => {
//     if(a.name<b.name){
//         return -1;
//     }
//     if(a.name>b.name){
//         return 1;
//     }
// });
// console.log(sortUsers);

// -- отсортировать его по имени пользователей в обратном порядке
// let sortUsers = usersWithAddress.sort((a, b) => {
//     if(a.name<b.name){
//         return 1
//     }
//     if(a.name>b.name){
//         return -1
//     }
// })
// console.log(sortUsers);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortUsers = usersWithAddress.sort((a, b) => {
//     if(a.address.street<b.address.street){
//         return -1
//     }
//     if(a.address.street>b.address.street){
//         return 1
//     }
// })
// console.log(sortUsers);

// -- отсортировать его по номеру дома по возрастанию
// let sortUsers = usersWithAddress.sort((a, b) => {
//     return a.address.number - b.address.number;
// })
// console.log(sortUsers);

// -- отфильтровать (оставить) тех кто младше 30
// let filterUsers = usersWithAddress.filter(value => {
//     if(value.age<30){
//         console.log(value);
//     }
// })

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter = usersWithAddress.filter(value => {
//     if (value.status===false){
//         console.log(value);
//     }
// })

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter = usersWithAddress.filter(value => {
//     if (value.status){
//         console.log(value);
//     }
// })

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter = usersWithAddress.filter(value => {
//     if(value.address.number % 2 ===0){
//         console.log(value);
//     }
// })



// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//Task6-------------------------------------------------------------------------------
// Створити обєкт автомобіля з полями:
//     +Марка автомобля, рік випуску, потужність двигуна, власник, ціна, .
//     +Власник автомобіля теж має бути обєкт, у якого є поля Імя, вік, стаж водіння.
//     +Створити не менше 7 та не більше 20 машинок.
//     +Для початку вкладіть всі наші створені автомобілі в масив cars.
//


//
// const rootCars = [
//     {model: 'civic', prodYear: 1998, power: 100, owner: {name: 'Anna', age: 32, exp: 7}, price: 8000},
//     {model: 'corolla', prodYear: 2003, power: 90, owner: {name: 'Victor', age: 28, exp: 5}, price: 8500},
//     {model: 'tavria', prodYear: 1991, power: 42, owner: {name: 'Nazar', age: 19, exp: 1}, price: 800},
//     {model: 'mtz', prodYear: 1970, power: 8, owner: {name: 'Mykola', age: 58, exp: 35}, price: 5000},
//     {model: 'cx-5', prodYear: 2015, power: 180, owner: {name: 'Volodymyr', age: 24, exp: 4}, price: 17500},
//     {model: 'land-cruiser', prodYear: 2008, power: 200, owner: {name: 'Roman', age: 42, exp: 1}, price: 26300},
//     {model: 'almera', prodYear: 2010, power: 120, owner: {name: 'Ihor', age: 26, exp: 7}, price: 6550},
//     {model: 'duster', prodYear: 2012, power: 134, owner: {name: 'Vasyl', age: 28, exp: 1}, price: 10500},
//     {model: 'charger', prodYear: 2016, power: 600, owner: {name: 'Nestor', age: 34, exp: 4}, price: 48750},
//     {model: 'camry', prodYear: 2018, power: 250, owner: {name: 'Oleksandr', age: 38, exp: 20}, price: 36500},
// ]
//
// let cars = JSON.parse(JSON.stringify(rootCars));

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// Далі необхідно обрати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// function carsRepair(arr){
//     for (let i = 0; i < arr.length; i += 2) {
//         const car = arr[i];
//         car.repair = true;
//         car.price *= 1.05;
//         car.power *= 1.1;
//         console.log(`${car.model} new power is ${car.power}, and new price is ${car.price} $`);
//     }
// }
// carsRepair(cars);

//     На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// function newDrivers(){
//     // let newOwners = ['Orest','Oleh','Bohdan','Andrii','Yurii'];
//     for (const car of cars) {
//         if(car.repair){                                           ??????
//             car.owner = arguments;                              ??     ???
//             console.log(car);                                    ??    ???
//         }                                                             ??
//     }                                                                ??
// }
// newDrivers('Orest','mykola','serhii');                               ??


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// let driversTest = cars.forEach(value => {
//     if (value.owner.exp < 5 && value.owner.age > 25) {
//         value.owner.exp += 1;
//         console.log(`${value.owner.name} took 1 year courses and now he is more experienced!`);
//     }
// })

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let carsPrice = cars.reduce((acc,value)=>{
//     return acc + value.price
// },0);
// console.log(`Overall car price is ${carsPrice}`);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// let arr = [1, 2, 3, 5, 5, 5, 5, 7, 9, 9, 9];
//
// let minIndex = undefined;
// let maxIndex = undefined;
//
// function minMaxIndex(array, element) {
//     // debugger
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             if (minIndex === undefined) {
//                 minIndex = i;
//             } else {
//                 maxIndex = i;
//             }
//
//         }
//     }
//     if (minIndex && maxIndex) {
//         console.log(`Answer: MinIndex = ${minIndex}, MaxIndex = ${maxIndex}.`);
//     } else {
//         console.log(-1);
//     }
// }
//
// minMaxIndex(arr, 9);