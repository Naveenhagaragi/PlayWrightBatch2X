interface BugReport {
    id: number;
    Title: string;
    Severity: string;
    StepsToReproduce: string[];
}

let Bug1: BugReport = {
    id: 1,
    Title: "Login Failed",
    Severity: "High",
    StepsToReproduce: ["step1: Launch Chrome Browser", "step2: Enter Credentails and Login "]
}

let Bug2: BugReport = {
    id: 2,
    Title: "Signup Failed",
    Severity: "High",
    StepsToReproduce: ["step1: Launch Chrome Browser", "step2: click on signup ", "Step3: Enter userdetails and signup"]
}

let Bug3: BugReport = {
    id: 3,
    Title: "Login button is named as Lohin",
    Severity: "MEDIUM",
    StepsToReproduce: ["step1: Launch the site", "step2: Observe text on Login button"]
}

console.log("Bug#", Bug1.id, " -> ", Bug1.Title, " -> ", Bug1.Severity, '\n', Bug1.StepsToReproduce[0], '\n', Bug1.StepsToReproduce[1]);
console.log();
console.log("Bug#", Bug2.id, " -> ", Bug2.Title, " -> ", Bug2.Severity, '\n', Bug2.StepsToReproduce[0], '\n', Bug2.StepsToReproduce[1], '\n', Bug2.StepsToReproduce[2]);
console.log();
console.log("Bug#", Bug3.id, " -> ", Bug3.Title, " -> ", Bug3.Severity, '\n', Bug3.StepsToReproduce[0], '\n', Bug3.StepsToReproduce[1]);