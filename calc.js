// Get the display element
const display = document.getElementById('display');

// Append number to display
function appendNumber(num) {
    display.value += num;
}

// Append operator to display
function appendOperator(op) {
    const lastChar = display.value.slice(-1);
    // Prevent two operators in a row
    if (display.value !== '' && !['+', '-', '*', '/'].includes(lastChar)) {
        display.value += op;
    }
}

// Append decimal point
function appendPoint() {
    const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

// Apply percentage
function appendPercent() {
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
