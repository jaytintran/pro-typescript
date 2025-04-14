# Function Parameters Annotations

They are used to specify the type of a function's parameters that a function should take.

```ts
function add(a:number, b:number):number {
    return a + b;
}
```

## Optional Parameters
Some functions may have optional parameters which can be omitted when calling them.
Optional parameters must come after required ones in their parameter list and they are marked with `?` symbol at the end of its name.

```ts
function greet(name:string, greeting?:string) { //greeting is an optional parameter
    if(greeting){
        console.log(`${name}, ${greeting}`);
    } else{
        console.log(`Hello, ${name}`);
    }
}
```

## Default Parameters
Default parameters allow you to provide default values for function parameters. If no value is passed while calling the function then it will use these defaults instead.

```ts
function multiply(a:number = 10, b:number = 5):number{ //default values for a & b
    return a * b;
}
```

## Rest Parameters
Rest parameters allow us to pass any number of arguments into our function as an array using spread operator (`...`) followed by variable name. This way we don't need to define multiple parameters explicitly like before.

```ts
function sum(...numbers:number[]):number{
    let total = 0;
    numbers.forEach((num)=>total += num);
    return total;
}

console.log(sum(2,4)); //6
console.log(sum(2,4,8)); //14
console.log(sum()); //0 (no argument provided so returns initial value i.e., zero)
```

## Return Type Annotation
We can also annotate what kind of data our function will return back to caller using colon `:` followed by desired type right after closing parenthesis of parameter list. By default all functions implicitly return void unless specified otherwise.

Note - You cannot change the return type once declared within same scope. For example below code would throw error since second declaration tries to redefine existing one with different return type.

```ts
function getFullName(firstName:string, lastName:string):string{
    return `${firstName} ${lastName}`;
}

let fullName:string = getFullName("John", "Doe"); //fullName now holds string value returned from above function call.
let errFullName = getFullName("Jane", "Smith"); // errFullName won't compile because expected type was string but got undefined due to missing return statement inside
```

## Void Functions
Functions without explicit return statements automatically become void types meaning they do not produce anything useful upon execution other than side effects such as logging messages or modifying global state etc.

```ts
function logMessage(msg:string):void{
    console.log(msg); //prints message onto console window
    return message; //this line causes compilation error because 'message' does not exist anywhere outside this block scope
}

logMessage('Hello World!'); //'Hello World!' gets printed on screen
```

## Never Functions
Never functions represent those whose execution never completes normally i.e., either throws exception or enters infinite loop. They usually serve as placeholders until actual implementation comes along later down the road.

```ts
function throwError(errMsg:string):never{
    throw new Error(errMsg); //throws custom error object containing given message text
}
```

## Function Types Overloading
Overloading allows defining multiple signatures for single named entity allowing callers to choose appropriate version based on input arguments passed during runtime. It helps improve readability and maintainability especially when dealing complex logic involving many conditional branches depending upon various combinations of inputs.

```ts
function getLength(input: string): number;
function getLength(input: any[]): number;   // The type any[] means that input is expected to be an array that can contain elements of any type.
function getLength(input: string | any[]) {
    return input.length;
}

getLength(['a', 'b']); // Returns 2
getLength([true]);     // Returns 1
getLength(123);         // Error: Argument of type 'number' is not assignable to parameter of type 'string | any[]'.
```
In case there exists more than one signature matching current context then compiler picks up first applicable match starting from topmost definition downwards till last defined entry found. If none matches perfectly then closest compatible option available gets picked up instead.

## Summary
- Function parameter annotations define the expected types for function arguments.
- Use ? for optional parameters.
- Use default parameters (param: Type = value) for default values.
- Use ...rest for multiple arguments of the same type.
- Use type aliases or interfaces for cleaner parameter structures.
- Use union types (|) for multiple accepted types.
- Function overloading improves type safety for multiple input types.
- Use void for no return values and never for functions that never return.