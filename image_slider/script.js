const nextEl = document.querySelector(".next");

const imageContainerEl = document.querySelector(".image-container");

let currectImg = 1;

nextEl.addEventListener("click", () => {
    currectImg++;
    updateImg();
})

function updateImg(){
    imageContainerEl.style.transform = `translateX(-${(currectImg - 1) * 1000}px)`
}