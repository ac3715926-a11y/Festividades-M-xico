function toggleDark(){document.body.classList.toggle("dark");}
let music=document.getElementById("music");
function toggleMusic(){music.paused?music.play():music.pause();}
const els=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{els.forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight-100){e.classList.add("visible");}});});