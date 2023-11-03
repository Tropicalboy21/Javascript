let arr1 = [2, 5, 6];
let arr2 = [7, 10, 6];

let compareTriplets = function (a, b) {
    let aPoints = 0;
    let bPoints = 0;
    let points = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] > b[j]) {
                aPoints += 1;
            } else if (a[i] < b[j]) {
                bPoints += 1;
            } else if (a[i] = b[i]) {
                aPoints += 0;
                bPoints += 0;
            }

        }

    }

    points.push(aPoints);
    points.push(bPoints);

    return points
}

compareTriplets(arr1, arr2);