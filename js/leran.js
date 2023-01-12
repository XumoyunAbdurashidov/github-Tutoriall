"use strict";

const movies = prompt("what's your fovourite movies", "");

// item, index, arr ---------

const arr = ["apple", "cherry", "pitch"];
arr.forEach(function (index, item, arr) {
  console.log(`${index}: ${item} into arr ${arr}`);
});

// For in loopi haqida ----------

const theif = {
  age: 19,
  noun: "Ali",
  colors: {
    heir: "grey",
    stayle: "curley",
  },
};

// console.log(Object.keys(theif).length);

for (let key in theif) {
  console.log(`Prorperty ${key} has value ${theif[key]}`);
}
