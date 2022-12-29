const clicked = document.getElementById("button");



clicked.addEventListener("click", () => {
    const toHide1 = document.querySelector(".cont-img");
    const toHide2 = document.querySelector(".cont-text");
    const toHide3 = document.querySelector(".cont-select");
    const toHide4 = document.querySelector(".przycisk");
    hide(toHide1);
    hide(toHide2);
    hide(toHide3);
    hide(toHide4);
})

function wysun(i, elementToMove){
    var opacity_num = 1.00 + (i-1)*(-0.02);
    elementToMove.style.opacity = opacity_num;
}

function hide(containerEl){
    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            wysun(i, containerEl);
        }, 2 * i);
    }
    setTimeout(() => {containerEl.classList.add("hide-el"); }, 200);
    setTimeout(() => {window.open('generating_key.html', '_self')}, 210);
}

