function calculateAlternativeSyntax(input) {
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != ' ') {
            stack.push(input[i]);
        }
    }

    let operator = stack[0];
    let operand1 = parseInt(stack[1]);
    let operand2 = parseInt(stack[2]);
    let result = 0;

    if (operator === '+') {
        result = operand1 + operand2
    }

    console.log(result);
}


// Example usage:
const alternativeExpression = '+ 3 4';
const result = calculateAlternativeSyntax(alternativeExpression);
console.log(result);