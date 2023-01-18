function promiseTimoeout(ms) {
    console.log("Do sometion");
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
async function longRunningOperation() {
    console.log("Start long running operation");
    // logic
    return 42;
}

async function run() {
    // logic
    console.log("Start!!");
    //try take of await and compare
    await promiseTimoeout(2000);
    //try to take uot and see
    const response = await longRunningOperation();
    console.log(response);

    console.log("Stop!!");
}

run();

