let APIcall = new Promise(function (resolve, reject) {
    reject({ status: 500, body: 'Error' });
});

APIcall.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
    console.log(error.status);
    console.log(error.body)
})


// .catch() runs ONLY when promise is rejected
// .then() is completely skipped