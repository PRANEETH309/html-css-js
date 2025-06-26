document.body.style.backgroundColor="skyblue";
let two=document.getElementsByClassName("one");
two[0].style.color="purple";
two[1].style.color="crimson";
two[2].style.color="grey";
document.querySelector(".three").style.color="red";
let element=document.querySelectorAll(".four");
element[0].style.color="brown";

/*function changebackground(){
    if(document.body.style.backgroundColor === "skyblue"){
        document.body.style.backgroundColor="white";   
    }
    else{
        document.body.style.backgroundColor="red";   
    }
    //alert("background color has been changed to white");
}*/

function changebackground(){
    document.body.style.backgroundColor=document.body.style.backgroundColor === "skyblue"?"red":"yellow";
    document.body.style.textAlign="center";
}
function changetext(){
    document.getElementById("clg").innerHTML="MALLA REDDY";
    document.getElementById("clg").style.color="white";
    document.getElementById("clg").style.backgroundColor="black";
}