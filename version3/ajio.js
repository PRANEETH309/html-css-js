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

let list1 = document.getElementById("women2");
list1.innerHTML = `
  <li>KurtasDress</li>
  <li> Material</li>
  <li>Salwars & Churidars</li>
  <li>Kurtis & Tunics</li>
  <li>Sarees</li>`;

let women = document.getElementById("women");
women.addEventListener("mouseenter",function() {
  list1.style.display = "block";
});
women.addEventListener("mouseleave",function(){
  list1.style.display = "none";
});

let list2 = document.getElementById("kid2");
list2.innerHTML = `
  <li>Action-Figurine & Collectibles</li>
  <li>Creative & Educational Toys</li>
  <li>Gaming, Robots & Vehicles</li>
  <li>Infants Toys</li>
  <li>Role & Pretend Play</li>`;

let kid = document.getElementById("kid");
kid.addEventListener("mouseenter",function() {
  list2.style.display = "block";
});
kid.addEventListener("mouseleave",function(){
  list2.style.display = "none";
});

let list3 = document.getElementById("beauty2");
list3.innerHTML = `
  <li>Cleanser</li>
  <li>Moisturisers</li>
  <li>Serum</li>
  <li>Sunscreen</li>
  <li>Masks</li>`;

let beauty = document.getElementById("beauty");
beauty.addEventListener("mouseenter",function() {
  list3.style.display = "block";
});
beauty.addEventListener("mouseleave",function(){
  list3.style.display = "none";
});

let list4 = document.getElementById("home2");
list4.innerHTML = `
  <li>Blankets, Dohars & Quilts</li>
  <li>Bed Wedges & Neck Pillows</li>
  <li>Lamp, Diyas & Candle</li>
  <li>Serveware & Drinkware</li>
  <li>Laundry Baskets & Dryers</li>`;

let home = document.getElementById("home");
home.addEventListener("mouseenter",function() {
  list4.style.display = "block";
});
home.addEventListener("mouseleave",function(){
  list4.style.display = "none";
});


