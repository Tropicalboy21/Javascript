// Variables

let name = "Lenin";
var lastname = "Ugalde";
const etnicity = "Half blood";

console.log(name, lastname, etnicity);

// Data types

// Numbers
let length = 7;
let width = 4.5;

// String
let string = "green"

// Boolean
let x = false;
let y = true;

// Undefined
let house;

// Object
let car = {
    brand: "Ferrari",
    color: "red"
};

// Object Array
let years = [2000, 2001, 2002, 2003, 2004, 2005];

// Object Date

let today = new Date();

// Format date object MM/DD/YYYY
let dd = today.getDate();

let mm = today.getMonth() + 1;

let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}

today = mm + "/" + dd + "/" + yyyy;

console.log(today);