// TODO animowany tekst (title) strony w js zmieniający się tekst
// TODO motyw ciemny lub jasny
// TODO animation or video as background
// TODO ANIMACJA TEKSTU NA DIVIE KTÓRY MA BLURA
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

    console.log("kliknieto");
    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            przesun(i);
        }, 3 * i);
      }
    addBlur();
})

function przesun(i){
    var numb = i + "%";
    cont1.style.left = numb;

    var opacity_num = i * 2/100;
    cont1.style.opacity = opacity_num;
}

function wysun(i){
    var numb = 50 + i + "%";
    cont1.style.left = numb;

    var opacity_num = 1.00 + (i-1)*(-0.02);
    cont1.style.opacity = opacity_num;
}

close1.addEventListener("click", () => {
    

    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            wysun(i);
        }, 3 * i);
    }
    hideBlur();
    setTimeout(() => {cont1.classList.add("active"); }, 200);
})


const close2 = document.querySelector(".close2");
const btn2 = document.querySelector(".box2");
const cont2 = document.querySelector(".cont2");

btn2.addEventListener("click", () => {
    cont2.classList.remove("active")
})

close2.addEventListener("click", () => {
    cont2.classList.add("active");
})


// poprawka dla android
document.getElementById('vid').play();

function addBlur(){
    //querySelector
    //na wszystkie elementy  dodaj  klase blur
    const toBlur1 = document.querySelector(".container-elements");
    const toBlur2 = document.querySelector(".title");
    const toBlur3 = document.querySelector(".parallax");
    const toBlur4 = document.querySelector(".navbar");
    toBlur1.classList.add("blur");
    toBlur2.classList.add("blur");
    toBlur3.classList.add("blur");
    toBlur4.classList.add("blur");
}

function hideBlur(){
    //query  selector
    // na wszystkich elementach podanych usun klase  blur
    const toBlur1 = document.querySelector(".container-elements");
    const toBlur2 = document.querySelector(".title");
    const toBlur3 = document.querySelector(".parallax");
    const toBlur4 = document.querySelector(".navbar");
    toBlur1.classList.remove("blur");
    toBlur2.classList.remove("blur");
    toBlur3.classList.remove("blur");
    toBlur4.classList.remove("blur");
}