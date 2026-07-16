/*==========================================
DEEPAK DABI EV REPAIRING COURSE
PREMIUM SCRIPT.JS
PART 1
==========================================*/

console.log("⚡ Deepak Dabi EV Repairing Course Loaded");

/* ==========================
INTRO LOADING
========================== */

window.addEventListener("load", () => {

let progress = 0;

const bar = document.getElementById("loading-progress");

const text = document.getElementById("loading-text");

const intro = document.getElementById("intro-screen");

const loader = setInterval(() => {

progress++;

if(bar){

bar.style.width = progress + "%";

}

if(text){

text.innerHTML = "Loading... " + progress + "%";

}

if(progress >= 100){

clearInterval(loader);

setTimeout(()=>{

if(intro){

intro.style.opacity="0";

intro.style.transition="1s";

setTimeout(()=>{

intro.style.display="none";

},1000);

}

},500);

}

},35);

});

/* ==========================
WELCOME MESSAGE
========================== */

setTimeout(()=>{

showToast("⚡ Welcome To Deepak Dabi EV Repairing Course");

},1500);

/* ==========================
GOOD MORNING
========================== */

function greeting(){

const hour=new Date().getHours();

let msg="";

if(hour<12){

msg="🌞 Good Morning";

}

else if(hour<17){

msg="☀ Good Afternoon";

}

else{

msg="🌙 Good Evening";

}

console.log(msg);

}

greeting();

/* ==========================
LIVE CLOCK
========================== */

function liveClock(){

const clock=document.getElementById("clock");

if(!clock) return;

setInterval(()=>{

const now=new Date();

clock.innerHTML=now.toLocaleTimeString();

},1000);

}

liveClock();

/* ==========================
CURRENT DATE
========================== */

function currentDate(){

const date=document.getElementById("today");

if(!date) return;

const d=new Date();

date.innerHTML=d.toDateString();

}

currentDate();

/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================
TOAST MESSAGE
========================== */

function showToast(message){

const toast=document.createElement("div");

toast.innerHTML=message;

toast.style.position="fixed";

toast.style.bottom="30px";

toast.style.right="30px";

toast.style.background="#00d084";

toast.style.color="#fff";

toast.style.padding="15px 25px";

toast.style.borderRadius="10px";

toast.style.boxShadow="0 0 20px rgba(0,0,0,.4)";

toast.style.zIndex="999999";

toast.style.fontWeight="600";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3000);

}

/* ==========================
END PART 1
========================== */

console.log("✅ Script Part 1 Loaded");
/*==========================================
DEEPAK DABI EV REPAIRING COURSE
PREMIUM SCRIPT.JS
PART 2
==========================================*/

/* ==========================
LIVE SEARCH
========================== */

const searchBox = document.getElementById("search");

if(searchBox){

searchBox.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

/* ==========================
DARK / LIGHT MODE
========================== */

const themeBtn=document.createElement("button");

themeBtn.innerHTML="🌙";

themeBtn.id="themeBtn";

themeBtn.style.position="fixed";
themeBtn.style.right="20px";
themeBtn.style.bottom="20px";
themeBtn.style.width="60px";
themeBtn.style.height="60px";
themeBtn.style.borderRadius="50%";
themeBtn.style.border="none";
themeBtn.style.cursor="pointer";
themeBtn.style.fontSize="24px";
themeBtn.style.background="#00d084";
themeBtn.style.color="#fff";
themeBtn.style.zIndex="99999";

document.body.appendChild(themeBtn);

function darkMode(){

document.body.style.background="#0d1117";
document.body.style.color="#fff";

document.querySelectorAll(".card").forEach(card=>{

card.style.background="#161b22";
card.style.color="#fff";

});

localStorage.setItem("theme","dark");

themeBtn.innerHTML="🌙";

}

function lightMode(){

document.body.style.background="#ffffff";
document.body.style.color="#111";

document.querySelectorAll(".card").forEach(card=>{

card.style.background="#f4f4f4";
card.style.color="#111";

});

localStorage.setItem("theme","light");

themeBtn.innerHTML="☀";

}

if(localStorage.getItem("theme")==="light"){

lightMode();

}else{

darkMode();

}

themeBtn.onclick=()=>{

if(localStorage.getItem("theme")==="dark"){

lightMode();

}else{

darkMode();

showToast("🌙 Dark Mode Enabled");

}

};

/* ==========================
ACTIVE MENU
========================== */

const current=location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

if(link.getAttribute("href")==current){

link.classList.add("active");

}

});

