let minimax = (arr) => {

    let min = Infinity;
    let max = -Infinity;

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr > max) {
            max = curr;
        }
        if (curr < min) {
            min = curr;
        }

        console.log(sum - min, sum - max);
    }
};

const a = [7, 69, 2, 221, 8974];
miniMaxSum(a);