// JavaScript для страницы контактов
document.addEventListener('DOMContentLoaded', function () {
    // Валидация формы
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateForm()) {
                // Имитация отправки формы
                showFormSuccess();
            }
        });

        // Валидация в реальном времени
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const consentInput = document.getElementById('consent');

        if (nameInput) {
            nameInput.addEventListener('blur', validateName);
        }

        if (phoneInput) {
            phoneInput.addEventListener('blur', validatePhone);
        }

        if (emailInput) {
            emailInput.addEventListener('blur', validateEmail);
        }

        if (consentInput) {
            consentInput.addEventListener('change', validateConsent);
        }
    }

    // Функции валидации
    function validateName() {
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        const name = nameInput.value.trim();

        if (name === '') {
            showError(nameError, 'Пожалуйста, введите ваше имя');
            return false;
        } else if (name.length < 2) {
            showError(nameError, 'Имя должно содержать минимум 2 символа');
            return false;
        } else {
            hideError(nameError);
            return true;
        }
    }

    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phone = phoneInput.value.trim();
        const phoneRegex = /^(\+7|8)[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

        if (phone === '') {
            showError(phoneError, 'Пожалуйста, введите номер телефона');
            return false;
        } else if (!phoneRegex.test(phone)) {
            showError(phoneError, 'Пожалуйста, введите корректный номер телефона');
            return false;
        } else {
            hideError(phoneError);
            return true;
        }
    }

    function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email !== '' && !emailRegex.test(email)) {
            showError(emailError, 'Пожалуйста, введите корректный email');
            return false;
        } else {
            hideError(emailError);
            return true;
        }
    }

    function validateConsent() {
        const consentInput = document.getElementById('consent');
        const consentError = document.getElementById('consentError');

        if (!consentInput.checked) {
            showError(consentError, 'Необходимо согласие на обработку данных');
            return false;
        } else {
            hideError(consentError);
            return true;
        }
    }

    function validateForm() {
        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        const isConsentValid = validateConsent();

        return isNameValid && isPhoneValid && isEmailValid && isConsentValid;
    }

    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function hideError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    function showFormSuccess() {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Показываем состояние загрузки
        submitButton.textContent = 'Отправка...';
        submitButton.disabled = true;

        // Имитируем отправку
        setTimeout(() => {
            // Показываем успешное сообщение
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <div style="background: #d1fae5; color: #065f46; padding: 15px; border-radius: 5px; margin-top: 20px; text-align: center;">
                    <h3 style="margin: 0 0 10px 0;">Заявка отправлена!</h3>
                    <p style="margin: 0;">Спасибо за вашу заявку. Я свяжусь с вами в течение 24 часов.</p>
                </div>
            `;

            contactForm.appendChild(successMessage);

            // Сбрасываем форму
            contactForm.reset();

            // Восстанавливаем кнопку
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Прокручиваем к сообщению об успехе
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Удаляем сообщение через 5 секунд
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }, 1500);
    }

    // FAQ аккордеон
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Закрываем все открытые элементы
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Переключаем текущий элемент
            item.classList.toggle('active');
        });
    });

    // Имитация загрузки карты
    const mapFallback = document.querySelector('.map-fallback');

    if (mapFallback) {
        setTimeout(() => {
            mapFallback.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="margin-bottom: 15px;">Карта загружена</h3>
                    <p>ул. Математическая, д. 15</p>
                    <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.7;">
                        Для навигации используйте Google Maps или Яндекс.Карты
                    </p>
                </div>
            `;
        }, 2000);
    }
});