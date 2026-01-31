// calcultor
function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;

function divide(a: number, b: number): number {
  if (a === 0) {
    throw new Error(`can not devide by zero`);
  } else {
    return a / b;
  }
}

function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}

function calculate(operation: string, a: number, b: number = 1): number {
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
