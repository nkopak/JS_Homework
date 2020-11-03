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

console.log(arrDogs,arrPeople,arrCars);


//Task3--------------------------------------------------------------------------------------
console.log("Task3--------------------------");
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
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
//Task4--------------------------------------------------------------------------------------
console.log("Task4--------------------------");
//Дан массив:
// let users
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
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
console.log(users[7].status);
console.log(users[4].status);
console.log(users[users.length - 2].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[4].age +" "+ users[4].name);
console.log(users[5].age +" "+ users[5].status)










