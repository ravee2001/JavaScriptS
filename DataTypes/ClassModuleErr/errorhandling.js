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

//throwing in try...Catch
console.log("\n*********Throwing in Try..Catch*********\n")

try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

// Try..CAtch..Finally
console.log("\n*****Try..Catch..Finally*****\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an Error");
} finally {
    console.log("Code that always will run");
}
function hello(){
    console.log("\n**********Throwing Exeptions**********\n");
}
