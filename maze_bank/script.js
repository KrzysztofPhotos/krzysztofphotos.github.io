// SOUND WHEN CLICKED
document.body.addEventListener("click", () => {
    console.log("clicked");
    play();
})

function play() {
    document.getElementById('clicksfx').play();
  }