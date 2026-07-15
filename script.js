/*=====================================
  DEEPAK DABI EV COURSE v2.0
=====================================*/

console.log("EV Course Loaded Successfully");

// Welcome
window.addEventListener("load", () => {
    console.log("Welcome Deepak Dabi EV Course");
});

// ===============================
// Dark / Light Mode
// ===============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.style.cssText = `
position:fixed;
right:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
cursor:pointer;
font-size:22px;
background:#00d084;
color:#fff;
z-index:9999;
`;

document.body.appendChild(darkBtn);

let dark = true;

darkBtn.onclick = () => {

    dark = !dark;

    if(dark){

        document.body.style.background="#0f172a";
        document.body.style.color="#ffffff";

        document.querySelectorAll(".card").forEach(card=>{
            card.style.background="#1e293b";
            card.style.color="#fff";
        });

        darkBtn.innerHTML="🌙";

    }else{

        document.body.style.background="#ffffff";
        document.body.style.color="#111";

        document.querySelectorAll(".card").forEach(card=>{
            card.style.background="#f4f4f4";
            card.style.color="#111";
        });

        darkBtn.innerHTML="☀";

    }

};

// ===============================
// Back To Top
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.cssText=`
position:fixed;
left:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0d6efd;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
`;

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

// ===============================
// Card Animation
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ===============================
// Save Last Module
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

localStorage.setItem("LastModule",btn.href);

});

});

console.log("All Features Loaded");
