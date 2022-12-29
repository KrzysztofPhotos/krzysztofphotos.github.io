let text = document.querySelector("#text");

        setTimeout(() => {text.innerHTML = "Getting data...";}, 1000)
        setTimeout(() => {text.innerHTML = "Gathering information...";}, 1500)
        setTimeout(() => {text.innerHTML = "Accessing database...";}, 3000)
        setTimeout(() => {text.innerHTML = "Structure analysis...";}, 4500)
        setTimeout(() => {text.innerHTML = "Connecting to proxy...";}, 5000)
        setTimeout(() => {text.innerHTML = "Encrypting data...";}, 6500)
        setTimeout(() => {text.innerHTML = "Generating code...";}, 10000)

        // function setDelay(i){
        //     setTimeout(function(){
        //         console.log(i)
        //     }, 4000);
        // }

        for(var i = 0; i <= 100; i++){
            setTimeout(function(){
                editBar();
            }, 120 * i);
        }

        let zmienna = 0;
        function editBar(){
            document.getElementById('loading-bar-id').style.width = zmienna + "%";
            zmienna ++;
            if(zmienna == 100){
                console.log('ACCESS');
            }
        }