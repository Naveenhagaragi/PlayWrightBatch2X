class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Naveen extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let nvn = new Naveen();
let parent = new Father();

nvn.home();
parent.home();
