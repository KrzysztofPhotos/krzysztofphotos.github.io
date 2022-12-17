// TODO animowany tekst (title) strony w js zmieniający się tekst
// TODO motyw ciemny lub jasny
// TODO animation or video as background
// TODO ANIMACJA TEKSTU NA DIVIE KTÓRY MA BLURA
// PO NAJECHANIU NA DANY ELEMENT ON SIE TROCHE POWIEKSZA A WSZYSTKO INNE DOSTAJE BLURA AŻ DO NAJECHANIA GDZIES POZA DANEGO DIVA Z BLOKÓW...
// TODO ANIMATED GRADIENT BACKGROUND POP UP ELEMENT
//TODO BLUR TO ALL OTHER ELEMENTS WHILE YOU'VE OPEN THE WINDOW
//TODO ANIMATION WHILE YOU OPEN WINDOW >>> ON CLICK ANIMATION FROM LEFT (when element clicked)
//                                     >>> ON CLICK ANIMATION TO RIGHT (when X clicked)

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",  () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const element = document.getElementById('container-el');
const headerek = document.getElementById('headerHead');

window.addEventListener('scroll', () => {

    // displaying scroll amount in console
    console.log('Scroll: ' + window.scrollY);

    let scrollPosition  = window.scrollY;
    let przesuniecie = window.scrollY - 200;
    

    if (przesuniecie < 1){
        let przesuniecie = 0;
        element.style.setProperty('transform', 'translateY(0)');
        headerek.style.setProperty('transform', 'translateY(0)');
        
    }
    else {
        let przesuniecie = Math.abs(window.scrollY - 200);
        let przesuniecie2 = "-" + przesuniecie;
        element.style.setProperty('transform', 'translateY(' + przesuniecie2 + 'px)');
        headerek.style.setProperty('transform', 'translateY(' + przesuniecie2 + 'px)');
    }

    

    if (window.scrollY > 300) {
        element.style.opacity = '0';
        element.style.display = 'none';

        headerek.style.opacity = '0'
        headerek.style.display = 'none';
        // element.style.setProperty('transform', 'translateY(0)');
    }
    else if(window.scrollY > 270){
        element.style.opacity = '0.1'
        element.style.display = 'block';

        headerek.style.opacity = '0.1'
        headerek.style.display = 'block';
        // element.style.setProperty('transform', 'translateY(-80px)');
    }
    else if(window.scrollY > 240){
        element.style.opacity = '0.2'
        element.style.display = 'block';

        headerek.style.opacity = '0.2'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(-60px)');
    }
    else if(window.scrollY > 210){
        element.style.opacity = '0.3'
        element.style.display = 'block';

        headerek.style.opacity = '0.3'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(-40px)');
    }
    else if(window.scrollY > 180){
        element.style.opacity = '0.4'
        element.style.display = 'block';

        headerek.style.opacity = '0.4'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(-20px)');
    }
    else if(window.scrollY > 150){
        element.style.opacity = '0.5'
        element.style.display = 'block';

        headerek.style.opacity = '0.5'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(0)');
    }
    else if(window.scrollY > 120){
        element.style.opacity = '0.6'
        element.style.display = 'block';

        headerek.style.opacity = '0.9'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(0)');
    }
    else if(window.scrollY > 90){
        element.style.opacity = '0.9'
        element.style.display = 'block';

        headerek.style.opacity = '1'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(0)');
    }
    else if(window.scrollY > 60){
        element.style.opacity = '0.8'
        element.style.display = 'block';

        headerek.style.opacity = '1'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(0)');
    }
    else if(window.scrollY > 30){
        element.style.opacity = '0.9'
        element.style.display = 'block';

        headerek.style.opacity = '1'
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(0)');
    }
    else {
        element.style.display = 'block';
        headerek.style.display = 'block';
        //element.style.setProperty('transform', 'translateY(0)');
    }
})



const close1 = document.querySelector(".close1");
const btn1 = document.querySelector(".box1");
const cont1 = document.querySelector(".cont1");

btn1.addEventListener("click", () => {
    cont1.classList.remove("active");

})

close1.addEventListener("click", () => {
    cont1.classList.add("active");
})


const close2 = document.querySelector(".close2");
const btn2 = document.querySelector(".box2");
const cont2 = document.querySelector(".cont2");

btn2.addEventListener("click", () => {
    cont2.classList.remove("active");
})

close2.addEventListener("click", () => {
    cont2.classList.add("active");
})


// poprawka dla android
document.getElementById('vid').play();