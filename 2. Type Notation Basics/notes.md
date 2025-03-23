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
