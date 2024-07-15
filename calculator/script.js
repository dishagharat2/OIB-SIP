let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    if (!isLastCharacterOperator()) {
        display.textContent += operator;
    }
}

function isLastCharacterOperator() {
    const operators = ['/', '*', '-', '+'];
    return operators.includes(display.textContent.slice(-1));
}

function calculate() {
    if (!isLastCharacterOperator()) {
        display.textContent = eval(display.textContent).toString();
    }
}
