//Eqality test 1
console.log("pen" === "pen");
//Ineqality test 2
console.log(("pen" as string) != "pensil");
//lower case function test 3
console.log('PHONE'.toLowerCase() === "phone");
// Numerical tests involving equality test 4
console.log(20 === 20);
// Numerical tests involving  inequality test 5
console.log(23 as number != 20);
//  less than test 6
console.log(10 > 8);
// greater than test 7
console.log(7 < 10);
// greater than or equal to test 8
console.log(20 >= 10);
// and less than or equal to test 9
console.log(10 <= 20);
// Using "and" operators test 10
console.log( 4===4 && 20>4);
// Using "or" operators test 11
console.log(3===3 || false)
// Test whether an item is in a array test 12
const items:string[]=[ "pen", "pensil","sharpner","eraser"];
console.log(items.includes("sharpner"));
// Test whether an item is not in a array test 13
const names:string[]=["ali","esha","nimra","ahmed"];
console.log(!names.includes("bilal"));
