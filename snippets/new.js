function calculateAlternativeSyntax(input) {
    const stackOperators = [];
    const stackOperands = [];
    const expression = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] != ' ' && input[i] === '+' || input[i] === '-' || input[i] === '*' || input[i] === '/') {
            stackOperators.push(input[i]);
            expression.push(input[i]);
        } else if (input[i] != ' ') {
            stackOperands.push(parseInt(input[i]));
            expression.push(parseInt(input[i]));

        }
    }

    let result = 0;
    let value1 = expression[0];
    let value2 = expression[1];

    if (stackOperators.length === 1) {

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

    } else if (typeof value1 == 'string' && typeof value2 === 'number') {

        let operator1 = stackOperators[0];
        let operator2 = stackOperators[stackOperators.length - 1];
        let operand1 = stackOperands[0]
        let operand2 = stackOperands[1]
        let operand3 = stackOperands[2]
        let temp = 0

        switch (operator2) {
            case '*':
                temp = operand2 * operand3
                break;
            case '/':
                temp = operand2 / operand3
                break;
            case '-':
                temp = operand2 - operand3
                break;
            case '+':
                temp = operand2 + operand3
                break;
            default:
                break;
        }

        switch (operator1) {
            case '*':
                result = operand1 * temp
                break;
            case '/':
                result = operand1 / temp
                break;
            case '-':
                result = operand1 - temp
                break;
            case '+':
                result = operand1 + temp
                break;
            default:
                break;
        }

    } else if (typeof value1 == 'string' && typeof value2 === 'string') {

        let operator1 = stackOperators[0];
        let operator2 = stackOperators[1];
        let operand1 = stackOperands[0]
        let operand2 = stackOperands[1]
        let operand3 = stackOperands[2]
        let temp = 0

        switch (operator2) {
            case '*':
                temp = operand1 * operand2
                break;
            case '/':
                temp = operand1 / operand2
                break;
            case '-':
                temp = operand1 - operand2
                break;
            case '+':
                temp = operand1 + operand2
                break;
            default:
                break;
        }

        switch (operator1) {
            case '*':
                result = operand3 * temp
                break;
            case '/':
                result = operand3 / temp
                break;
            case '-':
                result = operand3 - temp
                break;
            case '+':
                result = operand3 + temp
                break;
            default:
                break;
        }
    }

    console.log(result);
    console.log(stackOperands);
    console.log(stackOperators);
    console.log(expression);

}

// Example usage:
const expression1 = '- 3 4';
const expression2 = '- 3 * 4 5';
const expression3 = '* + 3 4 5';
calculateAlternativeSyntax(expression1);
calculateAlternativeSyntax(expression2);
calculateAlternativeSyntax(expression3);
