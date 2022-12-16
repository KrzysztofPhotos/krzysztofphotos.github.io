const imageEl = document.getElementById("img-dragon");

const progressBarEl = document.querySelector("#bar");

const labelEl = document.querySelector(".label-drag");

const bar = document.getElementById("bar");

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
        window.open("https://www.google.com","_self");
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


    if (score < 20){
        document.bar.style.background = 'red';
    }
    else if (score < 60) {
        document.bar.style.background = 'orange';
    }
    else {
        document.bar.style.background = 'green';
    }
    
    //var r = document.querySelector('progress::-webkit-progress-value');
    //var r2 = document.querySelector('progress::-moz-progress-bar');
    // var r3 = document.querySelectorAll('.progress-div');

    // źródło https://www.w3schools.com/css/tryit.asp?filename=trycss3_var_js

    // var sheet = document.styleSheets[0]; //get style sheet somehow
    // var rules = sheet.rules; 
    // sheet.insertRule('progress::-webkit-progress-value { background: blue; }', rules.length);

    // console.log(r3);
    // if (score > 20 ) {
    //     r3.style.setProperty('--color1', 'green');
    //     r3.style.setProperty('--color2', 'green');
    //     r3.style.setProperty('--color3', 'green');
        
    // }
    // else if (score > 50) {
    //     r3.style.setProperty('--color1', 'orange');
    //     r3.style.setProperty('--color2', 'orange');
    //     r3.style.setProperty('--color3', 'orange');
    // }
    // else if (score < 21) {
    //     r3.style.setProperty('--color1', '#FF0000');
    //     r3.style.setProperty('--color2', '#FF0000');
    //     r3.style.setProperty('--color3', '#FF0000');
    // }

})


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}