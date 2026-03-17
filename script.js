// Select the display input field
const display = document.getElementById('result');
// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Loop through each button to add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // 1. Clear Function
        if (button.classList.contains('clear')) {
            display.value = "";
        } 
        // 2. Delete Function
        else if (button.classList.contains('delete')) {
            display.value = display.value.slice(0, -1);
        }
        // 3. Equal/Calculation Function
        else if (button.classList.contains('equal')) {
            try {
                // eval() calculates the string expression
                display.value = eval(display.value);
            } catch (e) {
                display.value = "Error";
            }
        }
        // 4. Numbers and Operators Input
        else {
            // This captures numbers, decimals, and operators (+, -, *, /)
            display.value += value;
        }
    });
});

