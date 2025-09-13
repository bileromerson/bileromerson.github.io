

let indice = 0;
function digitar() {
    const elemento = document.getElementById('texto-digitado');
const textoCompleto = "Hello World";
    elemento.textContent += textoCompleto[indice];
    indice++;
    if (indice < textoCompleto.length) {
        setTimeout(digitar, 50);
    }
}
digitar()