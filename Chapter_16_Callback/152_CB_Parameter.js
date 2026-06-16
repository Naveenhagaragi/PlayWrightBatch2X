function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start testing!");
});

greetTester("Dev", () => {
    console.log("Let's start testing!");
});


// // Callback with Parameters


function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function (name, result) {
    console.log(name + " → " + result);
});


// Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
});

console.log("Total bugs: " + bugs.length);










//Practice

function onboarding(name, subscription) {
    console.log("Welcome " + name)
    subscription()
}

onboarding("Naveen", function () {
    console.log("Thank you for subscribing to our services")
});

onboarding("Ishaan", () => {
    console.log("you are subscribed to our services")
})

// callback with parameters

function testresult(testname, callback) {
    let status = 'Pass';
    callback(testname, status);
}

testresult("Login", function (name, result) {
    console.log(`${name} => ${result}`);
})

// Sync Callback — forEach

let errortype = ["400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found", "405 Method Not Allowed"];

errortype.forEach(function (error, i) {
    console.log(`Error# ${i + 1} => ${error}`)
});

