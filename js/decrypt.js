var inputText = document.querySelector("#text-input");
var btnDecrypt = document.querySelector("#btn-decrypt");

vowelsDecryption = ["ai", "enter", "imes", "ober", "ufat"];

function decrypt() {

    var outputText = document.querySelector("#msg")

    var phrase = inputText.value;
    var phraseDecrypt = "";

    count = 0;

    isTextValid = validar();

    while (count < phrase.length && isTextValid) {

        var element = phrase[count];

        for (var index = 0; index < 5; index++) {

            // l = decryption vowel length
            var l = -1;
            l += vowelsDecryption[index].length;

            if (element == vowelsDecryption[index][0] && phrase[count + l] == vowelsDecryption[index][l]) {

                phraseDecrypt += vowelsEncryption[index];
                count += vowelsDecryption[index].length;
                break;

            } else if (index == 4) {
                phraseDecrypt += element;
                count++;
            }
        }
    }

    if (isTextValid) {
        outputText.value = phraseDecrypt;
        inputText.value = "";
    }
}
