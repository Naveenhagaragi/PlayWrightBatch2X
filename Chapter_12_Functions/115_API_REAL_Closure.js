function makeRetryTracker(max) {
    attempt = 0;
    function tryAgain(testname) {
        attempt++;
        if (attempt > max) {
            return `${testname} exceeded max ${max} retries`;
        }
        return `${attempt}/${max} retries for ${testname}`;
    }
    return tryAgain;
}

let retry = makeRetryTracker(3);
console.log(retry('Login'));
console.log(retry('Login'));
console.log(retry('Login'));
console.log(retry('Login'));
