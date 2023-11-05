'use strict';
// Arrays;

const array = ["apple", "bloomberg", "casio"];

// Sets

const brands = new Set(["Humblot", "Mercedes-Benz", "Samsung"]);

// Array.map
const symbols = ["hello", "nepal", "cumbia"];
const numbers1 = [45, 4, 9, 16, 25];


let al = array.length;
let bl = brands.size;


if (al === 3 && bl === 3) {
    array.push("apple");
    brands.add("Humblot");
}

let element = "";

array.forEach(function (value) {
    element += value + " ✿ ";
})

let brand = "";

brands.forEach(function (value) {
    brand += value + " ✿ ";
})

document.getElementById("array").innerHTML = element;
document.getElementById("sets").innerHTML = brand;

let combination = (element, index) => element[index];

if (symbols.map(combination).join("") === "hem") {
    console.log("Happy world");
}
const numbers2 = myFunction(numbers1);

document.getElementById('map').innerHTML = numbers2;

function myFunction(value) {
    return value;
}



