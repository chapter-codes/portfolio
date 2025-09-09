'use strict'

// Typing Effect
const roles = ["React Developer", "Frontend Engineer", "Data Enthusiast"];
const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (!deleting) {
    typingElement.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
        deleting = true;
        setTimeout(typeEffect, 1200); // pause before deleting
        return;
    }
    } else {
    typingElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    }
    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// Floating Icons Animation
const icons = document.querySelectorAll(".floating-icon");
icons.forEach((icon, i) => {
    let angle = 0;
    setInterval(() => {
    angle += 0.02 + i * 0.005;
    icon.style.transform = `translateY(${Math.sin(angle) * 6}px)`;
    }, 30);
});


 //handle showing the nav bar
const menuIcon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
if(menuIcon){
    menuIcon.addEventListener('click', handleClick)
}
function handleClick(event){
    !menu.classList.contains('show')? menu.classList.replace('left-0', 'left-[-800px]'): menu.classList.replace('left-[-800px]', 'left-0')
    menu.classList.toggle('show')
    console.log(this.classList, menu)
}

//handle showing the scroll to top icon when the page is scrolled
const scrollIcon=document.querySelector('.scroll-to-top')
window.onscroll=(event)=>{
    const scrollHeight=window.scrollY
    if(scrollHeight>300){
        scrollIcon.classList.replace('hidden','flex')
    }else{
        scrollIcon.classList.replace('flex', 'hidden')
    }
}

//lenis smooth scroll
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
//   console.log(e);
});
