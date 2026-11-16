// Full Name: Jit Lee S. Romero
// Section: IV-BSIT C
// Activity: N2 - Modular Calculator
// Date: November 17, 2026

const operations = require("./operations");
const formatter = require("./formatter");
const path = require("path");

function main() {
    console.log("N2 - Modular Calculator");
    console.log("Jit Lee S. Romero | IV-BSIT C");

    // argv[0] is Node, argv[1] is this file, and argv[2] is the operation.
    const operation = (process.argv[2] || "").toLowerCase();
    const numberInputs = process.argv.slice(3);
    const supportedOperations = ["add", "subtract", "multiply", "divide", "average"];

    if (!operation) {
        // The built-in path module gets the file name for the usage message.
        const scriptName = path.basename(__filename);
        throw new Error(`Usage: node ${scriptName} <operation> <numbers>. Example: node ${scriptName} add 12 8`);
    }

    if (!supportedOperations.includes(operation)) {
        throw new Error(`Unknown operation: ${operation}. Use add, subtract, multiply, divide, or average.`);
    }

    if (operation === "average") {
        if (numberInputs.length === 0) {
            throw new Error("Average needs at least one number.");
        }
    } else if (numberInputs.length !== 2) {
        throw new Error(`${operation} needs exactly two numbers.`);
    }

    // Command-line inputs are strings, so convert and check each number.
    const numbers = [];
    for (const input of numberInputs) {
        const number = Number(input);
        if (input.trim() === "" || !Number.isFinite(number)) {
            throw new Error(`Invalid number: "${input}". Enter numeric values.`);
        }
        numbers.push(number);
    }

    let result;
    switch (operation) {
        case "add":
            result = operations.add(numbers[0], numbers[1]);
            break;
        case "subtract":
            result = operations.subtract(numbers[0], numbers[1]);
            break;
        case "multiply":
            result = operations.multiply(numbers[0], numbers[1]);
            break;
        case "divide":
            result = operations.divide(numbers[0], numbers[1]);
            break;
        case "average":
            result = operations.average(numbers);
            break;
    }

    if (!Number.isFinite(result)) {
        throw new Error("The result is too large. Try smaller numbers.");
    }

    console.log(formatter.formatResult(operation, numbers, result));
}

try {
    main();
} catch (error) {
    // Show a readable error instead of an answer or an uncaught stack trace.
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
}

// References for CommonJS modules and command-line arguments:
// https://nodejs.org/api/modules.html
// https://nodejs.org/api/process.html#processargv
