let text = document.querySelector("#text");

        setTimeout(() => {text.innerHTML = "4sekunda";}, 4000)

        setTimeout(() => {text.innerHTML = "3sekunda";}, 3000)
        
        setTimeout(() => {text.innerHTML = "1sekunda";}, 1000)

        setTimeout(() => {text.innerHTML = "2sekunda";}, 2000)

        setTimeout(() => {text.innerHTML = "2sekunda";}, 2000)

        // function setDelay(i){
        //     setTimeout(function(){
        //         console.log(i)
        //     }, 4000);
        // }

        for(var i = 0; i <= 100; i++){
            setTimeout(function(){
                editBar();
            }, 135 * i);
        }

        let zmienna = 0;
        function editBar(){
            console.log(zmienna);
            zmienna ++;
        }