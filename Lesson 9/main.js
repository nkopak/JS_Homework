// setTimeout(()=>{
//     console.log('I was 1')
// },2000);
//
// setTimeout(()=>{
//     console.log('I was 2');
// }, 1500);
//
// setTimeout(()=>{
//     console.log('I was 3');
// }, 0)
//
// console.log("I always first)");

// function logFish(eat){
//     console.log('I have fish');
//     eat();
// }
//
// logFish(()=>{
//     console.log('I ate fish');
// })

// let car = false;
//
// setTimeout(()=>{
//     car = true;
//     console.log(car);
// },0)
//
// console.log(car);

// let time = 3000;
// let money = 0;
//
// function raise(cb){
//     setTimeout(()=>{
//         console.log('Working hard...');
//     },1500)
//     setTimeout(()=>{
//         money = 5000;
//         cb()
//     }, time)
// }
// raise(()=>{
//     console.log(`Now i have ${money} money`);
// })
// console.log(`I had ${money} money`);

// function buyCar(money, car){
//     console.log('Welcome in our dealership!');
//     console.log('Searching for your car, please wait...');
//
//     setTimeout(()=>{
//         if(money < 500){
//             car('You dont have enough money', null);
//         } else {
//             car(null, 'Honda');
//         }
//     }, 5000)
// }
//
// function driveCar(ride){
//     setTimeout(()=>{
//         console.log('Let`s go for a ride!');
//         ride();
//     },5000)
// }
//
// function coffee(time,cb){
//     setTimeout(()=>{
//         console.log('Have coffee with patsyky?');
//         if(time < 20){
//             cb('No, too soon', null)
//         } else {
//             cb(null, 'Yes, of course')
//         }
//
//     },5000)
// }
//
// buyCar(600,(err, resp)=>{
//     if(err){
//         console.log(err);
//         console.log('You need a bigger salary');
//         return;
//     }
//     console.log(`Your new car is ${resp}!`);
//
//         driveCar(()=>{
//             console.log(`Nice ride in ${resp}`);
//
//             coffee(5,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(data);
//             })
//         })
// })


// console.log('The day has started!');
//
// function day(energy, action,){
//
//     setTimeout(()=>{
//         if(energy <= 100){
//             console.log('You need more energy!');
//         } else {
//             action();
//         }
//     }, 1000)
// }
//
// day(250,()=>{
//     console.log('I woke up');
// })
//
// day(200,()=>{
//     setTimeout(()=>{
//         console.log('I had breakfast');
//     },1500)
// })
//
// day(200,()=>{
//     setTimeout(()=>{
//         console.log('I had breakfast');
//     },1500)
// })


// function breakfast(meal,eat){
//     setTimeout(()=>{
//         if(meal !== 'meat'){
//             console.log('You need to eat!');
//         } else {
//             eat();
//         }
//     }, 1000)
// }
// breakfast('meat',()=>{
//     console.log('I had breakfast');
// })

// let energy = 1000;
// function message(msg, energy){
//     console.log(msg)
//     console.log(`Залишелось ${energy} енергіі`)
//     console.log('---------------------------------------')
// }
// function wakeUp(en, cb) {
//     setTimeout(() => {
//         en -= 200;
//         if (en <= 0) {
//             cb('Ви вмерли уві сні')
//             return;
//         }
//         message('прокинувся', en)
//         cb(null, en)
//     }, 2000)
// }
//
// function eat(en, cb) {
//     setTimeout(() => {
//         en += 400
//         message('поїв', en)
//         cb(null, en)
//     }, 1500)
// }
//
// function goToWork(en, cb) {
//     setTimeout(() => {
//         en -= 300
//         if (en <= 0) {
//             cb('Вмер не дійшовши до роботи')
//             return;
//         }
//         message('на роботі', en)
//         cb(null, en)
//     }, 1200)
// }
//
// function work(en, cb){
//     setTimeout(()=>{
//         en -=800
//         if(en <= 0){
//             cb('Вмер на роботі:(');
//             return;
//         }
//         message('Закінчив працювати', en)
//         cb(null, en)
//     },1500)
// }
//
// wakeUp(energy, (err, data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     eat(data, (err, data)=>{
//         goToWork(data, (err, data)=>{
//             if (err){
//                 console.log(err);
//                 return;
//             }
//             work(data,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                     return ;
//                 }
//             })
//         })
//     })
// })

// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.



const dayGoesOn = 'День продовжується...';
const dayStop = 'День НЕ продовжується';


