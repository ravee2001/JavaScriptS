//Arrow function with two arguments
const sum = (firaParam , secondParam) =>{
    return firsParam + secondParam;
};
console.log(sum(2,5)); //Prints:7
//Arrow function with on arguments
const printHello = () => {
    console.log("hello")
};
printHello(); // Prints: hello

//Arrow function with a single argument
const checkWeinght = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms`);
}
    checkWeinght(25); //

    //Concise arrow functions
    const multiply = (a,b)