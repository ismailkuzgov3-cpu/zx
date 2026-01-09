// === СИСТЕМА ОТЗЫВОВ ДЛЯ 11 МАСТЕРОВ ===

// Исходные данные мастеров

// В самом начале твоего скрипта
alert('Скрипт загружен! Masters: ' + (window.mastersData ? window.mastersData.length : 0));
const initialMasters = [
    {
        id: 1,
        name: "Алексей Смирнов",
        specialty: "Специалист по отоплению",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
        phone: "+7 (900) 111-22-33",
        initialRating: 4.8,
        reviews: [
            { id: 1, author: "Ирина П.", date: "2025-03-10", rating: 5, text: "Отличный мастер! Установил котёл быстро и качественно. Всё объяснил, показал как пользоваться." },
            { id: 2, author: "Сергей В.", date: "2025-03-12", rating: 4, text: "Хорошая работа, доволен. Приехал вовремя, сделал всё аккуратно." }
        ]
    },
    {
        id: 2,
        name: "Дмитрий Иванов",
        specialty: "Специалист по кондиционированию",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
        phone: "+7 (900) 222-33-44",
        initialRating: 5.0,
        reviews: [
            { id: 1, author: "Марина К.", date: "2025-08-11", rating: 5, text: "Установил кондиционер идеально! Тихий, работает отлично, спасибо!" }
        ]
    },
    {
        id: 3,
        name: "Михаил Петров",
        specialty: "Специалист по вентиляции",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
        phone: "+7 (900) 333-44-55",
        initialRating: 5.0,
        reviews: [
            { id: 1, author: "Антон Л.", date: "2025-03-08", rating: 5, text: "Сделал вентиляцию в офисе. Теперь воздух свежий, все довольны!" }
        ]
    },
    {
        id: 4,
        name: "Сергей Козлов",
        specialty: "Теплые полы",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop",
        phone: "+7 (900) 444-55-66",
        initialRating: 5.0,
        reviews: [
            { id: 1, author: "Ольга М.", date: "2025-02-15", rating: 5, text: "Отличная работа! Тёплый пол работает прекрасно, зимой очень комфортно." }
        ]
    },
    {
        id: 5,
        name: "Андрей Волков",
        specialty: "Котельные",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop",
        phone: "+7 (900) 555-66-77",
        initialRating: 4.9,
        reviews: [
            { id: 1, author: "Дмитрий С.", date: "2025-01-20", rating: 5, text: "Спроектировал и установил котельную. Всё работает безупречно!" }
        ]
    },
    {
        id: 6,
        name: "Павел Морозов",
        specialty: "Мульти-сплит системы",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
        phone: "+7 (900) 666-77-88",
        initialRating: 5.0,
        reviews: [
            { id: 1, author: "Елена К.", date: "2025-04-05", rating: 5, text: "Установил мульти-сплит систему в коттедже. Все комнаты охлаждаются идеально!" }
        ]
    },
    {
        id: 7,
        name: "Игорь Зайцев",
        specialty: "Обслуживание",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop",
        phone: "+7 (900) 777-88-99",
        initialRating: 5.0,
        reviews: [
            { id: 1, author: "Виктор П.", date: "2025-03-25", rating: 5, text: "Починил кондиционер за 30 минут! Профессионал своего дела." }
        ]
    },
    {
        id: 8,
        name: "Виктор Соколов",
        specialty: "Бризеры и рекуператоры",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&auto=format&fit=crop",
        phone: "+7 (900) 888-99-00",
        initialRating: 4.7,
        reviews: [
            { id: 1, author: "Анастасия Р.", date: "2025-02-28", rating: 5, text: "Установил бризер в детской комнате. Ребёнок перестал болеть, воздух чистый!" }
        ]
    },
    {
        id: 9,
        name: "Николай Лебедев",
        specialty: "Автоматика",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop",
        phone: "+7 (900) 999-00-11",
        initialRating: 5.0,
        reviews: [
            { id: 1, author: "Александр М.", date: "2025-03-15", rating: 5, text: "Настроил умный дом для управления климатом. Всё работает через приложение, очень удобно!" }
        ]
    },
    {
        id: 10,
        name: "Екатерина Орлова",
        specialty: "Дизайн-проекты",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
        phone: "+7 (900) 111-22-00",
        initialRating: 5.0,
        reviews: [
            { id: 1, author: "Светлана К.", date: "2025-04-10", rating: 5, text: "Разработала дизайн-проект, где техника идеально вписалась в интерьер. Очень внимательна к деталям!" }
        ]
    },
    {
        id: 11,
        name: "Анна Ковалева",
        specialty: "Проектирование",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop",
        phone: "+7 (900) 222-00-33",
        initialRating: 4.8,
        reviews: [
            { id: 1, author: "Иван Г.", date: "2025-03-22", rating: 5, text: "Создала точные расчёты и чертежи для сложной климатической системы. Профессионал высокого уровня!" }
        ]
    }
];

