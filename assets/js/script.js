// References to DOM elements
const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

// Add click listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // Reset the display
        if (button.classList.contains('clear')) {
            display.value = "";
        } 
        // Remove the last character typed
        else if (button.classList.contains('delete')) {
            display.value = display.value.slice(0, -1);
        }
        // Calculate the expression in the display
        else if (button.classList.contains('equal')) {
            try {
                // Perform math using the string currently in display
                display.value = eval(display.value);
            } catch (e) {
                display.value = "Error";
            }
        }
        // Append numbers and operators to the same display
        else {
            display.value += value;
        }
    });
});

