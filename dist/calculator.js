"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// calcultor
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
function divide(a, b) {
    if (a === 0) {
        throw new Error(`can not devide by zero`);
    }
    else {
        return a / b;
    }
}
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
function calculate(operation, a, b = 1) {
    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "/":
            return divide(a, b);
        case "*":
            return multiply(a, b);
        case "^":
            return power(a, b);
        default:
            throw new Error("Invalid opration");
    }
}
console.log("Add:", calculate("^", 4, 3));
console.log("Add:", calculate(")", 4, 3));
//# sourceMappingURL=calculator.js.map