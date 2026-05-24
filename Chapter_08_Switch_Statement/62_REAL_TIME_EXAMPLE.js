// You are working API Validation
// response Code - 200, 404, 401, 403.....404

let responsecode = 400;

switch (responsecode) {
    case 200:
        console.log("200 OK");
        break;
    case 400:
        console.log("400 Bad Request");
        break;
    case 401:
        console.log("401 Unauthorised");
        break;
    case 403:
        console.log("403 Forbidden");
        break;
    case 404:
        console.log("404 Not Found");
        break;
    case 500:
        console.log("500 Internal Server Error");
        break;
    case 502:
        console.log("502 Bad Gateway");
        break;
    default:
        console.log("Response code not matched")
}