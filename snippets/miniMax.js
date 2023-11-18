let miniMax = (arr) => {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        sum += curr
        if (curr > max) {
            max = curr;
        }
        if (curr < min) {
            min = curr;
        }
    }

    console.log(sum - max, sum - min);
};

const a = [7, 69, 2, 221, 8974];
miniMax(a);