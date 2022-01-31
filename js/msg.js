var existeRectangulo = false;

var botonEncriptar = document.querySelector(".btn-ppal");
var munieco = document.querySelector(".munieco");
var texto = document.querySelector(".text-input");

const msg = document.createElement("section");
msg.className = "msg";

const textArea = document.createElement("textarea");
textArea.className = "text-output";
textArea.id = "msg";

const btn = document.createElement("button");
btn.innerHTML = "Copiar";
btn.className = "btn";
btn.id = "btn-copiar";

msg.appendChild(textArea);
msg.appendChild(btn);

const aside = document.querySelector(".sidebar");


botonEncriptar.addEventListener("click", function (event) {

    event.preventDefault();

    if ((existeRectangulo == false) && texto.value != "") {

        existeRectangulo = true;

        munieco.remove();



        aside.appendChild(msg);



    }

});


function copy() {
    textArea.select();
    document.execCommand("copy");
}

btn.addEventListener("click", copy);