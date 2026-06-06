// Rest of the Parameters
// ... is used like 'and so on' i.e rest of the parameters

function logrestult(suitename, ...results) {
    console.log(suitename);
    console.log(results);
}

logrestult('Login Test', 1, 2, 3);
logrestult('Regression Test', 'Pass=1', 'Fail=2', 'Blocked=3')