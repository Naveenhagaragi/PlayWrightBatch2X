function openBrowser() {
    return new Promise(function (resolve) {
        // Code to open the Browser
        resolve("Open the Broweser");
    })
}

// function openBrowser(callback) {
//     setTimeout(function () {
//         console.log("Step 01: Chrome browser opened");
//         callback();
//     }, 500);
// }

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}



openBrowser()
    .then(function (msg) {
        console.log("Step 1 :", msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });


// Practice
/*
function openchrome() {
    return new Promise(function (resolve) {
        resolve("Open Chrome")
    })
}

function enterURL() {
    return new Promise(function (resolve) {
        resolve("Enter URL")
    })
}

function SignIn() {
    return new Promise(function (resolve) {
        resolve("Navigate to SignIn page")
    })
}

function entercreds() {
    return new Promise(function (resolve) {
        resolve("Enter User credentials")
    })
}

function login() {
    return new Promise(function (resolve) {
        resolve("Click on Login button")
    })
}


openchrome().then(function (msg1) {
    console.log('Step 1: ', msg1)
    return enterURL()
}).then(function (msg2) {
    console.log('Step 2: ', msg2)
    return SignIn()
}).then(function (msg3) {
    console.log('Step 3: ', msg3)
    return entercreds()
}).then(function (msg4) {
    console.log('Step 4: ', msg4)
    return login()
}).then(function (msg5) {
    console.log('Step 5: ', msg5)
}).catch(function (error) {
    console.log("Error: ", error)
}).finally(function () {
    console.log("Done..!! User Logged in Successfully")
})

*/