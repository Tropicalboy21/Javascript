function timeInWords(h, m) {

    let hour = h;
    let minutes = m;

    const units = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let decimals = ["ten", "eleven", "twelve", "thirteen", "fourteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];

    const parts = [" half", " quater"];

    const parts2 = [" o'clock", " to ", " past "]

    let timePt1 = 'hours';

    let timePt2 = "minutes";

    let finalTime = '';

    switch (h) {
        case 1:
            timePt1 = units[0];
            break;

        case 2:
            timePt1 = units[1];
            break;

        case 3:
            timePt1 = units[2];
            break;

        case 4:
            timePt1 = units[3];
            break;

        case 5:
            timePt1 = units[4];
            break;

        case 6:
            timePt1 = units[5];
            break;

        case 7:
            timePt1 = units[6];
            break;
        case 8:
            timePt1 = units[7];
            break;
        case 9:
            timePt1 = units[8];
            break;

        default:
            break;
    }


    if (m > 30) {
        m = 60 - m;
    }

    console.log(m);

    switch (m) {
        case 1:
            timePt2 = units[0];
            break;
        case 2:
            timePt2 = units[1];
            break;
        case 3:
            timePt2 = units[2];
            break;
        case 4:
            timePt2 = units[3];
            break;
        case 5:
            timePt2 = units[4];
            break;
        case 6:
            timePt2 = units[5];
            break;
        case 7:
            timePt2 = units[6];
            break;
        case 8:
            timePt2 = units[7];
            break;
        case 9:
            timePt2 = units[8];
            break;
        case 10:
            timePt2 = decimals[0];
            break;
        case 11:
            timePt2 = decimals[1];
            break;
        case 12:
            timePt2 = decimals[2];
            break;
        case 13:
            timePt2 = decimals[3];
            break;
        case 14:
            timePt2 = decimals[4];
            break;
        case 15:
            timePt2 = parts[1];
            break;
        case 16:
            timePt2 = decimals[5];
            break;
        case 17:
            timePt2 = decimals[6];
            break;
        case 18:
            timePt2 = decimals[7];
            break;
        case 19:
            timePt2 = decimals[8];
            break;
        case 20:
            timePt2 = decimals[9];
            break;
        case 21:
            timePt2 = decimals[10];
            break;
        case 22:
            timePt2 = decimals[11];
            break;
        case 23:
            timePt2 = decimals[12];
            break;
        case 24:
            timePt2 = decimals[13];
            break;
        case 25:
            timePt2 = decimals[14];
            break;
        case 26:
            timePt2 = decimals[15];
            break;
        case 27:
            timePt2 = decimals[16];
            break;
        case 28:
            timePt2 = decimals[17];
            break;
        case 29:
            timePt2 = decimals[18];
            break;
        case 30:
            timePt2 = parts[0];
            break;
        default:
            break;
    }

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
        finalTime = timePt2 + parts2[1] + timePt1;
    } else if (minutes > 30) {
        timePt1 = units[h]
        finalTime = timePt2 + " minutes" + parts2[1] + timePt1;
    }


    // return time;
    console.log(finalTime);

    console.log(decimals)

}

timeInWords(8, 50)