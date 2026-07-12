interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class Testcase implements Executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("[RUN] " + this.name)
    }
    getStatus(): string {
        return "PASS";
    }
}

let TC = new Testcase("Verify Login redirect");
TC.run();
console.log(TC.getStatus());