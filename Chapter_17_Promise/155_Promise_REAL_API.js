let APIcall = new Promise(function (resolve, reject) {
    resolve({
        status: 200, body: "user data"
    })

});


APIcall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body)
});

// .then() runs ONLY when promise resolves successfully
