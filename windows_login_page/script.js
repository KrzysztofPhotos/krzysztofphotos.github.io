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