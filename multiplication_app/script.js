const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question");

questionEl.innerText = "What is "+ num1 + " multiply by " + num2

// I could type short version 
// questionEl.innerText = `What is ${num1} multiply by ${num2}`

const correct_answer = num1 * num2

function checkAnswer(){
    if (userType == correct_answer){
        // dodaj 1 punkt oraz zmien liczby
    }
    else {
        // odejmij 1 punkt oraz zmien liczby
    }
}