interface APIresponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responsetime?: number;
};

// readonly
// Readonly - cant modify the readonly

// ? - optional

let response: APIresponse = {
    statusCode: 200,
    body: '{"user": "Admin"}',
    headers: { env: 'STG' },
    responsetime: 1000
}

console.log(response.statusCode);
console.log(response.headers);
console.log(response.body);
console.log(response.responsetime);

//response.statusCode = 404;

response.body = 'abcdefgh';
response.headers = { env: "PROD" };

console.log(response.body);
console.log(response.headers);
