const arr = [1, 4, 2, 4, 5]

let birthdayCakeCandles = (n) => {
    let numCandles = 0;
    let max = Math.max(...n)

    for (let i = 0; i < n.length; i++) {
        if (n[i] === max) {
            numCandles += 1;
        }
    }

    console.log(numCandles);
    return numCandles;
}