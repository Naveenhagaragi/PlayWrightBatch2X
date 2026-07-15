class BaseTest {
    setup(): void {
        console.log("[BASE] Open Browser");
    }
    teardown(): void {
        console.log("[BASE] Close Browser")
    }
}

class LoginTest extends BaseTest {
    override setup(): void {
        console.log("[LOGINTEST] Open Browser");
        console.log("[LOGINTEST] Maximise")
    }
}

class APITest extends BaseTest {
    override setup(): void {
        console.log("[APITEST] NO Browser");
    }
}

let test = new LoginTest();
test.setup();

let apitest = new APITest();
apitest.setup();
apitest.teardown(); // calls teardown() from Basetest



