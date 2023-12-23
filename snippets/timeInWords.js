function timeInWords(h, m) {

    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 'eleven', 'twelve', "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half"];
    const parts2 = [" o' clock", " to ", " past "];

    let minutes = m;
    let l = numbers.length
    let finalTime = "Time";
    let timePt1 = numbers[h % 12 - 1 || 0];
    let timePt2 = (m > 30) ? numbers[60 - m - 1] : (m === 30) ? numbers[l - 1] : (m === 15) ? numbers[l / 2 - 1] : numbers[m - 1];

    if (minutes === 0) {
        timePt2 = parts2[0]
        finalTime = timePt1.concat(timePt2);
    } else if (minutes === 1) {
        finalTime = timePt2 + " minute" + parts2[2] + timePt1;
    } else if (minutes >= 2 && minutes <= 14) {
        finalTime = timePt2 + " minutes" + parts2[2] + timePt1;
    } else if (minutes === 15) {
        finalTime = timePt2 + parts2[2] + timePt1;
    } else if (minutes >= 16 && minutes <= 29) {
        finalTime = timePt2 + " minutes" + parts2[2] + timePt1;
    } else if (minutes === 30) {
        finalTime = timePt2 + parts2[2] + timePt1;
    } else if (minutes === 45) {
        timePt1 = numbers[h]
        finalTime = timePt2 + parts2[1] + timePt1;
    } else if (minutes > 30) {
        timePt1 = numbers[h]
        finalTime = timePt2 + " minutes" + parts2[1] + timePt1;
    }

    // return finalTime;
    console.log(finalTime);
    console.log(numbers)

}

timeInWords(5, 45);