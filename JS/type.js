// A função de digitação permanece a mesma
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => {
            typeWriter(element, text, index + 1, speed);
        }, speed);
    } else {
        element.classList.remove('typing-cursor');
    }
}

// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const typingSpeed = 80;
    
    // 1. Encontra todos os elementos
    const elements = document.querySelectorAll('.type');
    
    // Armazenar o tempo de digitação total de todos os elementos para criar um atraso sequencial
    let totalDelay = 10;

    // 2. Cria o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const element = entry.target;
            
            // Só executa se o elemento estiver visível
            if (entry.isIntersecting) {
                // Pega o texto do atributo data
                const textToType = element.getAttribute('data-text');
                
                // Adiciona o cursor e inicia a digitação
                element.classList.add('typing-cursor');
                
                // Inicia a digitação AGORA, mas usa o 'totalDelay' para manter a sequência,
                // caso vários parágrafos sejam vistos ao mesmo tempo.
                setTimeout(() => {
                    typeWriter(element, textToType, 0, typingSpeed);
                }, totalDelay);

                // Atraso para o PRÓXIMO parágrafo
                totalDelay += typingSpeed;

                // 4. Para de observar o elemento para que ele não digite de novo
                observer.unobserve(element);
            }
        });
    }, {
        rootMargin: '0px', // O padrão é zero (checa a borda da tela)
        threshold: 0.5   // Começa a digitar quando 50% do elemento estiver visível
    });

    // 5. Manda o Observer monitorar cada parágrafo
    elements.forEach((element) => {
        element.textContent = "";
        observer.observe(element);
    });
});