# Simple Calculator App

This project is a simple calculator app that allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, division, and tipping/discount percentage. It also includes error handling for division by zero and a clear button to start a new calculation. You can click buttons on the GUI or use your keyboard to input numbers and operators.

## Development Environment

This project was developed using Aider and a local AI-assisted development environment (Ollama/Qwen2.5-Coder:7b).

## Creation Prompt

Create a simple calculator app that lets you add, subtract, multiply and divide. It must also allow you to clear results and start a new calculation. If there is a calculation error then it should display error and also allow you to clear and start a new calculation. I want it to look like a physical calculator. It should have buttons for numbers and math symbols. I want to be able to use my keyboard to type calculations as well.

## Troubleshooting

1. **Input the main amount**: For example, input `37.50`.
2. **Select the percentage operator**: Click on the `%` button.
3. **Input the percentage**: For example, input `20`.
4. **Click the equals button**: Click on the `=` button to get the result.

So, the sequence of actions would be:
- Click `3`, `7`, `.`, `5`, `0` (to input `37.50`)
- Click `%` (to select the percentage operator)
- Click `2`, `0` (to input `20`)
- Click `=` (to calculate the result)

The display should then show `37.50 % 20 = 7.50`.

## AI Troubleshooting and Debugging

During the development of this project, I encountered several issues and used AI to troubleshoot and resolve them. Here are the key steps and solutions:

### Figuring out how percentage operator % works

1. **Prompt**: /ask how do I input the main amount and get the tipping/discount result when using percentage? For example I want to input 37.50 and multiply by 20% and click = to get 7.50
   -**Solution**: To input the main amount and get the tipping/discount result when using the percentage operator, follow these steps:

      1. **Input the main amount**: For example, input `37.50`.
      2. **Select the percentage operator**: Click on the `%` button.
      3. **Input the percentage**: For example, input `20`.
      4. **Click the equals button**: Click on the `=` button to get the result.

   So, the sequence of actions would be:
      - Click `3`, `7`, `.`, `5`, `0` (to input `37.50`)
      - Click `%` (to select the percentage operator)
      - Click `2`, `0` (to input `20`)
      - Click `=` (to calculate the result)

   The display should then show `37.50 % 20 = 7.50`.

### Keyboard Input Issue

1. **Prompt**: When I type % on my keyboard it does nothing on my calculator app. How can this be fixed?  
   - **Solution**: To fix the issue where typing `%` on the keyboard does nothing in the calculator app, we need to ensure that the keyboard event listener correctly handles the `%` key. Here is the updated `index.html` file:

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button onclick="deleteLast()" class="operator">DEL</button>
            <button onclick="clearDisplay()" class="operator">C</button>
            <button onclick="appendOperator('%')" class="operator">%</button>
            <button onclick="appendOperator('/')">/</button>
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="appendOperator('*')">*</button>
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="appendOperator('-')">-</button>
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="appendOperator('+')">+</button>
            <button onclick="appendNumber('0')" class="zero-button">0</button>
            <button onclick="appendNumber('.')">.</button>
            <button onclick="calculateResult()" class="operator">=</button>
        </div>
    </div>
    <script src="script.js"></script>
    <script>
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(key)) {
                appendNumber(key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                appendOperator(key);
            } else if (key === 'Enter') {
                calculateResult();
            } else if (key === 'Backspace') {
                deleteLast();
            } else if (key === 'c' || key === 'C') {
                clearDisplay();
            } else if (key === '%') {
                appendOperator('%');
            }
        });
    </script>
</body>
</html>
```

This update ensures that the keyboard event listener correctly handles the `%` key by calling the `appendOperator('%')` function when the `%` key is pressed.

## License                                             
This project is licensed under the MIT License - see   
the [LICENSE](LICENSE) file for details.
