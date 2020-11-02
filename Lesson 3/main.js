//Task1--------------------------------------------------------------------------------------
console.log("Task1--------------------------");
//-- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

const objDog = {
    name: "Simon",
    age: 3,
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
    name: "Internat",
    author: "Serhii Zhadan",
    pages: 335,
    price: 190,
    isGift: true
}



//Task2--------------------------------------------------------------------------------------
console.log("Task2--------------------------");
//-- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

const arrDogs = ["Dixie", "Barbos", "Sirko", "Vilson", "Rex"];
const arrPeople = ["Yurii", "Andrii", "Bohdan", "Volodymyr", "Maksym"];
const arrCars = ["Honda", "Skoda", "Mazda", "Dacia", "Tavria"];


//Task3--------------------------------------------------------------------------------------
console.log("Task3--------------------------");
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка