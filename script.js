// Select the display input field
const display = document.getElementById('result');
// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Loop through each button to add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // Logic for Clear button
        if (button.classList.contains('clear')) {
            display.value = "";
        } 
        // Logic for Delete button (removes the last character)
        else if (button.classList.contains('delete')) {
            display.value = display.value.slice(0, -1);
        }
        // Logic for Numbers and Decimal
        else if (!isNaN(value) || value === '.') {
            display.value += value;
        }
    });
});

