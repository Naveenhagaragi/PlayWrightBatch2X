let scores = [
    [84, 79, 94],   // student 0, 257
    [67, 93, 92],   // student 1, 252
    [99, 92, 95]    // student 2, 286
];

let rowsums = scores.map(cell => cell.reduce((a, b) => a + b, 0));
console.log(rowsums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

// I want all the test cases which have failed.
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j])
        }
    }
}


let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
];

for (let i = 0; i < array_2d.length; i++) {
    for (let j = 0; j < array_2d[i].length; j++) {
        process.stdout.write(array_2d[i][j] + " ")
    }
    console.log();
}


for (let i = 0; i < array_2d.length; i++) {
    for (let j = 0; j < array_2d[i].length; j++) {
        process.stdout.write(String(array_2d[i][j]))
    }
    console.log();
}

// process.stdout.write in Node.js only accepts
// data of type string or Buffer.
// If array_2d[i][j] resolves to a number, boolean, or object,
// it will throw an ERR_INVALID_ARG_TYPE error.
//Hence weare using String(array_2d[i][j]) to convert num to string