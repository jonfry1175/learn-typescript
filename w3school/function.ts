// Return Type

// The type of the value returned by the function can be explicitly defined.

// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
  }

console.log(getTime())



// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type

// The type void can be used to indicate a function doesn't return any value.
// void untuk memastikan sebuah function tidak mengembalikan apapun

// Example
function printHello(): void {
  console.log('Hello!');
}

printHello()

// Parameters

// Function parameters are typed with a similar syntax as variable declarations.
// Example
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2, 3))
// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.


// Optional Parameters

// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// Example
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// Default Parameters

// For parameters with default values, the default value goes after the type annotation:
// Example
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}


// Named Parameters

// Typing named parameters follows the same pattern as typing normal parameters.
// wajib menggunakan object
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

console.log(divide({dividend: 10, divisor: 2}));

// Rest Parameters

// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
// Example

// parameter selanjutnya/tanpa batas
function addmany(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

addmany(1, 2, 3, 4, 5)

// Type Alias

// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.
// Example
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;