// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href'); // Pega o valor do href
        if (targetID && targetID !== '#') { // Verifica se não é apenas '#'
            const targetElement = document.querySelector(targetID); // Procura o elemento alvo
            if (targetElement) { // Verifica se o elemento existe
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error(`Elemento com ID ${targetID} não encontrado`);
            }
        }
    });
});

// Animação ao rolar a página
const fadeInElements = document.querySelectorAll('.fade-in');

const handleScroll = () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Executa para carregar os elementos que já estão na tela


