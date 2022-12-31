// SOUND WHEN CLICKED
document.body.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById('clicksfx').play();
})

function hovered(){
    console.log('hover');
    document.getElementById('hoversfx').play();
}

document.querySelector(".btn").addEventListener("mouseover", () => {
    hovered();
})

document.querySelector(".left-arrow").addEventListener("mouseover", () => {
    hovered();
})

document.querySelector(".home-btn").addEventListener("mouseover", () => {
    hovered();
})

document.querySelector(".clock").addEventListener("mouseover", () => {
    hovered();
})

document.querySelector(".search-bar-x").addEventListener("mouseover", () => {
    hovered();
})
