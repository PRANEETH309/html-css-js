let sign=document.getElementById("sign2");
sign.addEventListener("mouseenter",function(){
    sign.style.textDecoration="underline";
});
sign.addEventListener("mouseleave",function(){
    sign.style.textDecoration="none";
});


let visit=document.getElementById("visit1");
visit.addEventListener("mouseenter",function(){
    visit.style.textDecoration="underline";
});
visit.addEventListener("mouseleave",function(){
    visit.style.textDecoration="none";
});


let men6=document.getElementById("men2");
men6.addEventListener("mouseenter",function(){
    men6.style.display="block";
});
men6.addEventListener("mouseleave",function(){
    men6.style.display="none";
});


let men5=document.createElement("li");
men5.textContent("shirt");
men5.textContent("T-shirt");
men5.textContent("pant");
men5.textContent("shorts");
men5.textContent("trousers");
document.getElementById("men2").appendChild(men5);

