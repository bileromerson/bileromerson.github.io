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

function digitar() {
    const texto = "Hi There! I'm Bileromerson";
    const elemento = document.getElementById('texto-digitado');
    let indice = 0;
    elemento.textContent = "";

    function escrever() {
        elemento.textContent += texto[indice];
        indice++;
        if (indice < texto.length) {
            setTimeout(escrever, 90);
        } else {
            list();
        }
    }
    escrever();
}
digitar();

window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input input');
    if (!input) return;

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const valor = input.value.trim();
            if (["1", "2", "3", "4"].includes(valor)) {
                // Aqui você pode chamar a função para processar a resposta correta
                if (valor === "1") {
                    window.location.href = './HTML/about_me.html'; // Redireciona para about_me.html
                } else if (valor === "2") {
                    window.location.href = './HTML/interests.html'; // Redireciona para interests.html
                } else if (valor === "3") {
                    window.location.href = './HTML/projects.html'; // Redireciona para projects.html
                } else if (valor === "4") {
                    window.location.href = './HTML/contacts.html'; // Redireciona para contacts.html
                }
                input.value = "";
            } else {
                alert("Erro: Type 1, 2, 3 or 4.");
                input.value = "";
            }
        }
    });
});


// apagar!!!!!
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
    else{
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5 
});

hiddenElements.forEach((el) => observer.observe(el));