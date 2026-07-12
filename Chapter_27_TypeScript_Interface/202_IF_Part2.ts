interface APIresponse {
    body: string;
    headers?: object;
    responseTime?: number;
}
// ? - optional

let response1: APIresponse = {
    body: "Hi"
};

let response2: APIresponse = {
    body: "Hello",
    headers: { a: 'A', b: 'B' },
    responseTime: 400
};

console.log(response1.body);
console.log(response2.body, response2.headers, response2.responseTime);
