## **Type Notation Basics**

In TypeScript, a type notation is a way to explicitly declare the expected type of variables, function parameters, return values, and object properties. Unlike JS which is dynamically typed, TS enforces type rules at compile time.

Summary:

- Annotations are used to specify the data types of variables, function parameters, function return values, and other return values.
- Annotations help developers to catch errors early in the development process by allowing them to specify the expected data types of variables and function parameters.

### **Syntax**

It uses colon : followed by a type to specify the expected type of a value.

```typescript
let variableName: Type;
```

For example:

```typescript
let age: number = 25;
let userName: string = "Jack";
let isLoggedIn: boolean = true;
```

## **Primitive Types in TypeScript**

These are the fundamental building blocks:

### **📌 Number Type (`number`)**

Represents both integers and floating-point numbers.

```tsx
let price: number = 100;
let taxRate: number = 0.08;
let total: number = price * (1 + taxRate);
```

### **📌 String Type (`string`)**

Represents textual data.

```tsx
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
```

### **📌 Boolean Type (`boolean`)**

Represents `true` or `false` values.

```tsx
let isCompleted: boolean = false;
let hasPermission: boolean = true;
```

### **📌 Special Types (`null` & `undefined`)**

- `null`: Explicitly represents "no value".
- `undefined`: Represents an uninitialized variable.

```tsx
let emptyValue: null = null;
let unassignedValue: undefined = undefined;
```

By default, `null` and `undefined` are **subtypes** of all other types, but strict mode (`strictNullChecks`) can enforce stricter rules.

## **⭐ Complex Type Notation**

### **📌 Arrays (`Array<Type>` or `Type[]`)**

TypeScript allows you to define the type of an array's elements.

```tsx
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "cherry"];
```

### **📌 Tuples (`[Type, Type, ...]`)**

Tuples define fixed-length arrays with specific types at each index.

```tsx
let userInfo: [string, number] = ["Alice", 30]; // First element must be string, second must be number
```

### **📌 Objects (`{}`)**

Objects can be explicitly typed by defining the structure.

```tsx
let user: { name: string; age: number } = {
  name: "John",
  age: 25,
};
```

### **📌 Functions (`(parameter: Type) => ReturnType`)**

Function parameters and return types can be explicitly defined.

```tsx
function add(a: number, b: number): number {
  return a + b;
}
```

### **⚠️ The `any` Type (Avoid It!)**

The `any` type disables type checking and can hold **any** value. This is a special type that can be used to represent any kind of type. When a variable is annotated with the type `any` , TS will allow the var to have any type of data.

```tsx
let randomValue: any = "Hello";
randomValue = 42; // No error (but bad practice!)
```

While the `any` type is useful in certain situations, it should be used sparingly, as it defeats the purpose of TypeScript’s type system. Overusing it will lead to excessive untyped code and make it harder to catch type-related bugs during development.

Use `any` sparingly, as it defeats the purpose of TypeScript’s type system.

## **Type Inference**

Type Inference is a feature of TS that allows the compiler to automatically determine the type of a variable based on its value.

In other words, when you try to declare a variable without explicitly declaring the type, TS will auto infer a type based the value you assigned to the var.

### **Type Inference vs. Type Annotation**

- Type Annotation: you explicitly declare types.
- Type Inference: TS automatically infers the type based on the first assigned value.

```tsx
let message: string = "Hello"; // Explicit annotation
let count = 10; // TypeScript infers `number` (no need for `: number`)
```

### **Why Does TS Have Type Inference?**

- Type inference helps reduce redundancy, but annotations provide clarity and strictness.
- It's a balance between flexibility and safety.
