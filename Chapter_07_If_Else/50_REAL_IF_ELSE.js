let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// app.vwo.com -> viewer, editor or admin -> 


let isLoggedIn = true;
let userRole = "abcd";

if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("Welcome Admin, you have full acess");
    }
    else if (userRole === "Editor") {
        console.log("Welcome Editor, You have edit access");
    }
    else if (userRole === "Viewer") {
        console.log("Welcome Viewer, You can only view the webpage");
    }
    else {
        console.log("Welcome User, you are a guest user");
    }

}

else {
    console.log("You are not logged in");
}