// Загрузка данных из localStorage
function loadMastersData() {
    const savedData = localStorage.getItem('klimateMastersReviews');
    if (savedData) {
        return JSON.parse(savedData);
    }
    return initialMasters;
}

// Сохранение данных в localStorage
function saveMastersData(data) {
    localStorage.setItem('klimateMastersReviews', JSON.stringify(data));
}

// Инициализация данных
let mastersData = loadMastersData();
let currentRating = 0;
let currentMasterId = null;

// Расчет среднего рейтинга
function calculateAverageRating(master) {
    if (master.reviews.length === 0) return master.initialRating;
    const total = master.reviews.reduce((sum, review) => sum + review.rating, 0);
    const avg = total / master.reviews.length;
    return avg.toFixed(1);
}

// Генерация звезд рейтинга
function generateStars(rating, interactive = false) {
    const numericRating = parseFloat(rating);
    let starsHtml = '';
    
    for (let i = 1; i <= 5; i++) {
        let starClass = interactive ? 'form-star' : 'rating-star';
        let activeClass = '';
        
        if (interactive) {
            activeClass = i <= currentRating ? 'active' : '';
        } else {
            if (i <= Math.floor(numericRating)) {
                activeClass = 'filled';
            } else if (i === Math.ceil(numericRating) && numericRating % 1 >= 0.5) {
                starClass += ' half-star';
            }
        }
        
        starsHtml += `<i class="fas fa-star ${starClass} ${activeClass}" 
            data-rating="${i}" 
            style="color: ${activeClass || starClass.includes('half-star') ? '#ffc107' : '#ddd'}; cursor: ${interactive ? 'pointer' : 'default'};"
            ${interactive ? 'onmouseover="hoverStar(this)" onmouseout="resetStars(this)" onclick="setRating(this)"' : ''}>
        </i>`;
    }
    
    return starsHtml;
}

// Генерация карточки мастера
function generateMasterCard(master) {
    const avgRating = calculateAverageRating(master);
    const reviewCount = master.reviews.length;
    
    return `
        <div class="master-card" data-master-id="${master.id}">
            <div class="master-avatar">
                <img src="${master.avatar}" alt="${master.name}" loading="lazy">
            </div>
            <h3>${master.name}</h3>
            <div class="master-specialty">${master.specialty}</div>
            
            <div class="master-rating-container">
                <div class="master-rating">
                    ${generateStars(avgRating)}
                    <span class="rating-value">${avgRating}</span>
                </div>
                <div class="review-count">${reviewCount} отзыв${reviewCount === 1 ? '' : (reviewCount > 1 && reviewCount < 5 ? 'а' : 'ов')}</div>
            </div>
            
            <div class="master-stats">
                <div class="stat-item">
                    <div class="stat-value">${reviewCount}</div>
                    <div class="stat-label">Отзывов</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${avgRating}</div>
                    <div class="stat-label">Рейтинг</div>
                </div>
            </div>
            
            <div class="master-buttons">
                <button class="btn btn-primary add-review" onclick="openReviewModal(${master.id})">
                    <i class="fas fa-comment"></i> Оставить отзыв
                </button>
                <button class="btn btn-outline view-reviews" onclick="showMasterReviews(${master.id})">
                    <i class="fas fa-eye"></i> Посмотреть отзывы
                </button>
            </div>
            
            <p class="master-phone">
                <a href="tel:${master.phone}" class="phone-link">
                    <i class="fas fa-phone"></i> ${master.phone}
                </a>
            </p>
        </div>
    `;
}

