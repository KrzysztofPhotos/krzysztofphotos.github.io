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

const close11 = document.querySelector(".close11");
const btn11 = document.querySelector(".box11");
const cont11 = document.querySelector(".cont11");

const close12 = document.querySelector(".close12");
const btn12 = document.querySelector(".box12");
const cont12 = document.querySelector(".cont12");

const close13 = document.querySelector(".close13");
const btn13 = document.querySelector(".box13");
const cont13 = document.querySelector(".cont13");

const close14 = document.querySelector(".close14");
const btn14 = document.querySelector(".box14");
const cont14 = document.querySelector(".cont14");

const close15 = document.querySelector(".close15");
const btn15 = document.querySelector(".box15");
const cont15 = document.querySelector(".cont15");

const close16 = document.querySelector(".close16");
const btn16 = document.querySelector(".box16");
const cont16 = document.querySelector(".cont16");

const close17 = document.querySelector(".close17");
const btn17 = document.querySelector(".box17");
const cont17 = document.querySelector(".cont17");

////////////////////////////////////////////////////////////////////////////

function openClick(containerEl){
    containerEl.classList.remove("active");
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

btn11.addEventListener("click", () => {openClick(cont11);})
close11.addEventListener("click", () => {closeClick(cont11);})

btn12.addEventListener("click", () => {openClick(cont12);})
close12.addEventListener("click", () => {closeClick(cont12);})

btn13.addEventListener("click", () => {openClick(cont13);})
close13.addEventListener("click", () => {closeClick(cont13);})

btn14.addEventListener("click", () => {openClick(cont14);})
close14.addEventListener("click", () => {closeClick(cont14);})

btn15.addEventListener("click", () => {openClick(cont15);})
close15.addEventListener("click", () => {closeClick(cont15);})

btn16.addEventListener("click", () => {openClick(cont16);})
close16.addEventListener("click", () => {closeClick(cont16);})