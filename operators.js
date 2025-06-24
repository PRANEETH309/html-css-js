let a=10;
let b=5;
console.log("Arithmetic operators");
console.log("a=",a,",b=",b);
let sum=a+b;
let difference=a-b;
let product=a*b;
let divide=a/b;
let remainder=a%b;
let exponent=a**b;
console.log("sum:",sum);
console.log("difference",difference);
console.log("Product:",product);
console.log("Divide:",divide);
console.log("Remainder:",remainder);
console.log("Exponent:",exponent);
console.log("\n")



//2.Assignment operators
var x=10;
x+=5;
x-=3;
x*=2;
x/=4;
x%=3;
console.log("Assignment Operators");
console.log("X after assignment:",x);
console.log("\n");



//3.Comparision Operators
let isEqual=(a=b);
let isStrictEqual=(a===b);
let isNotEqual=(a!=b);
let isstrictNotEqual=(a!==b);
let isGreaterThan=(a>b);
let isLessThan=(a<b);
let isGreaterThanOrEqual=(a>=b);
let isLessThanOrEqual=(a<=b);
console.log("Comparision Operators:");
console.log("Is Equal:",isEqual);
console.log("Is Strict Equal:",isStrictEqual);
console.log("Is Not Equal:",isNotEqual)
console.log("Is Strict Not Equal:",isstrictNotEqual);
console.log("Is Greater Than :",isGreaterThan);
console.log("Is Less Than:",isLessThan);
console.log("Is Greater Than Or Equal:",isGreaterThanOrEqual);
console.log("Is Less Than Or Equal:",isLessThanOrEqual);
console.log("\n")




//4.Logical Operators
let andOperator=(a>0 && b>0);
let orOperator=(a>0 || b>0);
let notOperator=!(a<b);
console.log("Logical Operators:");
console.log("AND Operator:",andOperator);
console.log("OR Operator:",orOperator);
console.log("NOT Operator:",notOperator);
console.log("\n")



//5.Bitwise Operators
let bitwiseAnd= a&b;
let bitwiseOr= a|b;
let bitwiseXor=a^b; 
let bitwiseNot=~a;
let leftShift=a<<1;
let rightShift=a>>1;
console.log("Bitwise Operators:");
console.log("Bitwise AND:",bitwiseAnd);
console.log("Bitwise OR:",bitwiseOr);
console.log("Bitwise NOt:",bitwiseNot);
console.log("Bitwise XOR:",bitwiseXor);
console.log("Left Shift:",leftShift);
console.log("Right shift:",rightShift);
console.log("\n");




//6. Ternary operators

let age=18;
let eligibility=(age >=18)?"Eligible to vote" :"Not eligible to vote";
console.log("Ternary Operators");
console.log("Eligibility:",eligibility);
console.log("\n");


//7. type of value operator

let VaribleType=typeof a;
console.log("Types of value operators");
console.log("Type of Variable:",VaribleType);
console.log("\n");

