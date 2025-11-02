// JavaScript для страницы портфолио
document.addEventListener('DOMContentLoaded', function() {
    // Слайдер отзывов
    const track = document.querySelector('.reviews-track');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const reviewCards = document.querySelectorAll('.review-card');
    let currentIndex = 0;
    
    if (track && reviewCards.length > 0) {
        // Функция для обновления позиции слайдера
        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        // Обработчики для кнопок навигации
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % reviewCards.length;
                updateSlider();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length;
                updateSlider();
            });
        }
        
        // Автоматическое перелистывание
        setInterval(function() {
            currentIndex = (currentIndex + 1) % reviewCards.length;
            updateSlider();
        }, 5000);
    }
    
    // Анимация прогресс-баров при скролле
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            if (isElementInViewport(bar)) {
                // Уже анимировано через CSS
                bar.style.opacity = '1';
            }
        });
    }
    
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Инициализация анимации прогресс-баров
    animateProgressBars();
    window.addEventListener('scroll', animateProgressBars);
});