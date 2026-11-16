// Full Name: Jit Lee S. Romero
// Section: IV-BSIT C
// Activity: N2 - Modular Calculator
// Date: November 17, 2026

// Return the answers so index.js can decide how to display them.
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return firstNumber / secondNumber;
}

function average(numbers) {
    if (numbers.length === 0) {
        throw new Error("Average needs at least one number.");
    }

    let total = 0;
    for (const number of numbers) {
        total += number;
    }

    return total / numbers.length;
}

// Make these functions available to other files using require().
module.exports = { add, subtract, multiply, divide, average };
