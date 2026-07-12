interface Calculator {
    add(a: number, b: number): number;
    sub(a: number, b: number): number;
    multiply: (a: number, b: number) => number; // Alternate syntax
    division: (a: number, b: number) => number;
}

const noObject = {
    id: 1
}


const calc: Calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    multiply: (a, b) => a * b,
    division: (a, b) => a / b
}

console.log(calc);

let m1 = calc.add(2, 4);
let m2 = calc.sub(5, 2);
let m3 = calc.multiply(3, 4);
let m4 = calc.division(21, 3);

console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);