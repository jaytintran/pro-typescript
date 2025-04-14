# Array Types

Arrays are a type of object that can store multiple values of the same data type. Arrays in TS are types which means we can specify what kind of values an array will hold.

```ts
let numbers: number[] = [1, 2, 3];
let strs: string[] = ["a", "b"];

let items: string[] = [];
items.push("hello");
items.push(5); // Error
items.push(true); // Error
items.push("human");

console.log(items); // ['hello', 'human']

let nums: number[] = [];
nums.push(1);
nums.push("hi"); // Error
```

## Alternate Syntax for Array Type
We can also use `Array<T>` syntax to define arrays:

```ts
let numbers: Array<number> = [1, 2, 3];
let items: Array<string> = [];
items.push("hello");
items.push(5); // Error
items.push(true); // Error
items.push("human");
```