/* ==========================
BUTTON RIPPLE EFFECT
========================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.5)";

ripple.style.left=(e.offsetX-size/2)+"px";

ripple.style.top=(e.offsetY-size/2)+"px";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.style.transform="scale(4)";
ripple.style.opacity="0";

},10);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================
KEYBOARD SHORTCUTS
========================== */

document.addEventListener("keydown",e=>{

if(e.key==="/"){

e.preventDefault();

if(searchBox){

searchBox.focus();

showToast("🔍 Search Enabled");

}

}

});

/* ==========================
END PART 2
==========================*/

console.log("✅ Script Part 2 Loaded");
/*==========================================
DEEPAK DABI EV REPAIRING COURSE
PREMIUM SCRIPT.JS
PART 3
==========================================*/

/* ==========================
SCROLL PROGRESS BAR
========================== */

const progressBar=document.createElement("div");

progressBar.id="scrollProgress";

progressBar.style.position="fixed";
progressBar.style.top="0";
progressBar.style.left="0";
progressBar.style.height="5px";
progressBar.style.width="0%";
progressBar.style.background="#00ff99";
progressBar.style.zIndex="999999";
progressBar.style.boxShadow="0 0 15px #00ff99";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progressBar.style.width=percent+"%";

});

/* ==========================
BACK TO TOP BUTTON
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

topBtn.style.position="fixed";
topBtn.style.left="20px";
topBtn.style.bottom="20px";
topBtn.style.width="60px";
topBtn.style.height="60px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#0d6efd";
topBtn.style.color="#fff";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="99999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================
CARD FADE ANIMATION
========================== */

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

card.style.transform="translateY(50px)";

card.style.transition=".8s";

observer.observe(card);

});

/* ==========================
COUNTER ANIMATION
========================== */

document.querySelectorAll(".counter").forEach(counter=>{

const target=Number(counter.dataset.target);

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerHTML=target;

}

};

update();

});

/* ==========================
AUTO HIGHLIGHT SECTION
========================== */

window.addEventListener("scroll",()=>{

document.querySelectorAll("section").forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-200;

const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

sec.style.transition=".5s";

sec.style.boxShadow="0 0 20px rgba(0,255,153,.15)";

}else{

sec.style.boxShadow="none";

}

});

});

/* ==========================
END PART 3
========================== */

console.log("✅ Script Part 3 Loaded");
/*==========================================
DEEPAK DABI EV REPAIRING COURSE
PREMIUM SCRIPT.JS
PART 4
==========================================*/

/* ==========================
SAVE LAST MODULE
========================== */

document.querySelectorAll(".card .btn").forEach(btn=>{

btn.addEventListener("click",()=>{

const moduleName=btn.parentElement.querySelector("h3").innerText;

localStorage.setItem("lastModule",moduleName);

localStorage.setItem("lastPage",btn.getAttribute("href"));

showToast("✅ Progress Saved");

});

});

/* ==========================
CONTINUE LEARNING BUTTON
========================== */

const lastPage=localStorage.getItem("lastPage");

if(lastPage){

const continueBtn=document.createElement("button");

continueBtn.innerHTML="▶ Continue Learning";

continueBtn.style.position="fixed";
continueBtn.style.bottom="95px";
continueBtn.style.right="20px";
continueBtn.style.background="#ff9800";
continueBtn.style.color="#fff";
continueBtn.style.padding="14px 20px";
continueBtn.style.border="none";
continueBtn.style.borderRadius="30px";
continueBtn.style.cursor="pointer";
continueBtn.style.fontWeight="bold";
continueBtn.style.zIndex="99999";

continueBtn.onclick=()=>{

window.location.href=lastPage;

};

document.body.appendChild(continueBtn);

}

/* ==========================
ONLINE / OFFLINE
========================== */

window.addEventListener("online",()=>{

showToast("🌐 Internet Connected");

});

window.addEventListener("offline",()=>{

showToast("⚠ Internet Disconnected");

});

/* ==========================
COPY WEBSITE LINK
========================== */

function copyWebsite(){

navigator.clipboard.writeText(window.location.href);

showToast("📋 Website Link Copied");

}

/* ==========================
SHARE WEBSITE
========================== */

function shareWebsite(){

if(navigator.share){

navigator.share({

title:"Deepak Dabi EV Repairing Course",

text:"Learn EV Repairing Free",

url:window.location.href

});

}else{

copyWebsite();

}

}

