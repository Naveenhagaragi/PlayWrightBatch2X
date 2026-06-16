let testmatrix = [
    ["Login", "pass", 200],
    ["Search", "fail", 404],
    ["checkout", "pass", 180],
    ["payment", "fail", 501]
];

//How many test cases have we executed.
// how many test cases are passed
// What is the status codes that you got for failed test cases?

// Print 2d array
for (let i = 0; i < testmatrix.length; i++) {
    for (let j = 0; j < testmatrix[i].length; j++) {
        console.log(testmatrix[i][j]);
    }
    console.log();
}



//another way to print the 2d array
for (row of testmatrix) {     // row & cell are variable names, i.e x,y
    for (cell of row) {
        console.log(cell + " ");
    }
    console.log();
}

// another way to print 2d array usong forEach
testmatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});


// How many test cases have we executed.
console.log(`Test cases executed: ${testmatrix.length}`);

// how many test cases are passed
let pass = 0; let fail = 0;
for (let i = 0; i < testmatrix.length; i++) {

    if (testmatrix[i].includes("pass")) {
        console.log(testmatrix[i]);
        pass++;
    }
    else fail++;
}

console.log(`Passed test cases: ${pass}`);
console.log(`Failed test cases: ${fail}`);

// What is the status codes that you got for failed test cases?
for (let i = 0; i < testmatrix.length; i++) {
    if (testmatrix[i].includes("fail")) {
        console.log(testmatrix[i][2]);
    }
}