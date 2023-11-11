let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

let bigSum = (x) => {
    let totalSum = 0;

    x.forEach(number => {
        totalSum += number
    });

    return totalSum;
}

bigSum(arr)