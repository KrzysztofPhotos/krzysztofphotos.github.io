function addBlur(){
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
    const toBlur1 = document.querySelector(".container-elements");
    const toBlur2 = document.querySelector(".title");
    const toBlur3 = document.querySelector(".parallax");
    const toBlur4 = document.querySelector(".navbar");
    toBlur1.classList.remove("blur");
    toBlur2.classList.remove("blur");
    toBlur3.classList.remove("blur");
    toBlur4.classList.remove("blur");
}

function przesun(i, elementToMove){
    var numb = i + "%";
    elementToMove.style.left = numb;
    var opacity_num = i * 2/100;
    elementToMove.style.opacity = opacity_num;
}

function wysun(i, elementToMove){
    var numb = 50 + i + "%";
    elementToMove.style.left = numb;
    var opacity_num = 1.00 + (i-1)*(-0.02);
    elementToMove.style.opacity = opacity_num;
}

////////////////////////////////////////////////////////////////////////////
//                     DODAWANIE KOLEJNYCH PUDEŁ
const close1 = document.querySelector(".close1");
const btn1 = document.querySelector(".box1");
const cont1 = document.querySelector(".cont1");

const close2 = document.querySelector(".close2");
const btn2 = document.querySelector(".box2");
const cont2 = document.querySelector(".cont2");

const close3 = document.querySelector(".close3");
const btn3 = document.querySelector(".box3");
const cont3 = document.querySelector(".cont3");

const close4 = document.querySelector(".close4");
const btn4 = document.querySelector(".box4");
const cont4 = document.querySelector(".cont4");

const close5 = document.querySelector(".close5");
const btn5 = document.querySelector(".box5");
const cont5 = document.querySelector(".cont5");

const close6 = document.querySelector(".close6");
const btn6 = document.querySelector(".box6");
const cont6 = document.querySelector(".cont6");

const close7 = document.querySelector(".close7");
const btn7 = document.querySelector(".box7");
const cont7 = document.querySelector(".cont7");

const close8 = document.querySelector(".close8");
const btn8 = document.querySelector(".box8");
const cont8 = document.querySelector(".cont8");

const close9 = document.querySelector(".close9");
const btn9 = document.querySelector(".box9");
const cont9 = document.querySelector(".cont9");

const close10 = document.querySelector(".close10");
const btn10 = document.querySelector(".box10");
const cont10 = document.querySelector(".cont10");

////////////////////////////////////////////////////////////////////////////

function openClick(containerEl){
    containerEl.classList.remove("active");
    console.log("kliknieto"+ containerEl);
    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            przesun(i, containerEl);
        }, 3 * i);
        }
    addBlur();
}

function closeClick(containerEl){
    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            wysun(i, containerEl);
        }, 3 * i);
    }
    hideBlur();
    setTimeout(() => {containerEl.classList.add("active"); }, 200);
}

btn1.addEventListener("click", () => {openClick(cont1);})
close1.addEventListener("click", () => {closeClick(cont1);})
    
btn2.addEventListener("click", () => {openClick(cont2);})
close2.addEventListener("click", () => {closeClick(cont2);})

btn3.addEventListener("click", () => {openClick(cont3);})
close3.addEventListener("click", () => {closeClick(cont3);})

btn4.addEventListener("click", () => {openClick(cont4);})
close4.addEventListener("click", () => {closeClick(cont4);})

btn5.addEventListener("click", () => {openClick(cont5);})
close5.addEventListener("click", () => {closeClick(cont5);})

btn6.addEventListener("click", () => {openClick(cont6);})
close6.addEventListener("click", () => {closeClick(cont6);})

btn7.addEventListener("click", () => {openClick(cont7);})
close7.addEventListener("click", () => {closeClick(cont7);})

btn8.addEventListener("click", () => {openClick(cont8);})
close8.addEventListener("click", () => {closeClick(cont8);})

btn9.addEventListener("click", () => {openClick(cont9);})
close9.addEventListener("click", () => {closeClick(cont9);})

btn10.addEventListener("click", () => {openClick(cont10);})
close10.addEventListener("click", () => {closeClick(cont10);})