var inputText = document.querySelector("#text-input");
var btnDecrypt = document.querySelector("#btn-decrypt"); 

vowelsDecryption = ["ai", "enter", "imes", "ober", "ufat"];

function decrypt() {

    var outputText = document.querySelector("#msg")

    var phrase = inputText.value;
    var phraseDecrypt = "";

    count = 0;

    while (count < phrase.length) {
        
        var element = phrase[count];

        for (var index = 0; index < 5; index++) {
    
            if (element == vowelsEncryption[index]) {
                phraseDecrypt += vowelsEncryption[index];
                count += vowelsDecryption[index].length;
                break;
                
            } else if (index == 4) {
                phraseDecrypt += element;
                count++;

            }
        
        }
        
    }


    outputText.value = phraseDecrypt;
    inputText.value = "";
    
}

btnDecrypt.addEventListener("click", decrypt);
