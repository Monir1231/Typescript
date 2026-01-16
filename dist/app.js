"use strict";
// string 
Object.defineProperty(exports, "__esModule", { value: true });
// let name:string = "monir"
// console.log(name)
// array
// let number:number[] = [12,34,]
// console.log(number)
// let number2:Array<number> = [12,34,]
// console.log(number2)
// tupple
// const mytup:[string,string,number,boolean] = ["monir","rana",12,true]
// console.log(mytup)
// any, unknown, void, null, undefined
// any
let random = "monir";
random = 23;
random = true;
console.log(random);
// unknown
let nam = "monir";
if (typeof nam === "string") {
    console.log(nam.toUpperCase());
}
// func  void
function usernum() {
    console.log("this is new bangladesh");
}
usernum();
function info(name, age) {
    return `my name is ${name} and age ${age}`;
}
console.log(info("monir", 23));
// undifine
let number;
console.log(typeof number);
const student1 = {
    name: "monir",
    age: 23,
    course: "font-end devoloper",
    skills: ["js", "react", "next",],
    info: ["monir", 34, true, null]
};
const student2 = {
    name: "monir",
    age: 27,
    course: "font-end devoloper",
    skills: ["js", "react", "next",],
    info: ["monir", 34, true, null]
};
console.log(student1, student2);
function data(student) {
    console.log(`Name:${student.name}`);
    console.log(`Age:${student.age}`);
    console.log(`Course:${student.course}`);
}
data(student1);
//# sourceMappingURL=app.js.map