function timeInWords(h, m) {

    let hour = h;
    let minutes = m;

    let hours = ["one", "two", "three", "four", "five", "six"];

    let time = 'time in words';

    switch (h) {
        case 1:
            time = "one";
            break;

        case 2:
            time = "two";
            break;

        case 3:
            time = "three";
            break;

        case 4:
            time = "four";
            break;

        case 5:
            time = "five";
            break;

        case 6:
            time = "six";
            break;

        default:
            break;
    }


    return time;


}


timeInWords(1, 4)