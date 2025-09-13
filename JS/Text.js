

let indice = 0;
function digitar() {
    const elemento = document.getElementById('texto-digitado');
const textoCompleto = "Olá! Este é um efeito de digitação em JavaScript.";
    elemento.textContent += textoCompleto[indice];
    indice++;
    if (indice < textoCompleto.length) {
        setTimeout(digitar, 50);
    }
}
digitar()