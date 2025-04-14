// Regular function
function add(a:number, b:number):number{
	return a + b;
}

// Arrow Function Type Annotation
const subtract = (a:number,b:number) => a - b;

console.log(add(5, 6));
console.log(subtract(8, 4));

// Default Parameter Value
const multiply = (a:number=7,b:number=9) => a * b;

// Optional Parameters
const divide = (b:number, a?:number) => {
	return a && a/b;
} // ? means optional parameter

// Rest Parameters
const sumAll = (...numbers:number[]) => numbers.reduce((acc, curr)=> acc+curr);

// Void Return Type
const logMessage = (message:string):void=> console.log(message);

// Never
const throwError = (message:string):never=>{
	throw new Error(message);
}

// Function Types Overloading
