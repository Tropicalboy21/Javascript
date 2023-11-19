let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

let person = {
    name: "Armando",
    age: "32",
    nationality: "Cuban",
    location: "Miami"
}

let peopleUpdate = ({ name, age, nationality, location }) => {
    console.log(name);
    console.log(age);
    console.log(nationality);
    console.log(location);
}


peopleUpdate(person);