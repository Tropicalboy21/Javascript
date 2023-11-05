// Arrays;

const array = ["apple", "bloomberg", "casio"];

// Sets

const brands = new Set(["Humblot", "Mercedes-Benz", "Samsung"]);


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
