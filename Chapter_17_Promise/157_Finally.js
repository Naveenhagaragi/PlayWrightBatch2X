let testrun = new Promise(function (resolve, reject) {
    let apicall = true;
    if (apicall) {
        resolve({ 'status': 'done' })
    } else {
        reject("Assertion failed")
    }

});

testrun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error)
}).finally(function () {
    // This code will be ecexuted anyhow
    console.log("I will be executed anyhow..!");
})