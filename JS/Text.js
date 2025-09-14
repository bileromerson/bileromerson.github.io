

let indice = 0;
function digitar(){
    const elemento = document.getElementById('texto-digitado');
    const textoCompleto = "Hi There!!!";
    elemento.textContent += textoCompleto[indice];
    indice++;
    if (indice < textoCompleto.length) {
        setTimeout(digitar, 90);
    }
}
digitar()
