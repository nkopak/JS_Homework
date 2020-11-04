//Task1--------------------------------------------------------------------------------------
console.log("Task1--------------------------");
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

const objDog = {
    breed: "labrador",
    speed: 40,
    mood: "Great"
};

const objHuman = {
    name: "David",
    age: 34,
    hobby: ['music','sport'],
    girlfriend: false,
    job: {
        company: "WHO",
        speciality: "Inspector"
    }
};

const objCar = {
    model: "Fabia",
    brand: "Skoda",
    engineType: "gasoline",
    maxSpeed: 175,
    hybrid: false
};

const objApartment = {
    adress: "Shevchenko street",
    price: 40000,
    area: 80,
    neighbours: true,
    view: "Not bad"
};

const objBook = {
    author: "Serhii Zhadan",
    pages: 335,
    price: 190,
    isGift: true
}

//Task2--------------------------------------------------------------------------------------
console.log("Task2--------------------------");
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

const objHouse = {
    floors: 2,
    rooms: ["living", "bedroom", "bathroom", "kitchen",],
    area: 150,
    extra: {
        garage: true,
        garden: true,
        pool: false
    },
    location: "Suburbs"
}
const objDriver = {
    name: "Gustavo",
    cars: ["opel", "toyota", "honda", "fiat"],
    experience: 15,
    championships: {
        rally2020: "first",
        rally2019: "third",
        drift2020: "second"
    },
    family: true
}
const objToy = {
    color: "red",
    sounds: ["bark", "meow", "moo"],
    price: 23.99,
    parts: {
        buttons: 5,
        wheels: 2,
    },
    isChildHappy: true
}
const objDesk = {
    color: "cherry",
    previousOwners: ["Mykola", "Igor"],
    new: false,
    parts: {
        wood: 5,
        paint: true,
    },
    chairs: 6
}
const objBag = {
    color: "pink",
    material: ["leather", "steel", "plastic"],
    new: true,
    type: {
        women: true,
        brand: "B&M",
        model: "TSRTS"
    },
    price: 56.49
}

//Task3--------------------------------------------------------------------------------------
console.log("Task3--------------------------");
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

for(const value in objDog){
    console.log("key: " + value)
}
for(const value in objHuman){
    console.log("key: " + value)
}
for(const value in objCar){
    console.log("key: " + value)
}
for(const value in objApartment){
    console.log("key: " + value)
}
for(const value in objBook){
    console.log("key: " + value)
}
for(const value in objHouse){
    console.log("key: " + value)
}
for(const value in objDriver){
    console.log("key: " + value)
}
for(const value in objToy){
    console.log("key: " + value)
}
for(const value in objDesk){
    console.log("key: " + value)
}
for(const value in objBag){
    console.log("key: " + value)
}


//Task4--------------------------------------------------------------------------------------
console.log("Task4--------------------------");
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
let objectKeys = Object.keys(objDog) +"; "+ Object.keys(objHuman) +"; "+ Object.keys(objCar) +"; "+ Object.keys(objApartment) +"; "+
    Object.keys(objBook) +"; "+Object.keys(objHouse) +"; "+Object.keys(objDriver) +"; "+Object.keys(objToy) +"; "+Object.keys(objDesk) +"; "+Object.keys(objBag);
console.log(objectKeys);


//Task5--------------------------------------------------------------------------------------
console.log("Task5--------------------------");
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
const arrCars = [
    {model: 'civic', prodYear: 1998, power: 100, color: "blue"},
    {model: 'corolla', prodYear: 2003, power: 90, color: "grey"},
    {model: 'tavria', prodYear: 1991, power: 42, color: "red"},
    {model: 'mtz', prodYear: 1970, power: 8, color: "yellow"},
    {model: 'cx-5', prodYear: 2015, power: 180, color: "beige"},
    {model: 'land-cruiser', prodYear: 2008, power: 200, color: "black"},
    {model: 'almera', prodYear: 2010, power: 120, color: "white"},
    {model: 'duster', prodYear: 2012, power: 134, color: "green"},
    {model: 'charger', prodYear: 2016, power: 600, color: "pink"},
    {model: 'camry', prodYear: 2018, power: 250, color: "cyan"},
]


//Task6--------------------------------------------------------------------------------------
console.log("Task6--------------------------");
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
const arrCities = [
    {name: 'lviv', population: 800000, country: "Ukraine", region: "Lvivska oblast"},
    {name: 'odesa', population: 1300000, country: "Ukraine", region: "Odeska oblast"},
    {name: 'kyiv', population: 3100000, country: "Ukraine", region: "Kyivska oblast"},
    {name: 'warsaw', population: 4000000, country: "Poland", region: "Warsowia"},
    {name: 'plzen', population: 450000, country: "Czech republic", region: "Plzen district"},
    {name: 'oakland', population: 250000, country: "US", region: "OAK"},
    {name: 'san-francisco', population: 8000000, country: "US", region: "california"},
    {name: 'tokio', population: 35000000, country: "Japan", region: "Tokio"},
    {name: 'perth', population: 150000, country: "Australia", region: "west coast"},
    {name: 'delhi', population: 25000000, country: "india", region: "somewhere"},
]


