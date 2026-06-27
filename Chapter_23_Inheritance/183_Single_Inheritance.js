class BasePage {
    constructor(pagename) {
        this.pagename = pagename;
    }

    open() {
        console.log("Opening the Browser");
    }

    close() {
        console.log("Closing the Browser");
    }
}

class LoginPage extends BasePage {

}

const page = new LoginPage("LOGINPAGE");
console.log(page.pagename);
page.open();
page.close();