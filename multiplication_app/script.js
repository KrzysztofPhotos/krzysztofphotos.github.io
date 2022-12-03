const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

scoreEl.innerHTML = "score: " + score;

questionEl.innerText = "What is "+ num1 + " multiply by " + num2;
// I could type short version 
// questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns == correctAnswer){
        score ++;
        updateLocalStorage();
    }
    else {
        score --;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}