//======CALLBACK=====
// function wakeUp(time,cb){
//     console.log('--Ранок--');
//     setTimeout(()=>{
//         if(time < 7){
//             cb('Можеш ще спати:)', null)
//             console.error(dayStop);
//             return;
//         }
//         cb(null, 'Ти прокинувся!')
//         console.log(dayGoesOn);
//     },2700)
// }
//
//
// function eatBreakfast(food,cb){
//
//     setTimeout(()=>{
//         console.log('--Сніданок--');
//         if(!food){
//             cb('Немає що їсти! Біда, так далі не можна:(', null)
//             console.error(dayStop);
//             return;
//         }
//         cb(null, 'Ура! Ти поснідав і не вмер з голоду.')
//         console.log(dayGoesOn);
//     },3100)
// }
//
// function goToWork(time, cb){
//
//     setTimeout(()=>{
//         console.log('--В дорозі--');
//         if(time < 9){
//             cb('Сиди в хатці', null)
//             console.error(dayStop);
//             return
//         }
//         cb(null, 'Ти їдеш на роботу')
//         console.log(dayGoesOn);
//     },2600)
// }
//
// function work(doneTasks,cb){
//
//     setTimeout(()=>{
//         console.log('--На роботі--');
//         if(doneTasks > 25){
//             cb('Йооой. Ти вмер від перенапруження:(')
//             console.error(dayStop);
//             return;
//         }else if (doneTasks < 1){
//             cb('Ну шо ж ти так. Ніц не зробив. СИДИ ДО НОЧІ!', null);
//             console.error(dayStop);
//             return;
//         }
//         cb(null, 'Молодець, ти файно попрацював')
//         console.log(dayGoesOn);
//     },3600)
// }
//
// function wayHome(time,cb){
//
//     setTimeout(()=>{
//         console.log('--Кінець роботи--');
//         if(time < 18){
//             cb('Ти хотів піти з роботи раніше. Тебе з`їв бос :(',null)
//             console.error(dayStop);
//             return
//         }
//         cb(null, 'Робочий день закінчився, можеш їхати додому.')
//         console.log(dayGoesOn);
//     },3300)
// }
//
// function gym(weight,cb){
//
//     setTimeout(()=>{
//         console.log('--В залі--');
//         if(weight > 150){
//             cb('Йоой біда, тебе роздавила штанга:(', null)
//             console.error(dayStop);
//             return
//         }
//         cb(null, 'Ти підкачався. Супер!')
//         console.log(dayGoesOn);
//     },3100)
// }
//
// function feedDog(food, cb){
//
//     setTimeout(()=>{
//         console.log('--Пес--');
//         if(!food){
//             cb('Ти забув купити собаці їжу і він тебе з`їв:(', null)
//             console.error(dayStop);
//             return
//         }
//         cb(null, 'Ти нагодував собаку і тепер він тебе охороняє:)')
//         console.log(dayGoesOn);
//     },2900)
// }
//
// function lecture(isFocused, didHW, studyHours, cb){
//
//     setTimeout(()=>{
//         console.log('--Лекція--');
//         if(!isFocused && !didHW && !studyHours < 7){
//             cb('Ти був не уважний і перетворився на камінь')
//             console.error(dayStop);
//             return
//         }
//         cb(null, 'Ти добре вчився і був уважний')
//         console.log(dayGoesOn);
//     },3800)
// }
//
// function sleep(time, cb){
//
//     setTimeout(()=>{
//         console.log('--Спатки--');
//         if(time > 0 && time < 5){
//             cb('Ти не ліг спати вчасно. Тебе з`їв бабайко...',null)
//             console.error(dayStop);
//             return
//         }
//         cb(null, 'Є бой! Ти прожив цей день і залишився живим. Так тримати!')
//         // console.log(dayGoesOn);
//     },3100)
// }
//
// wakeUp(8,(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     eatBreakfast(true, (err,data)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(data);
//             goToWork(10,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(data);
//                 work(7,(err,data)=>{
//                     if (err){
//                         console.log(err);
//                         return;
//                     }
//                     console.log(data);
//
//                     wayHome(18,(err,data)=>{
//                         if (err){
//                             console.log(err);
//                             return;
//                         }
//                         console.log(data);
//                         gym(100,(err,data)=>{
//                             if (err){
//                                 console.log(err);
//                                 return;
//                             }
//                             console.log(data);
//                             feedDog(true,(err,data)=>{
//                                 if(err){
//                                     console.log(err);
//                                     return
//                                 }
//                                 console.log(data);
//                                 lecture(true,true,8,(err,data)=>{
//                                     if (err){
//                                         console.log(err);
//                                         return
//                                     }
//                                     console.log(data);
//                                     sleep(2,(err,data)=>{
//                                         if(err){
//                                             console.log(err);
//                                             return;
//                                         }
//                                         console.log(data);
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//     })
// })



