function runTest(testName, status, duration) {
    return `${testName}: ${status} ${duration}ms`
}

let res = runTest('Login', 'Pass', 3000);
console.log(res);

// Practice 
//rewrite above as Arrow function
runTest1 = (testName, status, duration) => {
    return `${testName}: ${status} ${duration}ms`
}

console.log(runTest1('Signup', 'Pass', 5000));

//line 14 is equal to below code
/*
const result = runTest1('Signup', 'Pass', 5000);
console.log(result);
*/