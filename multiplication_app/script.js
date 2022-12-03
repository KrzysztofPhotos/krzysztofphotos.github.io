const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

let score = 0;

questionEl.innerText = "What is "+ num1 + " multiply by " + num2;
// I could type short version 
// questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns == correctAnswer){
        score ++;
        console.log(score);
    }
    else {
        score --;
        console.log(score);
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}