/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.getElementById('slider');
    const totalCards = document.querySelectorAll('.project__card').length;

    currentIndex += direction;

    // Ha túlmennénk az elején, ugorjon az utolsóra
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } 
    // Ha túlmennénk a végén, ugorjon az elsőre
    else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    const offset = currentIndex * -100;
    slider.style.transform = `translateX(${offset}%)`;
}

function sendMessage(e){
    e.preventDefault();
    /*window.alert("Message sent")*/
    let box =document.getElementById("contact-message");
    let uzenet = document.createElement("p");
    uzenet.innerText="Message sent";
    box.appendChild(uzenet);
}

function mode() {
    const body = document.body;
    
    // Hozzáadja vagy elveszi a 'light-theme' osztályt
    body.classList.toggle('light-theme');
    
    // Elmentjük a választást, hogy frissítés után ne ugorjon vissza
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme-mode', isLight ? 'light' : 'dark');
}

// Ellenőrizzük az oldal betöltésekor, hogy mit mentettünk el legutóbb
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});