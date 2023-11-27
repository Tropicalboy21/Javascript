function calculateAlternativeSyntax(input) {
    const stackOperators = [];
    const stackOperands = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] != ' ' && input[i] === '+' || input[i] === '-' || input[i] === '*' || input[i] === '/') {
            stackOperators.push(input[i]);
        } else if (input[i] != ' ') {
            stackOperands.push(parseInt(input[i]));
        }
    }

    let result = 0;


    let operator = stackOperators[0];
    let operand1 = stackOperands[0];
    let operand2 = stackOperands[1];

    switch (operator) {
        case "+":
            result = operand1 + operand2
            break;
        case "-":
            result = operand1 - operand2
            break;
        case "*":
            result = operand1 * operand2
            break;
        case "/":
            result = operand1 / operand2
            break;
    }





    console.log(stackOperands);
    console.log(stackOperators);
    console.log(result);
}


// Example usage:
const expression = '- 3 * 4 5';
const expression2 = '- 3 4';
calculateAlternativeSyntax(expression);