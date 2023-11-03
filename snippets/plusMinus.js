function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] == 0) {
            zero++;
        } else if (arr[i] < 0) {
            negative++
        }
    }

    const positiveRatio = positive / n;
    const negativeRatio = negative / n;
    const zeroRatio = zero / n;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

const ratios = [1, 1, 0, -1, -1];

plusMinus(ratios);