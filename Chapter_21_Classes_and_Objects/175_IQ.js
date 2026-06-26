class Browser {

    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("Starting " + this.name + " Browser");
    }

    closeBrowser() {
        console.log("Closing " + this.name + " Browser");
    }

}

let chrome = new Browser("Chrome");
chrome.startBrowser();
console.log(chrome.isOpen);
chrome.closeBrowser();


let firefox = new Browser("Firefox");
firefox.startBrowser();
console.log(firefox.isOpen);
firefox.closeBrowser();