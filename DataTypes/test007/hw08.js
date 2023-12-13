//totalVolume ([4, 2, 4] , [3, 3, 3] , [1, 1, 2,] , [2 , 1, 1] ) -> 63
//totalVolume ([2, 2, 2] , [2, 1, 1]) -> 10
//totalVolume([1, 1, 1]) -> 1
 




//const arrayOfnumbers1 = [2, 2, 2]
//const arrayOfnumbers2 = [2, 1, 1]
//let num1 = arrayOfnumbers1;
//let num2 = arrayOfnumbers2;

//const sum = arrayOfnumbers1.reduce + arrayOfnumbers2.reduce((accumeulator, currentValue) => {
//   return accumeulator + currentValue;
//});


//console.log(sum); //10
//========================================

//console.log(Math.min(1, 1, 1));
//=========================================

const numbers = [10, 20, 30, 40]
const result = numbers.reduce((sum,number) => {
  return sum+number
}, 0)
console.log(result) // 100

