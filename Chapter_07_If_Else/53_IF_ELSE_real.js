let username = "Dev";
let password = "abc123";
let isAccountLocked = false;

// Logical Operator + if-else statement

if ((username == "Dev" && password == "abc123") && !isAccountLocked) {
    console.log("User can Login to the Application")
}
else if ((username == "Dev" && password == "abc123") && isAccountLocked) {
    console.log("Account Locked,Please unlock your account");
}
else
    console.log("Incorrect username or password, please try again");

