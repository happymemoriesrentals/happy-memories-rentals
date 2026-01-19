// ========================================
// Happy Memories Rentals - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    setActiveNavLink();

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'rentals.html') {
        initRentalTotals();
        initDeliveryToggle();
        initCityDistanceEstimate();
        handleFormSubmission('bookingForm', 'https://formspree.io/f/xjggwkja');
    }

    if (currentPage === 'contact.html') {
        handleFormSubmission('contactForm', 'https://formspree.io/f/xjggwkja');
    }

    initSmoothScroll();
});

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// ACTIVE NAV LINK
// ========================================
function setActiveNavLink() {
    const currentPage =
        window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ========================================
// RENTAL TOTAL CALCULATION
// ========================================
function initRentalTotals() {
    const prices = {
        'white-chairs': 1.5,
        'adult-tables': 10,
        'kids-chairs': 3,
        'kids-tables': 10
    };

    function calculateTotal() {
        let subtotal = 0;

        Object.keys(prices).forEach(id => {
            const qty = parseInt(document.getElementById(id)?.value || 0);
            subtotal += qty * prices[id];
        });

        document.getElementById('totalPrice').textContent =
            `$${subtotal.toFixed(2)}`;
        document.getElementById('finalTotal').textContent =
            `$${subtotal.toFixed(2)}`;
    }

    Object.keys(prices).forEach(id => {
        const input = document.getElementById(id);
        if (input) input.addEventListener('input', calculateTotal);
    });

    calculateTotal();
}

// ========================================
// DELIVERY YES / NO TOGGLE
// ========================================
function initDeliveryToggle() {
    const radios = document.querySelectorAll(
        'input[name="deliveryOption"]'
    );
    const section = document.getElementById('deliverySection');

    if (!radios.length || !section) return;

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            section.style.display =
                radio.value === 'yes' && radio.checked ? 'block' : 'none';
        });
    });
}

// ========================================
// CITY DISTANCE ESTIMATE (DISPLAY ONLY)
// ========================================
function initCityDistanceEstimate() {
    const cityInput = document.getElementById('customerCity');
    const output = document.getElementById('distanceEstimate');

    if (!cityInput || !output) return;

    const cityDistances = {
        "imperial beach": 0,
        "chula vista": 7,
        "san diego": 14,
        "national city": 10,
        "coronado": 12,
        "la mesa": 18,
        "spring valley": 15,
        "el cajon": 23,
        "santee": 22,
        "poway": 30
    };

    cityInput.addEventListener('input', () => {
        const city = cityInput.value.trim().toLowerCase();

        if (!city) {
            output.textContent = '📍 Distance estimate will appear here';
            return;
        }

        if (cityDistances[city] !== undefined) {
            output.textContent =
                `📍 Estimated distance from Imperial Beach: ~${cityDistances[city]} miles`;
        } else {
            output.textContent =
                '📍 Distance estimate not available — we will confirm manually';
        }
    });
}

// ========================================
// FORMSPREE HANDLER
// ========================================
function handleFormSubmission(formId, formspreeUrl) {
    const form = document.getElementById(formId);
    if (!form) return;

    const messageDiv = document.getElementById('formMessage');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async e => {
        e.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch(formspreeUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error();

            messageDiv.textContent =
                "✅ Thank you! Your booking request was sent.";
            messageDiv.className = "form-message success show";
            form.reset();
        } catch {
            messageDiv.textContent =
                "❌ Something went wrong. Please try again.";
            messageDiv.className = "form-message error show";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Booking Request';
        }
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
