var inputText = document.querySelector("#text-input");
var btnEncrypt = document.querySelector("#btn-encrypt");

vowelsEncryption = ["a", "e", "i", "o", "u"];

function encrypt() {

    var outputText = document.querySelector("#msg");

    var phrase = inputText.value;
    var phraseEncrypt = "";

    count = 0;

    isTextValid = validar();

    while (count < phrase.length && isTextValid) {
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

    if (isTextValid) {
        outputText.value = phraseEncrypt;
        outputText.focus();
        inputText.value = "";
    }
}
