
const hiddenElements = document.querySelectorAll('.hidden');

// Cria um observador
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