// Рендеринг всех мастеров
function renderMasters() {
    const mastersGrid = document.getElementById('mastersGrid');
    if (!mastersGrid) {
        console.error('Element #mastersGrid not found!');
        return;
    }
    
    mastersGrid.innerHTML = mastersData.map(master => generateMasterCard(master)).join('');
    
    // Обновляем кнопку сброса
    updateResetButton();
}

// Обновление кнопки сброса
function updateResetButton() {
    const resetBtn = document.querySelector('.reset-all-btn');
    if (resetBtn) {
        const hasReviews = mastersData.some(master => master.reviews.length > 0);
        resetBtn.disabled = !hasReviews;
        resetBtn.style.opacity = hasReviews ? '1' : '0.6';
        resetBtn.style.cursor = hasReviews ? 'pointer' : 'not-allowed';
    }
}

// Открытие модального окна для отзыва
function openReviewModal(masterId) {
    currentMasterId = masterId;
    currentRating = 0;
    
    const master = mastersData.find(m => m.id === masterId);
    if (!master) return;
    
    const modalContent = `
        <div class="review-modal">
            <h2>Оставить отзыв о мастере</h2>
            <div class="master-info-modal">
                <img src="${master.avatar}" alt="${master.name}">
                <h3>${master.name}</h3>
                <p>${master.specialty}</p>
            </div>
            
            <div id="successMessage" class="success-message"></div>
            
            <form id="reviewForm" class="add-review-form">
                <div class="form-group">
                    <label>Ваше имя</label>
                    <input type="text" id="reviewAuthor" placeholder="Введите ваше имя" required>
                </div>
                
                <div class="form-group">
                    <label>Ваша оценка</label>
                    <div class="form-rating">
                        <div class="form-stars" id="ratingStars">
                            ${generateStars(0, true)}
                        </div>
                        <div class="form-rating-label" id="ratingLabel">0 из 5</div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Ваш отзыв</label>
                    <textarea id="reviewText" placeholder="Расскажите о вашем опыте работы с мастером..." required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary submit-review">
                    <i class="fas fa-paper-plane"></i> Опубликовать отзыв
                </button>
            </form>
        </div>
    `;
    
    // Находим или создаем модальное окно для отзывов
    let reviewModal = document.getElementById('reviewModal');
    if (!reviewModal) {
        reviewModal = document.createElement('div');
        reviewModal.id = 'reviewModal';
        reviewModal.className = 'modal-backdrop';
        document.body.appendChild(reviewModal);
    }
    
    const modalInner = document.createElement('div');
    modalInner.className = 'modal-content review-modal-content';
    modalInner.setAttribute('onclick', 'event.stopPropagation()');
    modalInner.innerHTML = `
        <span class="close-btn" onclick="closeReviewModal()">&times;</span>
        <div id="reviewModalBody">${modalContent}</div>
    `;
    
    reviewModal.innerHTML = '';
    reviewModal.appendChild(modalInner);
    reviewModal.classList.add('active');
    
    // Обработка формы
    const form = document.getElementById('reviewForm');
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            handleReviewSubmit();
        };
    }
    
    // Закрытие по клику на фон
    reviewModal.onclick = function(e) {
        if (e.target === reviewModal) {
            closeReviewModal();
        }
    };
}

// Закрытие модального окна для отзывов
function closeReviewModal() {
    const reviewModal = document.getElementById('reviewModal');
    if (reviewModal) {
        reviewModal.classList.remove('active');
        currentRating = 0;
        currentMasterId = null;
    }
}

// Работа с рейтингом в форме
function hoverStar(star) {
    const rating = parseInt(star.dataset.rating);
    const stars = star.parentElement.querySelectorAll('.form-star');
    
    stars.forEach((s, index) => {
        s.classList.toggle('hovered', index < rating);
        s.style.color = index < rating ? '#ffc107' : '#ddd';
    });
    
    const ratingLabel = document.getElementById('ratingLabel');
    if (ratingLabel) ratingLabel.textContent = `${rating} из 5`;
}

