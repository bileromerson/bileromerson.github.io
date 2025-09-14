


function list(){
    const listaDeItens = [
        "Connection sucessfull: Url",
        "Extract data...",
        "Text",
        "Text",
        "Text",
        "Text",
        "Text",
        "Text",
    ];

    const listaElemento = document.getElementById('list');

    const atrasoEntreItens = 300; 

    listaDeItens.forEach((textoDoItem, index) => {
        setTimeout(() => {
            const novoItem = document.createElement('li');
            novoItem.textContent = textoDoItem;
            listaElemento.appendChild(novoItem);
            
            // Opcional: Adiciona uma classe para uma animação suave
            setTimeout(() => {
                novoItem.classList.add('fade-in');
            }, 10);
            
        }, atrasoEntreItens * (index + 1));
    });
}

let indice = 0;
function digitar(){
    const elemento = document.getElementById('texto-digitado');
    const textoCompleto = "Hi There!!! I'm Bileromerson";
    elemento.textContent += textoCompleto[indice];
    indice++;
    if (indice < textoCompleto.length) {
        setTimeout(digitar, 90);
    }
    else{
    list()
    }
}

digitar()
