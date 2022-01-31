var inputText = document.querySelector("#text-input");
var btnEncrypt = document.querySelector("#btn-encrypt"); 


vowelsEncryption = ["a", "e", "i", "o", "u"];

function encrypt() {

    var outputText = document.querySelector("#msg");

    var phrase = inputText.value;
    var phraseEncrypt = "";

    count = 0;

    while (count < phrase.length) {
        var element = phrase[count];


        for (var index = 0; index < 5; index++) {
    
            if (element == vowelsEncryption[index]) {
                phraseEncrypt += vowelsDecryption[index];
                break;
                
            } else if (index == 4) {
                phraseEncrypt += element;

            }
        
        }
        
        count++;
        
    }


    outputText.value = phraseEncrypt;
    outputText.focus();
    inputText.value = "";
    
}

btnEncrypt.addEventListener('click', encrypt);
