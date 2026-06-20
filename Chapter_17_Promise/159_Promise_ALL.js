let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All the checks are fine");
})

Promise.all([
    Promise.resolve("Auth OK"),
    Promise.reject("DB down"),
    Promise.resolve("Cache OK")
]).then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error)
})


Promise.allSettled([
    Promise.resolve("Test A Pass..!"),
    Promise.reject("Test B Fail..!"),
    Promise.resolve("Test C Pass..!")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test ", (i + 1), ":", r.status, " - ", r.value || r.reason);
    })
})

// This is like a test report —
// you want results for ALL tests,
// not just stop at the first failure.