function retry(testname, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testname} upto ${maxRetries} times, ${delay}ms apart`);
}

retry('login');
retry('Regression', 5, 3000);