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

    if (stackOperands.length === 1) {

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
    } else if (stackOperands.length >= 2) {

        let operator1 = stackOperators[0];
        let operator2 = stackOperators[stackOperators.length - 1];
        let operand1 = stackOperands[0]
        let operand2 = stackOperands[0]


        console.log(operator1, operator2);
    }






    console.log(stackOperands);
    console.log(stackOperators);
    console.log(result);
    console.log(operator);
}


// Example usage:
const expression = '- 3 * 4 5';
const expression2 = '- 3 4';
calculateAlternativeSyntax(expression);