// Full Name: Jit Lee S. Romero
// Section: IV-BSIT C
// Activity: N2 - Modular Calculator
// Date: November 17, 2026

function formatResult(operation, numbers, result) {
    if (operation === "average") {
        return `Average of ${numbers.join(", ")} = ${result}`;
    }

    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

    return `${numbers[0]} ${symbols[operation]} ${numbers[1]} = ${result}`;
}

module.exports = { formatResult };