function resetStars(star) {
    const stars = star.parentElement.querySelectorAll('.form-star');
    stars.forEach((s, index) => {
        s.classList.remove('hovered');
        s.classList.toggle('active', index < currentRating);
        s.style.color = index < currentRating ? '#ffc107' : '#ddd';
    });
    
    const ratingLabel = document.getElementById('ratingLabel');
    if (ratingLabel) ratingLabel.textContent = `${currentRating} из 5`;
}

function setRating(star) {
    currentRating = parseInt(star.dataset.rating);
    const stars = star.parentElement.querySelectorAll('.form-star');
    
    stars.forEach((s, index) => {
        s.classList.toggle('active', index < currentRating);
        s.style.color = index < currentRating ? '#ffc107' : '#ddd';
    });
    
    const ratingLabel = document.getElementById('ratingLabel');
    if (ratingLabel) ratingLabel.textContent = `${currentRating} из 5`;
}

// Обработка отправки отзыва
function handleReviewSubmit() {
    const authorInput = document.getElementById('reviewAuthor');
    const textInput = document.getElementById('reviewText');
    
    if (!authorInput || !textInput) return;
    
    const author = authorInput.value.trim();
    const text = textInput.value.trim();
    
    if (currentRating === 0) {
        alert('Пожалуйста, поставьте оценку мастеру');
        return;
    }
    
    if (!author || !text) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    const master = mastersData.find(m => m.id === currentMasterId);
    if (!master) return;
    
    const newReview = {
        id: Date.now(),
        author: author,
        date: new Date().toLocaleDateString('ru-RU'),
        rating: currentRating,
        text: text
    };
    
    master.reviews.push(newReview);
    saveMastersData(mastersData);
    
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = 'Спасибо! Ваш отзыв успешно добавлен.';
        successMessage.classList.add('active');
    }
    
    // Обновляем отображение
    renderMasters();
    
    // Закрываем модалку через 1.5 секунды
    setTimeout(() => {
        closeReviewModal();
        if (successMessage) {
            successMessage.classList.remove('active');
        }
    }, 1500);
}

// Показ всех отзывов мастера
function showMasterReviews(masterId) {
    const master = mastersData.find(m => m.id === masterId);
    if (!master) return;
    
    const avgRating = calculateAverageRating(master);
    const reviewCount = master.reviews.length;
    
    let reviewsHtml = '';
    if (reviewCount > 0) {
        reviewsHtml = master.reviews.map(review => `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-author">${review.author}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">
                    ${generateStars(review.rating)}
                </div>
                <div class="review-text">${review.text}</div>
            </div>
        `).join('');
    } else {
        reviewsHtml = '<div class="no-reviews">Пока нет отзывов. Будьте первым!</div>';
    }
    
    const modalContent = `
        <div class="reviews-modal">
            <h2>Отзывы о мастере</h2>
            <div class="master-info-modal">
                <img src="${master.avatar}" alt="${master.name}">
                <h3>${master.name}</h3>
                <p>${master.specialty}</p>
                <div class="master-summary">
                    <div class="summary-rating">${avgRating}</div>
                    <div class="summary-stars">${generateStars(avgRating)}</div>
                    <div class="summary-count">(${reviewCount} отзыв${reviewCount === 1 ? '' : (reviewCount > 1 && reviewCount < 5 ? 'а' : 'ов')})</div>
                </div>
            </div>
            
            <div class="reviews-section">
                <h3>Все отзывы</h3>
                <div class="reviews-list">
                    ${reviewsHtml}
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="openReviewModal(${master.id})">
                    <i class="fas fa-comment"></i> Оставить свой отзыв
                </button>
            </div>
        </div>
    `;
    
    // Находим или создаем модальное окно
    let reviewModal = document.getElementById('reviewModal');
    if (!reviewModal) {
        reviewModal = document.createElement('div');
        reviewModal.id = 'reviewModal';
        reviewModal.className = 'modal-backdrop';
        document.body.appendChild(reviewModal);
    }
    
    const modalInner = document.createElement('div');
    modalInner.className = 'modal-content review-modal-content';
    modalInner.setAttribute('onclick', 'event.stopPropagation()');
    modalInner.innerHTML = `
        <span class="close-btn" onclick="closeReviewModal()">&times;</span>
        <div id="reviewModalBody">${modalContent}</div>
    `;
    
    reviewModal.innerHTML = '';
    reviewModal.appendChild(modalInner);
    reviewModal.classList.add('active');
    
    // Закрытие по клику на фон
    reviewModal.onclick = function(e) {
        if (e.target === reviewModal) {
            closeReviewModal();
        }
    };
}

