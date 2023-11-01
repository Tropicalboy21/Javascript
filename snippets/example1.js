let animals = ["kangaroo", "bear", "coyote"];

// let key = element, index => element[index];
// let key = element => element[0];
// let key = (element, index) => element[--index];
let key = (element, index) => element[index];

if (animals.map(key).join("") === "key") {
    console.log("wild animals");
}