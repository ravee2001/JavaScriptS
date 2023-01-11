const promise = new Promise((resolve, reject) => {
    const res = true;
    // An asynchronous operation.
    if (res) {
        resolve("Resolved!");
    } else {
        reject(Error("fatal Error"));
    }
});
promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);