//Task7--------------------------------------------------------------------------------------
console.log("Task7--------------------------");
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
const arrCarsWithDrivers = [
    {model: 'civic', prodYear: 1998, power: 100, color: "blue", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'corolla', prodYear: 2003, power: 90, color: "grey", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'tavria', prodYear: 1991, power: 42, color: "red", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'mtz', prodYear: 1970, power: 8, color: "yellow", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'cx-5', prodYear: 2015, power: 180, color: "beige", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'land-cruiser', prodYear: 2008, power: 200, color: "black", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'almera', prodYear: 2010, power: 120, color: "white", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'duster', prodYear: 2012, power: 134, color: "green", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'charger', prodYear: 2016, power: 600, color: "pink", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
    {model: 'camry', prodYear: 2018, power: 250, color: "cyan", driver: {
        name:123, age: 123, sex: 123, experience: 123
        }},
]



//Task8--------------------------------------------------------------------------------------
console.log("Task8--------------------------");
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
let iCars = 0;

while(iCars < arrCars.length){
    console.log(arrCars[iCars]);
    iCars++;
}


let iCities = 0;
while(iCities < arrCities.length){
    console.log(arrCities[iCities]);
    iCities++;
}

let iCarsWithDrivers = 0;
while(iCarsWithDrivers < arrCarsWithDrivers.length){
    console.log(arrCarsWithDrivers[iCarsWithDrivers]);
    iCarsWithDrivers++;
}

//Task9--------------------------------------------------------------------------------------
console.log("Task9--------------------------");
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < arrCars.length; i++) {
    console.log(arrCars[i]);
}

for (let i = 0; i < arrCities.length; i++) {
    console.log(arrCities[i]);
}

for (let i = 0; i < arrCarsWithDrivers.length; i++) {
    console.log(arrCarsWithDrivers[i]);
}

//Task10--------------------------------------------------------------------------------------
console.log("Task10--------------------------");
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (const element of arrCars) {
    console.log(element);
}

for (const element of arrCities) {
    console.log(element);
}

for (const element of arrCarsWithDrivers) {
    console.log(element);
}

//Task11--------------------------------------------------------------------------------------
console.log("Task11--------------------------");
// - взять объекты из задания 1 и превратить каждый в json.
let string1 = JSON.stringify(objDog);
let string2 = JSON.stringify(objHuman);
let string3 = JSON.stringify(objCar);
let string4 = JSON.stringify(objApartment);
let string5 = JSON.stringify(objBook);
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(string5);



//Task12--------------------------------------------------------------------------------------
console.log("Task12--------------------------");
// - взять json из задания 11 и превратить их обратно в объекты.
let parse1 = JSON.parse(string1);
let parse2 = JSON.parse(string2);
let parse3 = JSON.parse(string3);
let parse4 = JSON.parse(string4);
let parse5 = JSON.parse(string5);
console.log(parse1);
console.log(parse2);
console.log(parse3);
console.log(parse4);
console.log(parse5);


//Task13--------------------------------------------------------------------------------------
console.log("Task13--------------------------");
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (const element of arrCars) {
    console.log(JSON.stringify(element));
}

//Task14--------------------------------------------------------------------------------------
console.log("Task14--------------------------");
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json.
for (let i = 0; i < arrCities.length; i++) {
    console.log(JSON.stringify(arrCities[i]));
}


//Task15--------------------------------------------------------------------------------------
console.log("Task15--------------------------");
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
for (const element of arrCarsWithDrivers) {
    console.log(JSON.stringify(element));
}


//Task16--------------------------------------------------------------------------------------
console.log("Task16--------------------------");
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
    ];

for (const element of users) {
    console.log(element);
}

for (const element in users) {
    console.log("Skills are: " + users[element].skills);
}


//Task17--------------------------------------------------------------------------------------
console.log("Task17--------------------------");
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let arrSkills = [];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

for (const element in users) {
    console.log("Skills are: " + users[element].skills);
    arrSkills.push(users[element].skills);
}

console.log(arrSkills);


//Task18--------------------------------------------------------------------------------------
console.log("Task18--------------------------");
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ];
//
for(const element of users){
    console.log(element);
}

for(const element of users){
    console.log(element.skills);
}

