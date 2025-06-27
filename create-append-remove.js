let aish=document.createElement("p");
aish.textContent="I am chitti";
document.getElementById("vasi").appendChild(aish);
document.body.style.backgroundColor="skyblue";
setTimeout(()=>{
    let re=document.getElementsByClassName("list")[3];
    if(re){
        re.remove();
    }
},5000);
let newHeading=document.createElement("h2");
newHeading.innerHTML="This is new heading added  by javascript";
newHeading.style.color="purple";
document.body.appendChild(newHeading);
setTimeout(()=>{
    let newText=document.createElement("p");
    newText.textContent="This text is added after three seconds";
    newText.style.color="orange";
    document.body.appendChild(newText);
},3000);
let tagText=document.createElement("p");
tagText.textContent="this text is appended to the tag";
tagText.style.color="green";
document.getElementById("vasi").appendChild(tagText);

let mylist=document.createElement("ul");
for(let i=1;i<=3;i++){
    let listitems=document.createElement("li");
    listitems.textContent="Item" +i;
    listitems.style.color="red";
    listitems.style.fontSize="18px";
    

}