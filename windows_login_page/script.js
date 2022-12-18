function keyWasPressed(){
    // const inputEl = document.querySelector('.input-pin').value;
    var inputEl = document.getElementById("id-input").value;

    console.log(inputEl);

    // let inputLen = inputEl.lenght;
    // console.log(inputLen);

    if (inputEl == "3") {
        console.log("great")
    }
}




const elements = document.querySelector(".elements");
elements.classList.add("hideElement");

// SCRIPT WHICH RELOAD ACTUAL HOUR
const hourEl = document.getElementById("godz");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    if(m < 10){
        m = "0" + m;
    }

    time = h + ":" + m;
    hourEl.innerText = time;

    setTimeout(()=>{
        updateClock();
    }, 1000)
} 

updateClock();