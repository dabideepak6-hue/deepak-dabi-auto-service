/*=========================================
  DEEPAK DABI EV REPAIRING COURSE
  script.js
=========================================*/

console.log("Deepak Dabi EV Repairing Course Loaded");


// ----------------------------
// Welcome Message
// ----------------------------

window.addEventListener("load", () => {

setTimeout(() => {

alert("⚡ Welcome to Deepak Dabi EV Repairing Course");

},500);

});


// ----------------------------
// Smooth Scroll
// ----------------------------

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ----------------------------
// Search Course
// ----------------------------

function searchCourse(){

let input=document.getElementById("search");

if(!input) return;

let value=input.value.toLowerCase();

let cards=document.querySelectorAll(".card");


cards.forEach(card=>{

let text=card.innerText.toLowerCase();


if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}


const searchBox=document.getElementById("search");


if(searchBox){

searchBox.addEventListener("keyup",searchCourse);

}



// ----------------------------
// Dark / Light Mode
// ----------------------------

const modeButton=document.createElement("button");


modeButton.innerHTML="🌙";

modeButton.style.position="fixed";
modeButton.style.right="20px";
modeButton.style.bottom="20px";
modeButton.style.width="55px";
modeButton.style.height="55px";
modeButton.style.borderRadius="50%";
modeButton.style.border="none";
modeButton.style.fontSize="22px";
modeButton.style.cursor="pointer";
modeButton.style.background="#00d084";
modeButton.style.color="#fff";
modeButton.style.zIndex="9999";


document.body.appendChild(modeButton);


let dark=true;


modeButton.onclick=function(){


if(dark){


document.body.style.background="#ffffff";
document.body.style.color="#111111";


document.querySelectorAll(".card").forEach(card=>{

card.style.background="#f4f4f4";
card.style.color="#111";

});


modeButton.innerHTML="☀️";

dark=false;


}else{


document.body.style.background="#0d1117";
document.body.style.color="#ffffff";


document.querySelectorAll(".card").forEach(card=>{

card.style.background="#161b22";
card.style.color="#ffffff";

});


modeButton.innerHTML="🌙";

dark=true;


}

};



// ----------------------------
// Back To Top Button
// ----------------------------

const topBtn=document.createElement("button");


topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.left="20px";
topBtn.style.bottom="20px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#0d6efd";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";


document.body.appendChild(topBtn);



window.addEventListener("scroll",()=>{


if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});



topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// ----------------------------
// Fade Animation
// ----------------------------

const observer=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";


}

});


});



document.querySelectorAll(".card").forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";


observer.observe(card);


});




// ----------------------------
// Progress Save (FIXED)
// ----------------------------

function saveProgress(module){

localStorage.setItem("lastModule", module);

}



document.querySelectorAll(".card").forEach(card=>{


card.addEventListener("click",function(e){


// Ignore Start Module Button Click

if(e.target.closest("a")){

return;

}


saveProgress(card.innerText);


});


});



const last = localStorage.getItem("lastModule");


if(last){

console.log("Last Module :",last);

}




// ----------------------------
// Footer Year
// ----------------------------


const footer=document.querySelector("footer");


if(footer){

footer.innerHTML+=`<br><br>© ${new Date().getFullYear()} Deepak Dabi EV Repairing Course`;

}




// ----------------------------
// Online / Offline
// ----------------------------


window.addEventListener("offline",()=>{

alert("⚠ Internet Disconnected");

});


window.addEventListener("online",()=>{

alert("✅ Internet Connected");

});



// ----------------------------
// End
// ----------------------------

console.log("All Features Loaded Successfully.");
