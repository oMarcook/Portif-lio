document.addEventListener('DOMContentLoaded', () => {

  // 🔥 Scroll do indicador
  const scrollIndicator = document.querySelector('.scroll-indicator');

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const section = document.querySelector('.sec2');

      const offset = 100; // altura do header
      const top = section.offsetTop - offset;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  }

  // 🔥 Animação da seção 2
  const sobre = document.querySelector('.sobre');

  window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;
    const top = sobre.getBoundingClientRect().top;

    if (top < trigger) {
      sobre.classList.add('show');
    }
  });

});


document.addEventListener('DOMContentLoaded', () => {

  const bemVindo = document.querySelector('.bemVindo');
  const prazer = document.querySelector('.prazer');
  const dev = document.querySelector('.dev');

  // sequência com delay
  setTimeout(() => {
    bemVindo.classList.add('show-text');
  }, 200);

  setTimeout(() => {
    prazer.classList.add('show-text');
  }, 600);

  setTimeout(() => {
    dev.classList.add('show-text');
  }, 1000);

});