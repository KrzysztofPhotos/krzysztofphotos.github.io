const clicked = document.getElementById("button");



clicked.addEventListener("click", () => {
    console.log("clciked");
    const toHide1 = document.querySelector(".cont-img");
    const toHide2 = document.querySelector(".cont_text");
    const toHide3 = document.querySelector(".cont-select");
    const toHide4 = document.querySelector(".przycisk");
    hide(toHide1);
})

function wysun(i, elementToMove){
    var opacity_num = 1.00 + (i-1)*(-0.02);
    elementToMove.style.opacity = opacity_num;
}

function hide(containerEl){
    for (let i = 1; i <= 50; i++) {
        setTimeout(() => {
            wysun(i, containerEl);
        }, 8 * i);
    }
    setTimeout(() => {containerEl.classList.add("hide-el"); }, 200);
}