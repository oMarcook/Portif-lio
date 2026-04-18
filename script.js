document.addEventListener('DOMContentLoaded', () => {

  //  SCROLL DO INDICADOR
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const section = document.querySelector('.sec2');

        const offset = 100;
        const top = section.offsetTop - offset;

            window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
    });
    }

 
    const elementos = document.querySelectorAll(
    '.sobre, .bemVindo, .prazer, .dev'
    );

  //  INTERSECTION OBSERVER (anima e repete)
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        } else {
        entry.target.classList.remove('show'); //  permite repetir
        }
    });
    }, {
    threshold: 0.3
    });

    elementos.forEach(el => observer.observe(el));

});