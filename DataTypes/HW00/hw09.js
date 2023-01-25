// getBudgets ([
//    {name : "John", age: 21, budget: 23000} ,
//    {name : "Steve", age: 32, budget: 40000} ,
//    {name : "Martin", age: 16, budget: 2700} 
// ]) -> 65700

//getBudgets ([
//    { name : "Johm", age: 21, budget: 29000 },
//    {name : "Steve", age: 32, budget: 32000} ,
//    {name : "Martin", age: 16, budget: 1600} 
// ]) -> 62600


const getBudgets = [
       {name : "John", age: 21, } ,
       {name : "Steve", age: 32, } ,
       {name : "Martin", age: 16, } 
 ]
 let result = []
 for (let i = 0; i < getBudgets.length; i++) {
   if (getBudgets[i].age > 25) {
      result.push(getBudgets[i])
   }
 }
 console.log(result)
 // [{name: "Adam", age: 48}, {name: "Danny", age: 30}]