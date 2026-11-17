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

    // Ang operation ay nasa argv[2]; ang kasunod na inputs ay ang numbers.
    const operation = (process.argv[2] || "").toLowerCase();
    const numberInputs = process.argv.slice(3);
    const supportedOperations = ["add", "subtract", "multiply", "divide", "average"];

    if (!operation) {
        // Kinukuha ng built-in path module ang filename para sa sample command.
        const scriptName = path.basename(__filename);
        throw new Error(`Usage: node ${scriptName} <operation> <numbers>. Example: node ${scriptName} add 12 8`);
    }

    if (!supportedOperations.includes(operation)) {
        throw new Error(`Unknown operation: ${operation}. Use add, subtract, multiply, divide, or average.`);
    }

    if (operation === "average" && numberInputs.length === 0) {
        throw new Error("Average needs at least one number.");
    }
    if (operation !== "average" && numberInputs.length !== 2) {
        throw new Error(`${operation} needs exactly two numbers.`);
    }

    // String ang input sa terminal. I-convert muna bago mag-compute.
    const numbers = [];
    for (const input of numberInputs) {
        const number = Number(input);
        if (input.trim() === "" || !Number.isFinite(number)) {
            throw new Error(`Invalid number: "${input}". Enter numeric values.`);
        }
        numbers.push(number);
    }

    // Piliin ang function ayon sa operation na inilagay ng user.
    let result;
    if (operation === "add") {
        result = operations.add(numbers[0], numbers[1]);
    } else if (operation === "subtract") {
        result = operations.subtract(numbers[0], numbers[1]);
    } else if (operation === "multiply") {
        result = operations.multiply(numbers[0], numbers[1]);
    } else if (operation === "divide") {
        result = operations.divide(numbers[0], numbers[1]);
    } else if (operation === "average") {
        result = operations.average(numbers);
    }

    if (!Number.isFinite(result)) {
        throw new Error("The result is too large. Try smaller numbers.");
    }

    console.log(formatter.formatResult(operation, numbers, result));
}

try {
    main();
} catch (error) {
    // Ipakita ang malinaw na error message kapag may invalid input.
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
}

// References for CommonJS modules and command-line arguments:
// https://nodejs.org/api/modules.html
// https://nodejs.org/api/process.html#processargv
