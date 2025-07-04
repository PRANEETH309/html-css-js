let sign=document.getElementById("sign2");
sign.addEventListener("mouseenter",function(){
    sign.style.textDecoration="underline";
});
sign.addEventListener("mouseleave",function(){
    sign.style.textDecoration="none";
});

let care=document.getElementById("care2");
care.addEventListener("mouseenter",function(){
    care.style.textDecoration="underline";
});
care.addEventListener("mouseleave",function(){
    care.style.textDecoration="none";
});

let visit=document.getElementById("visit1");
visit.addEventListener("mouseenter",function(){
    visit.style.textDecoration="underline";
});
visit.addEventListener("mouseleave",function(){
    visit.style.textDecoration="none";
});

let list = document.getElementById("men2");
list.innerHTML = `
  <li>Shirt</li>
  <li>Pants</li>
  <li>T-shirt</li>
  <li>Shorts</li>
  <li>Trousers</li>`;

let men = document.getElementById("men");
men.addEventListener("mouseenter",function() {
  list.style.display = "block";
});
men.addEventListener("mouseleave",function(){
  list.style.display = "none";
});

let heart=document.getElementById("heart1");
heart.addEventListener("click",function(){
    heart.style.color="red";
});

