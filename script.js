let currentInput = '';
let firstOperand = null;
let operator = '';
let equation = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null && operator !== '') {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    equation = currentInput + ' ' + operator + ' ';
    currentInput = '';
    display.value = equation;
}

function calculateResult() {
    if (currentInput === '' || operator === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                display.value = 'Error';
                return;
            }
            result = firstOperand / secondOperand;
            break;
        case '%':
            if (secondOperand === 0) {
                display.value = 'Error';
                return;
            }
            result = firstOperand % secondOperand;
            break;
        default:
            return;
    }
    display.value = equation + secondOperand + ' = ' + result;
    currentInput = result.toString();
    firstOperand = null;
    operator = '';
    equation = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    firstOperand = null;
    equation = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}
