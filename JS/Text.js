

function list(){
    const listaDeItens = [
        "Connection sucessfull",
        "Extract data...",
        "some contents were found:",
        "   [1] About Me",
        "   [2] Interests",
        "   [3] Projects",
        "   [4] Contacts",
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
            }, 100);
            if (index === listaDeItens.length - 1) {
                setTimeout(() => {
                    const input = document.querySelector('.appear');
                    if (input) {
                        input.style.display = 'block';
                    }
                }, 400); // espera um pouco para a animação terminar
            }
            
        }, atrasoEntreItens * (index + 1));
    });
}

let indice = 0;
function digitar(){
    const elemento = document.getElementById('texto-digitado');
    const textoCompleto = "Hi There! I'm Bileromerson";
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
