// JavaScript для анимаций
document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Функция для обработки анимаций при прокрутке
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in, .slide-in-left, .slide-in-right');
        
        animatedElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }
    
    // Инициализация анимаций при загрузке
    handleScrollAnimations();
    
    // Обработка анимаций при прокрутке
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Анимация символов математики
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach((symbol, index) => {
        symbol.style.animationDelay = `${index * 1.5}s`;
    });
});

// Обновленный JavaScript для анимаций (добавить в animations.js)
document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Функция для обработки анимаций при прокрутке
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in, .slide-in-left, .slide-in-right');
        
        animatedElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }
    
    // Инициализация анимаций при загрузке
    handleScrollAnimations();
    
    // Обработка анимаций при прокрутке
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Анимация символов математики
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach((symbol, index) => {
        symbol.style.animationDelay = `${index * 1.5}s`;
    });
    
    // Анимация прогресс-баров на странице портфолио
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        if (isElementInViewport(bar)) {
            bar.style.width = bar.style.width; // Запускает CSS анимацию
        }
    });
});