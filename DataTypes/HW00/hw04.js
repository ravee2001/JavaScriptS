let str1 = 'Table';
let str2 = 'Chairs'; 
let str3 = 'Couch';

let iterator1 = str1[Symbol.iterator]();
let iterator2 = str2[Symbol.iterator]();
let iterator3 = str3[Symbol.iterator]();

while (true) {
    let result = iterator1.next();
    if (result.done) break;
    console.log(result.value); 
}
    console.log(' ');
while (true) {
    let result = iterator2.next();
    if (result.done) break;
    console.log(result.value); 
}
    console.log(' ');
while (true) {
    let result = iterator3.next();
    if (result.done) break;
    console.log(result.value); 
}