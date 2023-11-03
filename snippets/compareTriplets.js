let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

let compareTriplets = function (a, b) {
    let aPoints = 0;
    let bPoints = 0;
    let points = [];

    for (let i = 0; i < a.length; i++) {

        if (a[i] > b[i]) {
            aPoints += 1;
        } else if (a[i] < b[i]) {
            bPoints += 1;
        } else if (a[i] = b[i]) {
            aPoints;
            bPoints;
        }

    }
    points.push(aPoints);
    points.push(bPoints);

    console.log(points);

    return points
}

compareTriplets(arr1, arr2);