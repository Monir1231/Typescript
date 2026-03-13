"use strict";
// Type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function Log(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
Log("hi, i am adrin");
Log(1.556);
// more ex 
function processInput(input) {
    if (typeof input === "number") {
        console.log("parsed as number", input * 4);
    }
    else {
        console.log("parsed as string", input.trim());
    }
}
processInput("hay  h");
processInput(43);
//# sourceMappingURL=narrowing.js.map