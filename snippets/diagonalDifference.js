function diagonalDifference(arr) {
    let n = arr.length;
    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                diag1 += arr[i][j];
            }
            if (i + j === n - 1) {
                diag2 += arr[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}

const a = [1, 2, 3, 4, 5, 6, 9, 8, 9];
