function areBracketsBalance(expr) {
    let i = -1;
    let stack = [];

    for (let bracket of expr) {
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
            i++
        } else {
            if (i >= 0 && ((stack[i] === "(" && bracket === ")") || (stack[i] === "{" && bracket === "}") || (stack[i] === "[" && bracket === "]"))) {
                stack.pop();
                i--;
            } else {
                return false;
            }
        }
    }
    return i === -1;
}

function isBalanced(t) {
    if (areBracketsBalance(t)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

let s = "{[(])}";

isBalanced(s);
