let unknown: unknown = "hello"; // once a value is assigned to unknown typem it will take the type of the value
console.log(typeof unknown);

if (typeof unknown === "string") {
    console.log("Hi");
}

let message: string = "Hello";

let username: string;
let userId: number;

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Naveen"));

// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 4));

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};

console.log(user);
console.log(user.name, user.age);