/* Type Notation Basics */
let age: number = 25;
let userName: string = "Jack";
let isLoggedIn: boolean = true;

// age = "Tin"; // Error: Type 'string' is not assignable to type 'number'.

// Strings
let myName: string = "Tin Tran";

// Numbers
let myAge: number = 25;

// Booleans
let isStrong: boolean = true;

// Type Inference
let tech1 = "React"; // Type: string
let yearOfExp = 4; // Type: number
let isDev = true; // Type: boolean

console.log(typeof tech1, typeof yearOfExp, typeof isDev); // string number boolean

// ERROR
// tech = false
// favNumber = "Hello"
// tsHard = 20

// Any Type
let color: any = "crimson";
color = 20;
color = true;
color();
color.toUpperCase();
console.log(color);
