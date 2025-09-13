
const elementosParaAnimar = document.querySelectorAll('.escondido');
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      observer.unobserve(entry.target); 
    }
  });
};
Intersection Observer
const observer = new 
elementosParaAnimar.forEach(elemento => {
  observer.observe(elemento);
});
