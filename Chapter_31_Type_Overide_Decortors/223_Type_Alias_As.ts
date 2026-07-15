let rawResponse: unknown = {
    status: 200,
    body: { user: "admin", role: "tester" }
}

interface userResponse {
    status: number,
    body: { user: string, role: string }
}

let response = rawResponse as userResponse;

console.log("Status: ", response.status);
console.log("User: ", response.body.user);
console.log("Role: ", response.body.role);
console.log(response.body)