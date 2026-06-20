async function testapi() {
    try {
        let result = await Promise.reject("500 error");
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Clean up..!!");
    }
}

testapi();