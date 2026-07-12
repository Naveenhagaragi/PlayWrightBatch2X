interface testHook {
    (TestName: string): void;
}

let beforeEachHook: testHook = function (TestName: string) {
    console.log("[Before] setting up", TestName);
}
// make a connection to lib

let afterEachHook: testHook = function (TestName: string) {
    console.log("[After] teardown", TestName);
}

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

beforeEachHook("Logintest");

let test1: TestCase = {
    id: 1,
    name: "Login with Valid Credentials",
    status: "PASS",
    duration: 1500
}

let test2: TestCase = {
    id: 2,
    name: "Book a Reservation",
    status: "PASS",
    duration: 1500
}
console.log("TC" + test1.id + ": " + test1.name + " -> " + test1.status);
console.log("TC" + test2.id + ": " + test2.name + " -> " + test2.status);
afterEachHook("Loin Test");
