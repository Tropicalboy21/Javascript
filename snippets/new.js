function calculateAlternativeSyntax(expression) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    let currentNumber = '';
    let currentOperator = null;

    const processStack = () => {
        if (currentNumber !== null) {
            stack.push(parseFloat(currentNumber));
            currentNumber = '';
        }
        if (currentOperator !== null) {
            stack.push(currentOperator);
            currentOperator = null;
        }
    };

    for (const char of expression) {
        if (!isNaN(char)) {
            // Accumulate digits to form a number
            currentNumber += char;
        } else if (char === '+' || char === '-') {
            processStack();
            currentOperator = char;
        } else if (char === '*' || char === '/') {
            processStack();
            currentOperator = char;
        } else if (char === '(') {
            processStack();
            stack.push('(');
        } else if (char === ')') {
            processStack();
            let tempStack = [];
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                tempStack.push(stack.pop());
            }
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop(); // Remove '('
            }
            tempStack.reverse().forEach((item) => stack.push(item));
        }
    }

    processStack();

    // Evaluate the expression using a simple stack-based approach
    const evalStack = [];
    for (const item of stack) {
        if (!isNaN(item)) {
            evalStack.push(parseFloat(item));
        } else if (operators.has(item)) {
            if (evalStack.length >= 2) {
                const operand2 = evalStack.pop();
                const operand1 = evalStack.pop();
                switch (item) {
                    case '+':
                        evalStack.push(operand1 + operand2);
                        break;
                    case '-':
                        evalStack.push(operand1 - operand2);
                        break;
                    case '*':
                        evalStack.push(operand1 * operand2);
                        break;
                    case '/':
                        evalStack.push(operand1 / operand2);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    if (evalStack.length === 1) {
        return evalStack[0];
    } else {
        console.log('Invalid expression format');
        return null;
    }
}

// Example usage:
const alternativeExpression = '+ 45 21';
const result = calculateAlternativeSyntax(alternativeExpression);
console.log(result);