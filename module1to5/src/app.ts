// string

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
// let random: any = "monir";
// random = 23;
// random = true;

// console.log(random);

// // unknown
// let nam: unknown = "monir";

// if (typeof nam === "string") {
//   console.log(nam.toUpperCase());
// }

// // func  void

// function usernum(): void {
//   console.log("this is new bangladesh");
// }
// usernum();

// function info(name: string, age: number): string | number {
//   return `my name is ${name} and age ${age}`;
// }
// console.log(info("monir", 23));

// undifine

// let number: undefined;
// console.log(typeof number);

// null
// let number2:null = null
// console.log(number2)

// student profile

// type student = {
//   name: string;
//   age: number;
//   course: string;
//   skills: string[];
//   info: [string, number, boolean, null];
// };

// const student1: student = {
//   name: "monir",
//   age: 23,
//   course: "font-end devoloper",
//   skills: ["js", "react", "next"],
//   info: ["monir", 34, true, null],
// };

// const student2: student = {
//   name: "monir",
//   age: 27,
//   course: "font-end devoloper",
//   skills: ["js", "react", "next"],
//   info: ["monir", 34, true, null],
// };

// console.log(student1, student2);

// function data (student:student):void{
//     console.log(`Name:${student.name}`)
//      console.log(`Age:${student.age}`)
//        console.log(`Course:${student.course}`)
// }
// data(student1)

// function username(nam: string): void {
//   console.log(`myname is ${nam}`);
// }
// username("monir");

// let greetfun: (name:string)=>string

// greetfun = function(name:string):string{
//     return `hi ${name}`
// }
// console.log(greetfun("mahim"))

// function greetfun(
//   firstName: string = "gusst",
//   LastName: string = "love",
//   title?: string,
// ): string {
//   return `my firstname ${firstName} & lastName ${LastName} .He is a ${title ? title : "N/A"}`;
// }

// console.log(greetfun());

// console.log(greetfun("Monir", "Molla"));


// arrow fun 

// const add = (a:number,b:number):number =>{
// return a + b
// }

// console.log(add(12,34))