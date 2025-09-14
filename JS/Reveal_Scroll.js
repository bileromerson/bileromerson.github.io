// Seleciona TODOS os elementos com a classe 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Cria um observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // entry.target é o elemento que o observador está vendo agora
    if (entry.isIntersecting) {
      // Se ele está visível, adiciona a classe 'visible'
      entry.target.classList.add('visible');
    }
    else{
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5 
});

// Para cada elemento na lista, comece a observá-lo
hiddenElements.forEach((el) => observer.observe(el));