//======PROMISES=======
function wakeUp(time) {
    return new Promise((resolve, reject) => {
        console.log('--Ранок--');
        setTimeout(() => {
            if (time < 7) {
                console.error(dayStop);
                reject('Занадто рано щоб прокидатися')
            }
            resolve('Ти прокинувся!')
        }, 2700)
    })
}


function eatBreakfast(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--Сніданок--');
            if (!food) {
                console.error(dayStop);
                reject('Немає що їсти! Біда, так далі не можна:(')
            }
            resolve('Ура! Ти поснідав і не вмер з голоду.')
        }, 3100)
    })
}

function goToWork(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--В дорозі--');
            if (time < 9) {
                console.error(dayStop);
                reject('Сиди в хатці')
            }
            resolve('Ти їдеш на роботу')
        }, 2600)
    })
}

function work(doneTasks) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--На роботі--');
            if (doneTasks > 25) {
                console.error(dayStop);
                reject('Йооой. Ти вмер від перенапруження:(')
            } else if (doneTasks < 1) {
                console.error(dayStop);
                reject('Ну шо ж ти так. Ніц не зробив. ПРАЦЮЄШ ДО НОЧІ!');
            }
            resolve('Молодець, ти файно попрацював')
        }, 3600)
    })
}

function wayHome(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--Кінець роботи--');
            if (time < 18) {
                console.error(dayStop);
                reject('Ти хотів піти з роботи раніше. Тебе з`їв бос :(')
            }
            resolve('Робочий день закінчився, можеш їхати додому.')
        }, 3300)
    })
}

function gym(weight) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--В залі--');
            if (weight > 150) {
                console.error(dayStop);
                reject('Йоой біда, тебе роздавила штанга:(')
            }
            resolve('Ти підкачався. Супер!')
        }, 3100)
    })
}

function feedDog(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--Пес--');
            if (!food) {
                console.error(dayStop);
                reject('Ти забув купити собаці їжу і він тебе з`їв:(')
            }
            resolve('Ти нагодував собаку і тепер він тебе охороняє:)')
        }, 2900)
    })
}

function lecture(isFocused, didHW, studyHours) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--Лекція--');
            if (!isFocused && !didHW && !studyHours < 7) {
                console.error(dayStop);
                reject('Ти був не уважний і перетворився на камінь')
            }
            resolve('Ти добре вчився і був уважний')
        }, 3800)
    })
}

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--Спатки--');
            if (!time > 2 && !time < 5) {
                console.error(dayStop);
                reject('Ти не ліг спати вчасно. Тебе з`їв бабайко...')
            }
            resolve('Є бой! Ти прожив цей день і залишився живим. Так тримати!')
        }, 3100)
    })
}
//
// wakeUp(8)
//     .then((wakeUp) => {
//         console.log(wakeUp);
//         console.log(dayGoesOn);
//         return eatBreakfast(true)
//     })
//     .then((eat) => {
//         console.log(eat);
//         console.log(dayGoesOn);
//         return goToWork(10)
//     })
//     .then((goToWork) => {
//         console.log(goToWork);
//         console.log(dayGoesOn);
//         return work(5)
//     })
//     .then((work) => {
//         console.log(work);
//         console.log(dayGoesOn);
//         return wayHome(18)
//     })
//     .then((wayHome) => {
//         console.log(wayHome);
//         console.log(dayGoesOn);
//         return gym(100)
//     })
//     .then((gym) => {
//         console.log(gym);
//         console.log(dayGoesOn);
//         return feedDog(true)
//     })
//     .then((feedDog) => {
//         console.log(feedDog);
//         console.log(dayGoesOn);
//         return lecture(true, true, 8)
//     })
//     .then((lecture) => {
//         console.log(lecture);
//         console.log(dayGoesOn);
//         return sleep(2)
//     })
//     .then((sleep) => {
//         console.log(sleep);
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('Кінець');
//     })


// ==========ASYNC--AWAIT====================

async function day() {
    try {
        const wake = await wakeUp(8);
        console.log(wake);
        console.log(dayGoesOn);

        const eat = await eatBreakfast(true);
        console.log(eat);
        console.log(dayGoesOn);

        const goTo = await goToWork(10);
        console.log(goTo);
        console.log(dayGoesOn);

        const working = await work(5);
        console.log(working);
        console.log(dayGoesOn);

        const way = await wayHome(18);
        console.log(way);
        console.log(dayGoesOn);

        const sport = await gym(80);
        console.log(sport);
        console.log(dayGoesOn);

        const dog = await feedDog(true);
        console.log(dog);
        console.log(dayGoesOn);

        const study = await lecture(true, true, 8);
        console.log(study);
        console.log(dayGoesOn);

        const sleeping = await sleep(2);
        console.log(sleeping);

    } catch (error) {
        console.log(error);
    }
}

day();







