function toggle(id){document.getElementById(id).classList.toggle("hidden");}
function toggleDark(){document.body.classList.toggle("dark");}
function toggleMusic(){let m=document.getElementById("music");m.paused?m.play():m.pause();}
function quiz(){let r=document.getElementById("quiz").value;document.getElementById("resultado").innerText=r==800?"✅ Correcto":"❌ Incorrecto";}
const els=document.querySelectorAll(".fade");window.addEventListener("scroll",()=>{els.forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight-100){e.classList.add("visible");}});});