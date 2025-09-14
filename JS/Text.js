

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

// O texto de cada item da lista
const listaDeItens = [
    "Text",
    "Text",
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
    // Para cada item, programa uma ação com um atraso
    setTimeout(() => {
        // Cria um novo elemento <li>
        const novoItem = document.createElement('li');
        
        // Define o texto do novo <li>
        novoItem.textContent = textoDoItem;
        
        // Adiciona o novo <li> à lista <ul>
        listaElemento.appendChild(novoItem);
        
        // Opcional: Adiciona uma classe para uma animação suave
        setTimeout(() => {
            novoItem.classList.add('fade-in');
        }, 10);
        
    }, atrasoEntreItens * (index + 1));
});