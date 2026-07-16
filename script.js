/* ==========================================
DEEPAK DABI EV
SCRIPT.JS FINAL
========================================== */


/* ==========================================
MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}



/* Close Menu On Link Click */

document.querySelectorAll(".nav-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});



/* ==========================================
FAQ ACCORDION
========================================== */


const faqItems =
document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


const question =
item.querySelector(".faq-question");


if(question){

question.addEventListener("click",()=>{


faqItems.forEach(other=>{

if(other!==item){

other.classList.remove("active");

}

});


item.classList.toggle("active");


});


}


});



/* ==========================================
BACK TO TOP BUTTON
========================================== */


const topBtn =
document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY>400){

if(topBtn){

topBtn.style.display="flex";

}

}

else{

if(topBtn){

topBtn.style.display="none";

}

}


});



if(topBtn){

topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});

}



/* ==========================================
COUNTER ANIMATION
========================================== */


const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target =
Number(counter.innerText);


let count=0;


let speed=50;



function update(){


if(count < target){


count += Math.ceil(target/100);


counter.innerText=count+"+";


setTimeout(update,speed);


}

else{


counter.innerText=target+"+";


}


}


update();


});



/* ==========================================
SCROLL REVEAL
========================================== */


const revealElements =
document.querySelectorAll(".reveal");



function reveal(){


revealElements.forEach(element=>{


let position =
element.getBoundingClientRect()
.top;


let screen =
window.innerHeight - 100;



if(position < screen){

element.classList.add("show");

}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();



/* ==========================================
AUTO YEAR UPDATE
========================================== */


const year =
document.querySelector("#year");


if(year){

year.innerHTML =
new Date().getFullYear();

}



/* ==========================================
PAGE LOADER REMOVE
========================================== */


window.addEventListener(
"load",
()=>{


const loader =
document.querySelector(".loader");


if(loader){

loader.style.opacity="0";


setTimeout(()=>{

loader.remove();

},500);


}


});



/* ==========================================
ACTIVE NAV LINK
========================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".nav-menu a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let top =
window.scrollY;


let offset =
section.offsetTop-150;


let height =
section.offsetHeight;


let id =
section.getAttribute("id");



if(top>=offset &&
top < offset+height){

current=id;

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href")
=="#"+current){


link.classList.add("active");


}


});


});



/* ==========================================
CONSOLE BRANDING
========================================== */


console.log(
"%c Deepak Dabi EV Repairing Course ",
"background:#00e5ff;color:#000;font-size:20px;font-weight:bold;"
);


console.log(
"Premium EV Learning Platform"
);


/* ==========================================
END SCRIPT
========================================== */
