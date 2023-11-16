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

// Bigint
let z = BigInt("123456789012345678901234567890");

// Boolean
let x = false;
let y = true;

// Undefined
let house;

// Null
let error = null;

// Symbol
const sym = Symbol("foo");

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

// Conditionlas 

if (condition) {

} else {

}

// Loops 

// for
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

// foreach
array.forEach(element => {
    element += 1
});

// forin
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}
// forof
for (const iterator of object) {

}

// Switch
switch (key) {
    case value:

        break;

    default:
        break;
}

// Functions

function greating() {
    console.log("Hello")
}

let goodBye = () => {
    console.log("Good Bye");
}