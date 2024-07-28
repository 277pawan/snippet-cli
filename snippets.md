# JavaScript Array Methods Snippets

## [] Array

```javascript
An array is an arrangement of numbers, pictures, or objects formatted into rows and columns according to their type.
```

## [] map

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

## [] reduce

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 10
```

## [] filter

```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]
```

## [] forEach

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((n) => console.log(n));
```

## [] some

```javascript
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some((n) => n % 2 === 0);
console.log(hasEven); // true
```

## [] every

```javascript
const numbers = [1, 2, 3, 4];
const allEven = numbers.every((n) => n % 2 === 0);
console.log(allEven); // false
```

## [] find

```javascript
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find((n) => n % 2 === 0);
console.log(firstEven); // 2
```

## [] findIndex

```javascript
const numbers=[1,2,3,4];
consts indexFirstEven=numbers.findIndex(n=>n%2===0);
console.log(indexFirstEven)
```

## Fn ArrowFunction

```javascript
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length));
```

## Fn AsyncFunction

```javascript
async function myFunction() {
  // Async code here
}
```

## Fn AwaitExpression

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}
```

## Fn BlockStatement

```javascript
var x = 1;
let y = 1;
if (true) {
  var x = 2;
  let y = 2;
}
console.log(x); // Expected output: 2
console.log(y); // Expected output: 1
```

## Pc BreakStatement

```javascript
let i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log(i); // Expected output: 3
```

## Pc CallExpression

```javascript
// Function definition
function greet(name) {
  return `Hello ${name}!`;
}
// Call expression
const greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice!
```

## Pc ClassDeclaration

```javascript
class Person { constructor(name, age) { this.name = name; this.age = age;}greet()
{\nconsole.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);}} // Creating an instance of the class
const person1 = new Person('John', 30);// Calling the method person1.greet();
// Output:Hello, my name is John and I'm 30 years old. ",
```

## Pc ConditionalExpression

```javascript
// Function definition
function greet(name) {
  return `Hello, ${name}!`;
}
// Conditional expression
const isMorning = true;
const greeting = isMorning ? greet("Alice") : "Goodbye";
console.log(greeting); // Output: Hello, Alice!
```

## Cn DefaultConstructor

```javascript
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}
const poly1 = new Polygon();
console.log(poly1.name);
// Expected output: 'Polygon'
```

## Cn PrototypeConstructor

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Creating objects using the constructor
var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);
// Accessing properties
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: 25
```

## Cn CopyConstructor

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  // Copy constructor
  this.copy = function () {
    return new Person(this.name, this.age);
  };
}
// Creating an object
var person1 = new Person("Alice", 30);
// Creating a copy using the copy constructor
var person2;
```

## Cn ParametricConstructor

```javascript
// Parametric constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
// Creating objects using the parametric constructor
var car1 = new Car("Toyota", "Corolla", 2020);
var car2 = new Car("Honda", "Civic", 2018);
// Accessing properties
console.log(car1.make); // Output: Toyota
console.log(car2.year); // Output: 2018
```

## Cf ContinueStatement

```javascript
// Using continue with a for loop
for (var i = 0; i < 5; i++) {
  if (i === 2) {
    // Skip iteration when i is 2
    continue;
  }
  console.log(i);
}
// Output: 0, 1, 3, 4
```

## Cf DebuggerStatement

```javascript
function add(a, b) {
  // Trigger a breakpoint here
  debugger;
  return a + b;
}
var result = add(2, 3);
console.log(result);
```

## Cf WhileLoop

```javascript
var count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
  //Increment count to eventually terminate the loop
}
```

## Cf DoWhileLoop

```javascript
var count = 0;
do {
  console.log("Count is: " + count);
  count++; // Increment count
} while (count < 5);
```

## Cf EmptyStatement

```javascript
var x = 5;
// An empty statement
// This statement will execute normally
console.log(x); // Output: 5
```

## Cf ExportDeclaration

```javascript
// Exporting named variables
export const name = "John";
export const age = 30;
// Exporting named functions
export function greet() {
  console.log("Hello!");
}
```

## Cf ExpressionStatement

```javascript
var x = 5; // This is anexpression statement.
```

## Cf ForLoop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Cf ForInLoop

```javascript
const fruits = ["apple", "banana", "cherry"];
for (fruit in fruits) {
  console.log(fruit);
}
//Output 0,1,2
```

## Cf ForOfLoop

```javascript
const fruits = ["apple", "banana", "cherry"];
for (fruit of fruits) {
  console.log(fruit);
}
//Output apple,banana,cherry
```

## Cf FunctionDeclaration

```javascript
function great(name) {
  return `Hello ${name}!`;
}
console.log(great("alice")); //Output: Hello alice!
```

## Cf FunctionExpression

```javascript
const greet =function (name){
    return `Hello ${name}`!
}
console.log(greet('Alice'))  // Output: Hello Alice!
```

## If Identifier

```javascript
let identifier;
```

## If VariableName

```javascript
let variablename = "Example";
```

## If FunctionName

```javascript
function functionName() {
  console.log("This is a function");
}
```

## If ConstantName

```javascript
const Constant_Name = 100;
```

## If LabelName

```javascript
labelName: for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break labelName;
  }
  console.log(i);
}
```

## If ParameterName

```javascript
function greet(parameterName) {
  return `Hello, ${parameterName}!`;
}
```

## If PropertyName

```javascript
let obj = { propertyName: "value" };
```

## If ModuleName

```javascript
// In module.js
export const moduleName = "example";
// In main.js
import { moduleName } from "./module.js";
console.log(moduleName);
```

## If NamespaceName

```javascript
var NamespaceName = NamespaceName || {};
NamespaceName.module = (function () {
  let privateVar = "I am private";
  return {
    publicVar: "I am public",
  };
})();
```

## Re LogicalExpression

```javascript
let a = true,
  b = false;
