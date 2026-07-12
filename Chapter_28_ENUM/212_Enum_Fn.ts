enum SeverityLevels {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}

console.log(SeverityLevels.LOW);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);

// Practice
// append url with Login page
let url = `${Environment.QA}/login/`;
console.log(url);

// if we do not assign a value to enum's it iwll assign indexes.
enum priority {
    Blocker,  // index 0
    Critical, // index 1
    High,     // index 2
    Medium,   // index 3
    Low       // index 4
}

console.log(priority.Blocker);

console.log(`Critical -> P${priority.Critical}`);
