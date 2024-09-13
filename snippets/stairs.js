function stairs(n){
    let stair = 0;
    for (let i = n; i > 0; i--) {
        let hashtag = "#"
        stair++;

        console.log(`${' '.repeat(i - 1 ) + hashtag.repeat(stair)}`);
    }
}

stairs(6);