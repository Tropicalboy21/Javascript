function encryption(str) {

    let l = str.length;
    let k = 0;
    let row = Math.floor(Math.sqrt(l));
    let column = Math.ceil(Math.sqrt(l));
    let encrypted = "";

    if (row * column < l) {
        row = column;
    }

    let s = new Array(row);
    for (let i = 0; i < row; i++) {
        s[i] = new Array(column);
        for (let j = 0; j < column; j++) {
            s[i][j] = 0;
        }
    }

    // Convert the string into a grid
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (k < str.length)
                s[i][j] = str[k];
            k++;
        }
    }

    // Get each column as a string
    for (let j = 0; j < column; j++) {
        let columnStr = "";
        for (let i = 0; i < row; i++) {
            if (s[i][j] == 0) {
                break;
            }
            columnStr += s[i][j];
        }
        encrypted += columnStr + " ";
    }

    return encrypted
}

let message = "GEEKSFORGEEKS";

encryption(message);


