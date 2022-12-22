const nextEl = document.querySelector(".next");

const imgsEl = document.querySelectorAll("img");

console.log(imgsEl);

const imageContainerEl = document.querySelector(".image-container");

let currectImg = 1;

nextEl.addEventListener("click", () => {
    currectImg++;
    updateImg();
})

function updateImg(){
    if(currectImg > imgsEl.length){
        currectImg = 1;
    }
    imageContainerEl.style.transform = `translateX(-${(currectImg - 1) * 1000}px)`
}