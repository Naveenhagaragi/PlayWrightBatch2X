interface TestConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;
}

let ciConfig: TestConfig = {
    browser: 'Chrome',
    headless: true,
    baseURL: "https://staging.app.com",

}

let localConfig: TestConfig = {
    browser: "Firefox",
    headless: false,
    baseURL: "https://localhost:3000",
    timeout: 10000,
    retries: 2
}

console.log("CI: ", ciConfig.browser, " | Timeout: ", ciConfig.timeout, "ms");
console.log("Local: ", localConfig.browser, " | timeout: ", localConfig.timeout, "ms");