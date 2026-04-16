document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os containers de carrossel na página
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carousel) => {
        const slide = carousel.querySelector('.carousel-slide');
        const images = carousel.querySelectorAll('.carousel-slide img');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        let counter = 0;

        // Função para atualizar a posição do slide
        const updateSlide = () => {
            const size = carousel.clientWidth; // Pega a largura do container atual
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };

        nextBtn.addEventListener('click', () => {
            if (counter >= images.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
            updateSlide();
        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) {
                counter = images.length - 1;
            } else {
                counter--;
            }
            updateSlide();
        });

        // Ajusta o slide caso a janela mude de tamanho (responsividade)
        window.addEventListener('resize', updateSlide);
    });
});