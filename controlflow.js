let age=18;
if(age<18){
    console.log("you are a minor");
}
else if(age>=18 && age<65){
    console.log("you are an adult");
}
else{
    console.log("you are a senior citizen");
}


//Switch Statement
let day=6;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day")
}


//for loop
for(let i=0;i<5;i++){
    console.log("Iteration:",i);
}
console.log("\n");


//While loop
let j=0;
while(j<5){
    console.log("while loop Iteration:",j);
}
console.log("\n");


// do while loop
