

const texto = "Welcome to About Me!";
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




const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5 
});

hiddenElements.forEach((el) => observer.observe(el));