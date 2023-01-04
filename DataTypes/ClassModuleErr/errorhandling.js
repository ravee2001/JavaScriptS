function criticalCode() {
    throw "thorwing an exception";
}

function logError(theException) {
    console.log(theException);
}

//Try..Catch
console.log("\n*********try..Catch*********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//throwing in try