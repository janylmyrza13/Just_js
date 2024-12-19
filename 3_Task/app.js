/*Написать следующую программу: есть массив со значениями температуры, например: [25, 12, -2, 39, 0, 14, -10]. С помощью цикла вместо значения температуры вывести его ощущение. Например: от 0 - 10 - Холодно, 11 - 20 Прохладно, 21-25 Облачно, 26-32 Тепло, 33+ Жарко, -10 - 0 Очень холодно, ниже -10 морозно.
✳️ Есть массив с номерами банковских карт например, вот такой: ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]. Нужно посчитать сколько в этом массиве карт платежной системы VISA (у них номер карты начинается с цифры 4). В сообщение пользователю вывести в таком виде: Карт VISA 4 из 7.
Подсказка: чтобы получить длину массива используйте array.length
 ✳️ Есть массив с ИНН клиентов, например: ["12102199501457", "2220219950151", "02102199501457"]. Нужно в два отдельных массива рассортировать данные по следующим правилам: если ИНН начинается с 1 или 2, то положить в массив физических лиц. А если ИНН начинается с 0 то положить в массив юридических лиц. */


// 1. Вывести ощущение температуры

// let temperatures = [25, 12, -2, 39, 0, 14, -10];
// for (i = 0; i < temperatures.length; i++) {
//     let temperature = temperatures[i];
//     if (temperature >= 0 && temperature <= 10) {
//         console.log(temperature +'- Холодно');
//     } else if (temperature >= 11 && temperature <= 20) {
//         console.log(temperature +'- Прохладно');
//     } else if (temperature >= 21 && temperature <= 25) {
//         console.log(temperature +'- Облачно');
//     } else if (temperature >= 26 && temperature <= 32) {
//         console.log(temperature +'- Тепло');
//     } else if (temperature >= 33) {
//         console.log(temperature +'- Жарко');
//     } else {
//         console.log(temperature +'- Очень холодно');
//     }
    
// }


// 2. Посчитать карты VISA

// let cardNumbers = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
// for (i = 0; i < cardNumbers.length.lengh; i++){
//     let cardNumber = cardNumbers[i];
//     if (cardNumbers[i].startsWith('4')) {
//         console.log('Карта  Visa' + cardNumbers[i]+ 'из' + '' + cardNumbers.length);
//     }
// } 


// Есть массив с ИНН клиентов, например: ["12102199501457", "2220219950151", "02102199501457"]. Нужно в два отдельных массива рассортировать данные по следующим правилам: если ИНН начинается с 1 или 2, то положить в массив физических лиц. А если ИНН начинается с 0 то положить в массив юридических лиц. */


// let cardNumberINN = ["12102199501457", "2220219950151", "02102199501457"];
// let physicalPersons = [];
// let physical = [];
// for ( i = 0; i < cardNumberINN.length; i++) {
//     let cardNumber = cardNumberINN[i];
//     if (cardNumber.startsWith('1') || cardNumber.startsWith('2')) {
//         physicalPersons.push(cardNumber);
//     } else {
//         physical.push(cardNumber);
//     }
// }
// console.log('Physical Persons',physicalPersons);
// console.log('other',physical);
