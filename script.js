// Select the display input field
const display = document.getElementById('result');
// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Loop through each button to add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // For now, let's just make numbers and the decimal point appear
        if (!isNaN(value) || value === '.') {
            // Append the clicked number to the display
            display.value += value;
        }
    });
});

