function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
let x = add(...num);
console.log(x);

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let y = hasError(...responseCodes); // true
console.log(y);