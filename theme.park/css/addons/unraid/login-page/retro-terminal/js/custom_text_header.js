
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 
 _______                _                                
(_______)              | |             _                 
 _____    _   _  ____  | |  _   ___  _| |_  _____  _ _ _ 
|  ___)  | | | ||  _ \ | |_/ ) /___)(_   _)| ___ || | | |
| |      | |_| || | | ||  _ ( |___ |  | |_ | ____|| | | |
|_|      |____/ |_| |_||_| \_)(___/    \__)|_____) \___/ 
                                                         
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
