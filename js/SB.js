"use strict";

// Amaliyot =======
// let numberOffSeries;

// function myFun() {
//   numberOffSeries = +prompt("Nechta serial ko'rdingiz");
//   while (
//     numberOffSeries == "" ||
//     numberOffSeries == null ||
//     isNaN(numberOffSeries)
//   ) {
//     numberOffSeries = +prompt("Nechta serial ko'rdingiz");
//   }
// }
// myFun();

// const seriesDB = {
//   count: numberOffSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMySeries() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("oxirgi ko'rgan serialingiz"),
//       b = prompt("Necha baho berasiz");

//     if (a !== null && b !== null && a != "" && b != "") {
//       seriesDB.series[a] = b;
//       console.log("Done");
//     } else {
//       i--;
//       console.log("Eror");
//     }
//   }
// }
// rememberMySeries();

// function detictLevelSeries() {
//   if (seriesDB.count < 5) {
//     console.log("Kam serial ko'ryapsiz");
//   } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     conslole.log("Siz klassic tomoshabin ekansiz");
//   } else if (seriesDB.count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz");
//   } else {
//     console.log("Eror");
//   }
// }
// detictLevelSeries();

// function showDB(hidden) {
//   if (!hidden) {
//     console.log(seriesDB);
//   }
// }
// showDB(seriesDB.privat);

// function writeGenres() {
//   for (let i = 0; i <= 2; i++) {
//     const genre = prompt(`Yaxshi ko'ragan Janiringiz ${i + 1}`);
//     seriesDB.genres[i] = genre;
//   }
// }
// writeGenres();
// Amaliyot ======

// Clone ========
// function nusxaObj(obj) {
//   let objNusxa = {};

//   for (let key in obj) {
//     objNusxa[key] = obj[key];
//   }

//   return objNusxa;
// }

// const numbers = {
//   x: 10,
//   y: 5,
// };

// const newNumbers = nusxaObj(numbers);

// newNumbers.x = 15;

// console.log(numbers);
// console.log(newNumbers);
//clone ======

// clone new ======
// const numbers = {
//   x: 10,
//   y: 5,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };

// const newNumber = Object.assign({}, numbers);

// newNumber.x = 15;

// console.log(newNumber);
//clone new ======

//clone add =====
// const numbers = {
//   x: 10,
//   y: 5,
// };

// const addNumber = {
//   z: 15,
// };

// const allNumbers = Object.assign(numbers, addNumber);

// console.log(allNumbers);
//clone add =====

//clone arr =====
// const arr = [1, 2, 3];

// const newArr = arr.slice();
// newArr[1] = "Samar";

// console.log(arr);
// console.log(newArr);
//clone arr===

//clone arr add =====
// const leverpool = ["Salah", "Mane"];
// const manCity = ["Mahrez"];

// const mixPlayer = [...leverpool, ...manCity];

// console.log(mixPlayer);
