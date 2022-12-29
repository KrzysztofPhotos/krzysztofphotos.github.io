


window.addEventListener("scroll", ()=>{
    let result = document.querySelector("#result");
    console.log(window.pageYOffset);
    result.innerHTML = window.pageYOffset + "px";
})


