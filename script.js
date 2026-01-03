let count=0;
function addToCart(){count++;document.getElementById('cartCount').innerText=count;}
function validateForm(){alert('Message sent');return false;}
const g=document.getElementById('greeting');
const d=document.getElementById('date');
if(g&&d){const h=new Date().getHours();
g.innerText=h<12?'Good Morning!':h<18?'Good Afternoon!':'Good Evening!';
d.innerText=new Date().toDateString();}
const t=document.getElementById('themeToggle');
if(t){t.onclick=()=>document.body.classList.toggle('dark');}