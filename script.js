document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing Page Tropical Summer carregada com sucesso!');

    // Exemplo de funcionalidade: Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Você pode adicionar um contador regressivo aqui para a Black Friday
    // const blackFridayDate = new Date('2025-11-28T00:00:00');
    // function updateCountdown() { /* ... código para o contador ... */ }

});