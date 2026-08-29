const m=document.querySelector('.menu'),n=document.querySelector('.navlinks');if(m)m.onclick=()=>n.classList.toggle('show');document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());

const videos = document.querySelectorAll(".slide-video");
let current = 0;

setInterval(() => {

    videos[current].pause();
    videos[current].classList.remove("active");

    current = (current + 1) % videos.length;

    videos[current].currentTime = 0;
    videos[current].classList.add("active");
    videos[current].play();

}, 10000);