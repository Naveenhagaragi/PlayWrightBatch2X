interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginbuttnonSelector: string;
}

interface freeTrialPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginpage: LoginPage = {
    url: "/login",
    title: 'Login Page',
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginbuttnonSelector: "#login-btn"
}

let freetrialpage: freeTrialPage = {
    url: "/free-trial",
    title: "free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit-btn"
}

console.log("URL: " + loginpage.url);
console.log("Title: " + loginpage.title);
console.log("username: " + loginpage.usernameSelector);
console.log("Password: " + loginpage.passwordSelector);
console.log("LoginButton: " + loginpage.loginbuttnonSelector);

console.log("-----------");

console.log("URL: " + freetrialpage.url);
console.log("Title: " + freetrialpage.title);
console.log("username: " + freetrialpage.usernameSelector);
console.log("SubmitButton: " + freetrialpage.submitButtonSelector);

