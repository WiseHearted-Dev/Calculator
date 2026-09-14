let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

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
    currentInput = '';
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
        default:
            return;
    }
    display.value = result;
    firstOperand = result;
    operator = '';
    currentInput = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    firstOperand = null;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}
