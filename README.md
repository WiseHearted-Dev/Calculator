# Simple Calculator App

This project is a simple calculator app that allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, division, and tipping/discount percentage. It also includes error handling for division by zero and a clear button to start a new calculation. You can click buttons on the GUI or use your keyboard to input numbers and operators.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory
3. Open the index.html file in a web browser.

## Features

- Displays equation and result
- You can Click GUI buttons or use your keyboard to input numbers and operators
- Del button deletes last clicked or type character in display
- C button clears the display and is ready for new input
- % button calculates tipping/discount amount (37.50 % 20 = 7.5)

## Requirements

- A web browser

## Contributing

Contribution are welcome! Please fork the repository and submit a pull request.

## License                                             
This project is licensed under the MIT License - see   
the [LICENSE](LICENSE) file for details.

# Development Environment

This project was developed using Aider and a local AI-assisted development environment (Ollama/Qwen2.5-Coder:7b).

## Creation Prompt

Create a simple calculator app that lets you add, subtract, multiply and divide. It must also allow you to clear results and start a new calculation. If there is a calculation error then it should display error and also allow you to clear and start a new calculation. I want it to look like a physical calculator. It should have buttons for numbers and math symbols. I want to be able to use my keyboard to type calculations as well.

## AI Troubleshooting and Debugging

During the development of this project, I encountered several issues and used AI to troubleshoot and resolve them. Here are some examples of how I interacted with Aider in VS Code:

### Figuring out how percentage operator % works

- **Prompt**: /ask how do I input the main amount and get the tipping/discount result when using percentage? For example I want to input 37.50 and multiply by 20% and click = to get 7.50
   - **Solution**: To input the main amount and get the tipping/discount result when using the percentage operator, follow these steps:

      1\. **Input the main amount**: For example, input `37.50`.
      2\. **Select the percentage operator**: Click on the `%` button.
      3\. **Input the percentage**: For example, input `20`.
      4\. **Click the equals button**: Click on the `=` button to get the result.

   So, the sequence of actions would be:
      1\. Click `3`, `7`, `.`, `5`, `0` (to input `37.50`)
      2\. Click `%` (to select the percentage operator)
      3\. Click `2`, `0` (to input `20`)
      4\. Click `=` (to calculate the result)

   The display should then show `37.50 % 20 = 7.50`.

### Keyboard Input Issue

- **Prompt**: When I type % on my keyboard it does nothing on my calculator app. How can this be fixed?  
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

### Fixing a layout and button alignment bug

   - **Prompt**: Please fix a layout and button alignment bug in my HTML and CSS calculator project.   
         
      The CSS sets up a 4x5 grid (`grid-template-columns: repeat(4, 1fr)`), but the buttons are out of order, two buttons are missing text, and the row counts do not align perfectly.  
        
      Please modify my files with the following fixes:  
      1\. Reorder the HTML buttons so they flow row-by-row into the 4-column layout properly.  
      2\. Fill in the missing text labels for the division (`/`) and decimal (`.`) buttons.  
      3\. Add a percentage button (`%`) in the first row to fill the grid gap.  
      4\. Add CSS to make the `0` button (`.zero-button`) span across 2 columns (`grid-column: span 2`) so the final row matches the 4-column grid width.  
      - **Solution**: To fix the layout and button alignment bug in your HTML and CSS calculator project, we need to make the following changes:

      1. Reorder the HTML buttons so they flow row-by-row into the 4-column layout properly.
      2. Fill in the missing text labels for the division (`/`) and decimal (`.`) buttons.
      3. Add a percentage button (`%`) in the first row to fill the grid gap.
      4. Add CSS to make the `0` button (`.zero-button`) span across 2 columns (`grid-column: span 2`) so the final row matches the 4-column grid width.

Here are the updated files:

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
            <button onclick="appendOperator('%')" class="operator">%</button>
            <button onclick="clearDisplay()" class="operator">C</button>
            <button onclick="deleteLast()" class="operator">DEL</button>
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
</body>
</html>
```

styles.css
```
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.calculator {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#display {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 24px;
    text-align: right;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;
    width: 100%;
}

button {
    width: 100%;
    height: 60px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background-color: #f9f9f9;
    cursor: pointer;
}

button:hover {
    background-color: #e0e0e0;
}

button:active {
    background-color: #d0d0d0;
}

button.operator {
    background-color: #ff9500;
    color: #fff;
    font-size: 24px;
}

button.operator:hover {
    background-color: #e08000;
}

button.operator:active {
    background-color: #d07000;
}

.zero-button {
    grid-column: span 2;
}
```

These changes will fix the layout and button alignment bug in your HTML and CSS calculator project.