function random_codes(length)
    {
        var characters = 'ABCDEFGHIJKLMNOPRQSTUVWXYZ0123456789';
        var random_string = '';
        if(length>0)
        {
            for(var i=0; i<length; i++)
            {
                random_string += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        return random_string;
    }
    function write_random_code()
    {
        for(var x=0; x<4; x++)
        {
            document.write(random_codes(5) + "-");
        }
        document.write(random_codes(5));
    }
    for(x=0; x<5; x++)
    {
        write_random_code();
        document.write("<p>")
        
    }
