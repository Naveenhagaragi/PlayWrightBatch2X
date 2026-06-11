let config = {};

config.browser = "chrome";
config.mode = "incognito";
config.timeout = 3000;
config.testname = "Login";

console.log(config);

delete config.mode;
console.log(config);

if (config.browser === "chrome") {
    console.log(`I will execute ${config.testname} testcase in ${config.browser} browser`);
}
else {
    console.log(`I will excute ${config.testname} testcase in  Default browser`);
}


// Practice

let config2 = {
    browser: "firefox",
    mode: "private",
    timeout: 3000,
    testname: "Login test"
};

console.log(config2);

delete config2.mode;
console.log(config2);

if (config2.browser === "chrome") {
    console.log(`${config2.testname} will be executed in ${config2.browser} browser with ${config2.timeout}ms gap`);
}
else {
    console.log(`${config2.testname} will be executed in ${config2.browser} browser with ${config2.timeout}ms gap`);
}


