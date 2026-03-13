"use strict";
// Type guards
Object.defineProperty(exports, "__esModule", { value: true });
function Display(val) {
    if (typeof val === 'string') {
        console.log(" i am string:", val.toUpperCase());
    }
    else
        (console.log(" it's a number:", val.toFixed(2)));
}
Display("i am programmer");
Display(20.456);
function Move(vehicle) {
    if ("drive" in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}
const car = {
    drive: () => {
        console.log(" car is driving...");
    }
};
const boat = {
    sail: () => {
        console.log(" boat is driving...");
    }
};
Move(car);
Move(boat);
// instanceof
class Dog {
    bark() {
        console.log("woof woof");
    }
}
class Cat {
    meow() {
        console.log("meow meow");
    }
}
function makesound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
makesound(dog);
makesound(cat);
//# sourceMappingURL=Type-guards.js.map