// Функция сброса всех отзывов
function resetAllReviews() {
    const hasReviews = mastersData.some(master => master.reviews.length > 0);
    
    if (!hasReviews) {
        alert('Нет отзывов для сброса!');
        return;
    }
    
    if (confirm('Вы уверены, что хотите удалить ВСЕ отзывы для ВСЕХ мастеров? Это действие нельзя отменить.')) {
        localStorage.removeItem('klimateMastersReviews');
        mastersData = JSON.parse(JSON.stringify(initialMasters));
        renderMasters();
        alert('Все отзывы успешно сброшены!');
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли секция мастеров на странице
    const mastersSection = document.getElementById('masters');
    if (mastersSection) {
        renderMasters();
    } else {
        console.warn('Section #masters not found on page');
    }
});

// Экспорт функций для глобального использования
window.openReviewModal = openReviewModal;
window.closeReviewModal = closeReviewModal;
window.showMasterReviews = showMasterReviews;
window.resetAllReviews = resetAllReviews;
window.hoverStar = hoverStar;
window.resetStars = resetStars;
window.setRating = setRating;


// ===== КАРУСЕЛЬ МАСТЕРОВ =====
let currentSlide = 0;
const slidesPerView = 3;
const totalSlides = Math.ceil(mastersData.length / slidesPerView);

function initCarousel() {
    const track = document.getElementById('mastersCarouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!track) return;
    
    // Очищаем трек
    track.innerHTML = '';
    
    // Создаем слайды
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.display = 'flex';
        slide.style.gap = '20px';
        
        // Добавляем мастеров на этот слайд
        const startIndex = i * slidesPerView;
        const endIndex = startIndex + slidesPerView;
        
        mastersData.slice(startIndex, endIndex).forEach(master => {
            const reviewCount = master.reviews.length;
            const avgRating = reviewCount > 0 
                ? (master.reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount).toFixed(1)
                : master.rating;
            
            const card = document.createElement('div');
            card.className = 'master-card-carousel';
            card.innerHTML = `
                <div class="master-avatar">
                    <img src="${master.avatar}" alt="${master.name}">
                </div>
                <h3>${master.name}</h3>
                <div class="master-specialty">${master.specialty}</div>
                
                <div class="master-rating">
                    ${generateStars(avgRating)}
                    <span class="rating-value">${avgRating}</span>
                </div>
                <div class="review-count">${reviewCount} отзыв${getReviewWord(reviewCount)}</div>
                
                <div class="master-buttons">
                    <button class="btn btn-primary" onclick="openReviewForm(${master.id})">
                        <i class="fas fa-comment"></i> Оставить отзыв
                    </button>
                    <button class="btn btn-outline" onclick="showReviews(${master.id})">
                        <i class="fas fa-eye"></i> Посмотреть
                    </button>
                </div>
                
                <p class="master-phone">
                    <a href="tel:${master.phone}" class="phone-link">
                        <i class="fas fa-phone"></i> ${master.phone}
                    </a>
                </p>
            `;
            
            slide.appendChild(card);
        });
        
        track.appendChild(slide);
    }
    
    // Создаем точки
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    updateCarousel();
}

function getReviewWord(count) {
    if (count === 0) return 'ов';
    if (count % 10 === 1 && count % 100 !== 11) return '';
    if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return 'а';
    return 'ов';
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('mastersCarouselTrack');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    if (!track) return;
    
    const slideWidth = 100 / totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Обновляем активную точку
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Автопрокрутка карусели
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Меняем каждые 5 секунд
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
    initCarousel();
    startAutoSlide();
    
    // Останавливаем автопрокрутку при наведении на карусель
    const carousel = document.querySelector('.masters-carousel-wrapper');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }
});