/* Floating Share Button */

const shareBtn=document.createElement("button");

shareBtn.innerHTML="📤";

shareBtn.style.position="fixed";
shareBtn.style.left="20px";
shareBtn.style.bottom="95px";
shareBtn.style.width="60px";
shareBtn.style.height="60px";
shareBtn.style.borderRadius="50%";
shareBtn.style.background="#4caf50";
shareBtn.style.color="#fff";
shareBtn.style.border="none";
shareBtn.style.fontSize="24px";
shareBtn.style.cursor="pointer";
shareBtn.style.zIndex="99999";

shareBtn.onclick=shareWebsite;

document.body.appendChild(shareBtn);

/* ==========================
VIBRATION
========================== */

function vibrate(ms=80){

if(navigator.vibrate){

navigator.vibrate(ms);

}

}

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

vibrate();

});

});

/* ==========================
COURSE COMPLETION
========================== */

function courseCompleted(){

localStorage.setItem("courseCompleted","yes");

showToast("🏆 Congratulations! Course Completed");

}

console.log("✅ Script Part 4 Loaded");
/*==========================================
DEEPAK DABI EV REPAIRING COURSE
PREMIUM SCRIPT.JS
PART 5
==========================================*/

/* ==========================
WHATSAPP BUTTON
========================== */

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919521393991";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.style.position="fixed";
whatsapp.style.right="20px";
whatsapp.style.bottom="170px";
whatsapp.style.width="60px";
whatsapp.style.height="60px";
whatsapp.style.borderRadius="50%";
whatsapp.style.background="#25D366";
whatsapp.style.color="#fff";
whatsapp.style.display="flex";
whatsapp.style.alignItems="center";
whatsapp.style.justifyContent="center";
whatsapp.style.fontSize="30px";
whatsapp.style.textDecoration="none";
whatsapp.style.zIndex="99999";

document.body.appendChild(whatsapp);

/* ==========================
YOUTUBE BUTTON
========================== */

const youtube=document.createElement("a");

youtube.href="https://youtube.com/@DeepakDabiEV";

youtube.target="_blank";

youtube.innerHTML="▶";

youtube.style.position="fixed";
youtube.style.right="20px";
youtube.style.bottom="245px";
youtube.style.width="60px";
youtube.style.height="60px";
youtube.style.borderRadius="50%";
youtube.style.background="#ff0000";
youtube.style.color="#fff";
youtube.style.display="flex";
youtube.style.alignItems="center";
youtube.style.justifyContent="center";
youtube.style.fontSize="28px";
youtube.style.textDecoration="none";
youtube.style.zIndex="99999";

document.body.appendChild(youtube);

/* ==========================
CALL BUTTON
========================== */

const callBtn=document.createElement("a");

callBtn.href="tel:+919521393991";

callBtn.innerHTML="📞";

callBtn.style.position="fixed";
callBtn.style.left="20px";
callBtn.style.bottom="170px";
callBtn.style.width="60px";
callBtn.style.height="60px";
callBtn.style.borderRadius="50%";
callBtn.style.background="#2196F3";
callBtn.style.color="#fff";
callBtn.style.display="flex";
callBtn.style.alignItems="center";
callBtn.style.justifyContent="center";
callBtn.style.fontSize="28px";
callBtn.style.textDecoration="none";
callBtn.style.zIndex="99999";

document.body.appendChild(callBtn);

/* ==========================
EMAIL BUTTON
========================== */

const emailBtn=document.createElement("a");

emailBtn.href="mailto:dabideepak6@gmail.com";

emailBtn.innerHTML="✉";

emailBtn.style.position="fixed";
emailBtn.style.left="20px";
emailBtn.style.bottom="245px";
emailBtn.style.width="60px";
emailBtn.style.height="60px";
emailBtn.style.borderRadius="50%";
emailBtn.style.background="#673AB7";
emailBtn.style.color="#fff";
emailBtn.style.display="flex";
emailBtn.style.alignItems="center";
emailBtn.style.justifyContent="center";
emailBtn.style.fontSize="28px";
emailBtn.style.textDecoration="none";
emailBtn.style.zIndex="99999";

document.body.appendChild(emailBtn);

/* ==========================
FULL SCREEN BUTTON
========================== */

const fullBtn=document.createElement("button");

fullBtn.innerHTML="⛶";

