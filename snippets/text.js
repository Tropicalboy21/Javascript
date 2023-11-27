function calculateAlternativeSyntax(expression) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    let currentNumber = '';

    const tokens = expression.split(/\s+/); // Split expression into tokens

    for (const token of tokens) {
        if (!isNaN(token) || token === '.') {
            // Accumulate digits and handle decimal points
            currentNumber += token;
        } else if (operators.has(token)) {
            // Push the accumulated number (if any) and the operator to the stack
            if (currentNumber !== '') {
                stack.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            stack.push(token);
        } else {
            console.log(`Invalid token: ${token}`);
            return null;
        }
    }

    // Push the last accumulated number to the stack
    if (currentNumber !== '') {
        stack.push(parseFloat(currentNumber));
    }

    const resultStack = [];
    for (const item of stack) {
        if (typeof item === 'number') {
            resultStack.push(item);
        } else if (operators.has(item)) {
            if (resultStack.length < 2) {
                console.log('Invalid expression format');
                return null;
            }
            const operand2 = resultStack.pop();
            const operand1 = resultStack.pop();

            switch (item) {
                case '+':
                    resultStack.push(operand1 + operand2);
                    break;
                case '-':
                    resultStack.push(operand1 - operand2);
                    break;
                case '*':
                    resultStack.push(operand1 * operand2);
                    break;
                case '/':
                    if (operand2 === 0) {
                        console.log('Error: Division by zero');
                        return null;
                    }
                    resultStack.push(operand1 / operand2);
                    break;
                default:
                    console.log(`Invalid operator: ${item}`);
                    return null;
            }
        }
    }

    if (resultStack.length === 1) {
        return resultStack[0];
    } else {
        console.log('Invalid expression format');
        return null;
    }

}

const expression = '34';
const result = calculateAlternativeSyntax(expression);

if (result !== null) {
    console.log(`Result: ${result}`);
} else {
    console.log('Invalid expression or calculation error.');
}


function classifyString(input) {
    const result = [];
    let currentToken = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (!isNaN(char) || char === '.') {
            // Accumulate digits and handle decimal points
            currentToken += char;

            // Check for negative numbers
            if (i === 0 && char === '-' && !isNaN(input[i + 1])) {
                currentToken = '-';
            }

            // Collect the entire number (including decimal points)
            while (
                (char === '.' && !isNaN(input[i + 1])) ||
                (!isNaN(input[i + 1]) && input[i + 1] !== '.')
            ) {
                currentToken += input[i + 1];
                i++;
            }
        } else if (['+', '-', '*', '/'].includes(char)) {
            // If it's an operator, push the accumulated token to the result
            if (currentToken !== '') {
                result.push({ type: 'number', value: parseFloat(currentToken) });
                currentToken = '';
            }

            result.push({ type: 'operator', value: char });
        } else if (char !== ' ') {
            // Ignore spaces and other characters
            console.log(`Invalid character: ${char}`);
            return null;
        }
    }

    // Push the last accumulated token to the result
    if (currentToken !== '') {
        result.push({ type: 'number', value: parseFloat(currentToken) });
    }

    return result;
}

// Example usage:
const inputString = '+ 3 4';
const result2 = classifyString(inputString);
console.log(result2);

// Example usage:
// const inputString = '+34';
// const result2 = classifyString(inputString);
// console.log(result2);

