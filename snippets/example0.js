const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunction = arr => {
    return arr.map(x => x + 3).filter(x => x < 7);
}

console.log(myFunction(myNumbers));