document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.hidden'); 

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aparece o elemento
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                
                // Opcional, mas recomendado: Pára de observar o elemento
                // para que a animação não repita ao rolar para cima e para baixo.
                observer.unobserve(entry.target); 
            } 
        });
    };

    const options = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.2 
    };

    const observer = new IntersectionObserver(callback, options);

    // Itera sobre CADA elemento encontrado e o observa. (Esta parte está correta)
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
});