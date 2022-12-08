const imageEl = document.getElementById("img-dragon");

const progressBarEl = document.querySelector("#bar");

const labelEl = document.querySelector(".label-drag");

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 100;
}

labelEl.innerHTML = "Health: " + score;
progressBarEl.setAttribute("value", score);

imageEl.addEventListener("click", ()=>{
    if (score == 0){
        labelEl.innerHTML = "YOU WON";
        // przenies do innej strony w tym miejscu
        console.log(score);
        progressBarEl.setAttribute("value", score);
    }
    else {
        score --;
        updateLocalStorage();
        labelEl.innerHTML = "Health: " + score;
        console.log(score);
        progressBarEl.setAttribute("value", score);
    }
})


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}