let result = a && b;
console.log(result); // false
```

## Re MemeberExpression

```javascript
let obj = {
  member: "value",
};
console.log(obj.member);
```

## Re NewExpression

```javascript
function Person(name) {
  this.name = name;
}
let person = new Person("John");
console.log(person.name);
```

## Re NullLiteral

```javascript
let value = null;
```

## Ne Number

```javascript
let number = 42;
```

## Ne Integer

```javascript
let integer = 42;
```

## Ne Float

```javascript
let float = 3.14;
```

## Ne Double

```javascript
let double = 3.14234324234324;
```

## Ne Decimal

```javascript
let decimal = 10.4;
```

## Ne BigInt

```javascript
let bigInt = BigInt(9007199254740991);
```

## Ne ComplexNumber

```javascript
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
}
let complex = new ComplexNumber(1, 2);
```

## Ne Fixed_pointNumber

```javascript
let fixedPoint = (123.45).toFixed(2); //123.45
```

## Ne RationalNumber

```javascript
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
class RationalNumber {
  constructor(numerator, denominator) {
    let gcdValue = gcd(numerator, denominator);
    this.numerator = numerator / gcdValue;
    this.denominator = denominator / gcdValue;
  }
}
let rational = new RationalNumber(4, 6); // RationalNumber { numerator: 2, denominator: 3 }
```

## Ne NaN

```javascript
let notANumber = NaN;
console.log(isNaN(notANumber)); // true
```

## Ne Infinity

```javascript
let infinityValue = Infinity;
console.log(1 / 0); // Infinity
```

## {} Object

```javascript
let person = { name: "Alice", age: 30 };
```

## {} ObjectMethod

```javascript
let person = {
  name: "Alice",
  greet: function () {
    console.log("Hello", +this.name);
  },
};
person.greet(); // Hello Alice;
```

## {} ObjectProperty

```javascript
let person = { name: "Alice", age: 30 };
console.log(person.name);
```

## Et ReturnStatement

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

## Et SpreadElement

```javascript
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // [1,2,3,4,5]
```

## "" String

```javascript
let str = "Hello World";
```

## "" Character

```javascript
let char = "A";
```

## "" StringLiteral

```javascript
let stringliteral = "Hello World!";
```

## "" TemplateString

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;
```

## "" FormattedString

```javascript
let number = 123.456;
let formatted = number.toFixed(2); // '123.46'
```

## "" MultilineString

```javascript
let multiLine = `This is a multiline string.`;
```

## "" ImmutableString

```javascript
let str = "Hello";
str[0] = "h"; // Strings are immutable this has no effect.
console.log(str); // 'Hello'
```

## "" MutableString

```javascript
let mutableStr = new String("hello");
mutableStr[0] = "h"; // This will still not change the string.
```

## Pe Super

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
let child = new Child("Alice", 10);
```

## Pe SwitchCase

```javascript
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana");
    break;
  case "apple":
    console.log("Apple");
    break;
  default:
    console.log("Unknown fruit");
}
```

## Pe TemplateLiteral

```javascript
let name = "Alice";
let greetin = `Hello ${name}!`;
```

## Pe ThisExpression

```javascript
let person = {
  name: "Alice",
  getName: function () {
    return this.name;
  },
};
console.log(person.getName()); // 'Alice'
```

## Pe ThrowStatement

```javascript
function checkPositive(number) {
  if (number <= 90) {
    throw new Error("Number must be positive");
  }
  return number;
}
```

## Pe TryStatement

```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.error("An error occurred:" + error.message);
}
```

## Pe UnaryExpression

```javascript
let x = 5;
console.log(-x); // -5
```

## Pe UpdateExpression

```javascript
let counter = 0;
counter++;
console.log(counter); // 1
```

## Pe VairableDeclaration

```javascript
let a = 10;
const b = 20;
var c = 30;
```

## Pe VariableDeclarator

```javascript
let a = 10;
```

## Pe WithStatement

```javascript
let obj = { a: 1, b: 2 };
with (obj) {
  console.log(a + b); // 3
}
```

## Pe YieldExpression

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
let gen = generator();
console.log(gen.next().value); // 1
```
