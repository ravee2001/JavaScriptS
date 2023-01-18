function promiseTimoeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    // logic
    console.log("start!!");
    //try take of await and compare
    await promiseTimoeout(2000);
    console.log("Stop!!");
}
console.log("Bafore run")
run();
console.log("After run")