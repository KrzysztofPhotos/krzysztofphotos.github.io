
console.log("Height: " + window.screen.availHeight);
console.log("Width: " + window.screen.availWidth);

how_many_px = window.screen.availWidth * window.screen.availHeight;

console.log("JS have to generate " + how_many_px + " pixels.");

// for(i=0; i<how_many_px; i++) {
//     // console.log(i);
// }



const containerEl = document.querySelector(".screen");

for (let index = 0; index < how_many_px; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("block");
    containerEl.appendChild(colorContainerEl)
}

const colorContainerEls = document.querySelectorAll(".block")

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
    })
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLenght = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode;
}