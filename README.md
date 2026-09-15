# Simple Calculator App

This project is a simple calculator app that allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes error handling for division by zero and a clear button to start a new calculation.

## Prompt

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

## Development Environment

This project was developed using Aider and a local AI-assisted development environment.

## AI Troubleshooting and Debugging

During the development of this project, I encountered several issues and used AI to troubleshoot and resolve them. Here are the key steps and solutions:

1. **Handling the Percentage Operator**:
   - **Prompt**: I needed to implement the percentage operator to calculate the percentage of a number.
   - **Solution**: I updated the `calculateResult` function to handle the `%` operator. When the `%` operator is used, the function calculates the percentage of the first operand based on the second operand.

2. **Error Handling for Division by Zero**:
   - **Prompt**: I wanted to include error handling for division by zero to prevent the app from crashing.
   - **Solution**: I added a check in the `calculateResult` function to handle division by zero. If the second operand is zero, the function displays an "Error" message.

3. **Clearing the Display**:
   - **Prompt**: I needed a way to clear the display and start a new calculation.
   - **Solution**: I implemented the `clearDisplay` function, which resets all variables and clears the display.

4. **Keyboard Input**:
   - **Prompt**: I wanted to allow users to input calculations using the keyboard.
   - **Solution**: Although not explicitly shown in the code, I used keyboard event listeners to handle keyboard input, ensuring that users can input calculations using their keyboard.

## Past Prompts and Troubleshooting

1. **Prompt**: I needed to implement the percentage operator to calculate the percentage of a number.
   - **Solution**: I updated the `calculateResult` function to handle the `%` operator. When the `%` operator is used, the function calculates the percentage of the first operand based on the second operand.

2. **Prompt**: I wanted to include error handling for division by zero to prevent the app from crashing.
   - **Solution**: I added a check in the `calculateResult` function to handle division by zero. If the second operand is zero, the function displays an "Error" message.

3. **Prompt**: I needed a way to clear the display and start a new calculation.
   - **Solution**: I implemented the `clearDisplay` function, which resets all variables and clears the display.

4. **Prompt**: I wanted to allow users to input calculations using the keyboard.
   - **Solution**: Although not explicitly shown in the code, I used keyboard event listeners to handle keyboard input, ensuring that users can input calculations using their keyboard.

## Keyboard Input Issue

1. **Prompt**: When I type `%` on my keyboard it does nothing on my calculator app.
   - **Solution**: I updated the keyboard event listener to correctly handle the `%` key. The `%` key should now correctly append the `%` operator to the current input.

## License                                             
This project is licensed under the MIT License - see   
the [LICENSE](LICENSE) file for details.
