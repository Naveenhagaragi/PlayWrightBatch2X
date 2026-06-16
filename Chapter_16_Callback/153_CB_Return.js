function calculate(a, b, operation) {
    return operation(a, b);
}

calculate(2, 3, function (x, y) {
    console.log(x + y);
})

//this is came as 

let sum = calculate(4, 5, function (x, y) {
    return x + y;
})
console.log(sum)

console.log("-------------")

let diff = calculate(9, 4, function (x, y) {
    return x - y;
})
console.log(diff);

console.log("-------------")
let prod = calculate(3, 6, function (x, y) {
    return x * y;
})
console.log(prod)

console.log("-------------")
let div = calculate(27, 3, function (x, y) {
    return (x / y);
})
console.log(div)




function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Enter Credentials");
    callback();
}

function step4(callback) {
    console.log("Click Login button");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Done!");
            });
        });
    });
});