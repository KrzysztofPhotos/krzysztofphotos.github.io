var code = "";
    function random_codes(length){
        var characters = 'ABCDEFGHIJKLMNOPRQSTUVWXYZ0123456789';
        var random_string = '';
        if(length>0){
            for(var i=0; i<length; i++){
                random_string += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        return random_string;
    }
function write_random_code(){
    for(var x=0; x<2; x++){
        code += random_codes(5) + "-";
    }
    code += random_codes(5);
    document.querySelector("#paste-code").innerHTML = code;
}

write_random_code();

