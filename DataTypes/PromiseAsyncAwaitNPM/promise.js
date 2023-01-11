function promiseTimoeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimoeout(2000)
.then(() => {
    console.log("Done!!");
    return promiseTimoeout(1000);
})
.then(() => {
    console.log("Also done!!");
    return Promise.resolve(42);
})
.then((reslt) => {
    console.log(result);
})
.catch(() => {
    console.log("Error!")
});