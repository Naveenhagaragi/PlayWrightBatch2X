class BaseTest {
    setup() {
        console.log("Base : Opening Browser")
    }

    teardown() {
        console.log("Base : Closing Browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup();
        console.log("UI: Maximise window");
    }

    teardown() {
        console.log("UI : Minimise Window");
        super.teardown();
    }
}

const test = new UITest();
test.setup();
test.teardown();
