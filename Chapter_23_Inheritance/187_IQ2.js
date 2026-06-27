class TestCase {
    execute() {
        console.log("Running Generic Test cases");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API Test: sending HTTP request")
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E Test: Running full flow");
    }
}

class RegressionTest extends TestCase {
    execute() {
        console.log("Running Regression Test: executing regression tests")
    }
}

let tests = [new TestCase(), new APITest(), new E2ETest(), new RegressionTest()];
tests.forEach(function (test) {
    test.execute();

});