fullBtn.style.position="fixed";
fullBtn.style.right="20px";
fullBtn.style.bottom="320px";
fullBtn.style.width="60px";
fullBtn.style.height="60px";
fullBtn.style.borderRadius="50%";
fullBtn.style.border="none";
fullBtn.style.background="#FF9800";
fullBtn.style.color="#fff";
fullBtn.style.fontSize="24px";
fullBtn.style.cursor="pointer";
fullBtn.style.zIndex="99999";

document.body.appendChild(fullBtn);

fullBtn.onclick=()=>{

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}else{

document.exitFullscreen();

}

};

/* ==========================
BUTTON CLICK SOUND
========================== */

const clickSound=new Audio("click.mp3");

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

clickSound.play().catch(()=>{});

});

});

/* ==========================
FAVOURITE MODULE
========================== */

document.querySelectorAll(".card").forEach(card=>{

const star=document.createElement("span");

star.innerHTML="⭐";

star.style.float="right";
star.style.cursor="pointer";
star.style.fontSize="22px";

card.prepend(star);

star.onclick=()=>{

localStorage.setItem("favoriteModule",

card.querySelector("h3").innerText);

showToast("⭐ Favourite Module Saved");

};

});

/* ==========================
PART 5 END
========================== */

console.log("✅ Script Part 5 Loaded");
/*==========================================
DEEPAK DABI EV REPAIRING COURSE
PREMIUM SCRIPT.JS
PART 6 (FINAL)
==========================================*/

/* ==========================
BATTERY STATUS API
========================== */

if("getBattery" in navigator){

navigator.getBattery().then(battery=>{

function updateBattery(){

console.log("Battery : "+Math.round(battery.level*100)+"%");

if(battery.level<=0.20){

showToast("🔋 Battery Low");

}

}

updateBattery();

battery.addEventListener("levelchange",updateBattery);

});

}

/* ==========================
NETWORK STATUS
========================== */

if(navigator.connection){

const net=navigator.connection;

console.log("Network : "+net.effectiveType);

if(net.effectiveType==="2g"){

showToast("📶 Slow Internet");

}

}

/* ==========================
AUTO FOOTER YEAR
========================== */

const footer=document.querySelector("footer");

if(footer){

const year=new Date().getFullYear();

footer.innerHTML+=`<br><br>© ${year} Deepak Dabi EV Repairing Course`;

}

/* ==========================
DAILY EV TIPS
========================== */

const tips=[

"🔋 Always disconnect battery before repair.",

"⚡ Wear insulated gloves while working.",

"🛠 Use a quality digital multimeter.",

"📡 Check CAN wiring before replacing parts.",

"🔌 Never charge a damaged lithium battery.",

"⚠ Verify error codes before changing components.",

"🚗 Test ride after every repair."

];

setTimeout(()=>{

const tip=tips[Math.floor(Math.random()*tips.length)];

showToast(tip);

},4000);

/* ==========================
KEYBOARD SHORTCUTS
========================== */

document.addEventListener("keydown",e=>{

// Home
if(e.altKey && e.key==="h"){

window.location.href="index.html";

}

// Course
if(e.altKey && e.key==="c"){

window.location.href="course.html";

}

// Quiz
if(e.altKey && e.key==="q"){

window.location.href="quiz.html";

}

// Fullscreen
if(e.key==="F11"){

e.preventDefault();

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}else{

document.exitFullscreen();

}

}

});

/* ==========================
MEMORY CLEANUP
========================== */

window.addEventListener("beforeunload",()=>{

console.log("Cleaning Temporary Memory...");

});

/* ==========================
WELCOME BACK
========================== */

if(localStorage.getItem("lastModule")){

setTimeout(()=>{

showToast("📖 Continue: "+localStorage.getItem("lastModule"));

},2500);

}

/* ==========================
COURSE VISIT COUNTER
========================== */

let visits=Number(localStorage.getItem("visits")||0);

visits++;

localStorage.setItem("visits",visits);

console.log("Website Visits : "+visits);

/* ==========================
CONGRATULATIONS
========================== */

if(visits===10){

showToast("🎉 Thanks for visiting our EV Academy!");

}

/* ==========================
FINAL MESSAGE
========================== */

console.log("====================================");

console.log("⚡ DEEPAK DABI EV REPAIRING COURSE");

console.log("Professional Version Loaded");

console.log("Version : 3.0");

console.log("Made By Deepak Dabi");

console.log("====================================");

showToast("🚀 EV Academy Ready!");
