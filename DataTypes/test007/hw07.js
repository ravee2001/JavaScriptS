//capToFront("hApPy") -> "APhpy"
//capToFront("moveMENT") -> "MENTmove"
//capToFront("asOrtCAKE") -> "OCAKEshrt"




const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
  let NoMissing = "has no missing digits";
  let temp = [];
  let count = 0;

  let cou = [0,0,0,0,0,0,0,0,0,0];
  
  for (let index = 0; index < numStr.length; index++) {
    switch (numStr[index]) {
      case "1": ++cou[1]; break;
      case "2": ++cou[2]; break; 
      case "3": ++cou[3]; break; 
      case "4": ++cou[4]; break; 
      case "5": ++cou[5]; break; 
      case "6": ++cou[6]; break; 
      case "7": ++cou[7]; break; 
      case "8": ++cou[8]; break; 
      case "9": ++cou[9]; break;
      case "0": ++cou[0]; break;
       
    }
  }
for (let n = 0 ; n < 10; n++) {
  if (cou[n]== 0 ) {
    temp[count] = n;
    count++;
  }
}
switch (numStr) {
  case numStr2: return `${numStr2} ${NoMissing}`;
  case numStr1: return `${numStr} Missing Digit = ${temp}`;
  case numStr3: { 
    let output = temp[0] + ', ' + temp[1]
    return `${numStr} Missing Digit = ${output}`;
   }
  }
}
console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));
