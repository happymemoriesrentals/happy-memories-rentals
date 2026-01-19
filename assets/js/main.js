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
        initContactDeliveryToggle();
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
        'kids-tables': 10,
        'wooden-stools': 2,
        'white-resin-chairs': 2.5,
        'cherry-backdrop': 60
    };

    const itemNames = {
        'white-chairs': 'White Plastic Chairs',
        'adult-tables': 'Plastic Tables (Adult)',
        'kids-chairs': 'Kids Pink Chiavari Chairs',
        'kids-tables': 'Kids Tables',
        'wooden-stools': 'Wooden Kids Stools',
        'white-resin-chairs': 'Kids White Resin Chairs',
        'cherry-backdrop': 'Cherry Backdrop'
    };

    function calculateTotal() {
        let subtotal = 0;
        const selectedItems = [];

        Object.keys(prices).forEach(id => {
            const qty = parseInt(document.getElementById(id)?.value || 0);
            const itemTotal = qty * prices[id];
            subtotal += itemTotal;

            if (qty > 0) {
                selectedItems.push({
                    name: itemNames[id],
                    qty: qty,
                    price: prices[id],
                    total: itemTotal
                });
            }
        });

        // Update totals
        document.getElementById('totalPrice').textContent =
            `$${subtotal.toFixed(2)}`;
        document.getElementById('finalTotal').textContent =
            `$${subtotal.toFixed(2)}`;
        
        // Update selected items summary
        updateSelectedItemsList(selectedItems, subtotal);
    }

    function updateSelectedItemsList(items, total) {
        const summaryDiv = document.getElementById('selectedItemsSummary');
        const listEl = document.getElementById('selectedItemsList');
        const summaryTotalEl = document.getElementById('summaryTotal');

        if (!summaryDiv || !listEl || !summaryTotalEl) return;

        if (items.length === 0) {
            summaryDiv.style.display = 'none';
            return;
        }

        summaryDiv.style.display = 'block';
        
        listEl.innerHTML = items.map(item => `
            <li style="padding:0.5rem 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;">
                <span><strong>${item.name}</strong> × ${item.qty} @ $${item.price.toFixed(2)}</span>
                <span style="font-weight:bold;">$${item.total.toFixed(2)}</span>
            </li>
        `).join('');

        summaryTotalEl.textContent = `$${total.toFixed(2)}`;
    }

    Object.keys(prices).forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', calculateTotal);
            input.addEventListener('input', () => checkMaxQuantity(input));
        }
    });

    calculateTotal();
}

// ========================================
// MAX QUANTITY NOTIFICATION
// ========================================
function checkMaxQuantity(input) {
    const max = parseInt(input.getAttribute('max'));
    const value = parseInt(input.value);
    
    // Remove any existing max message
    const existingMsg = input.parentElement.querySelector('.max-qty-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    // Show message if at max
    if (value >= max && max > 0) {
        const message = document.createElement('div');
        message.className = 'max-qty-message';
        message.textContent = '✓ Max quantity selected';
        message.style.cssText = `
            color: #ff6b9d;
            font-size: 0.85rem;
            font-weight: 600;
            margin-top: 0.5rem;
            padding: 0.4rem 0.8rem;
            background: #fff0f5;
            border-radius: 8px;
            border: 2px solid #ff6b9d;
            display: inline-block;
        `;
        input.parentElement.appendChild(message);
    }
}

// ========================================
// DELIVERY YES / NO TOGGLE
// ========================================
function initDeliveryToggle() {
    const radios = document.querySelectorAll(
        'input[name="deliveryOption"]'
    );
    const section = document.getElementById('deliverySection');
    const addressInput = document.getElementById('eventAddress');
    const deliveryFeeNotice = document.getElementById('deliveryFeeNotice');

    if (!radios.length || !section) return;

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            const isDelivery = radio.value === 'yes' && radio.checked;
            section.style.display = isDelivery ? 'block' : 'none';
            
            // Toggle delivery fee notice
            if (deliveryFeeNotice) {
                deliveryFeeNotice.style.display = isDelivery ? 'block' : 'none';
            }
            
            // Toggle required attribute on address field
            if (addressInput) {
                addressInput.required = isDelivery;
                if (!isDelivery) {
                    addressInput.value = ''; // Clear address if switching to pickup
                }
            }
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
// CONTACT FORM DELIVERY TOGGLE
// ========================================
function initContactDeliveryToggle() {
    const needsDeliverySelect = document.getElementById('needsDelivery');
    const partyAddressGroup = document.getElementById('partyAddressGroup');
    const partyAddressInput = document.getElementById('partyAddress');

    if (!needsDeliverySelect || !partyAddressGroup) return;

    needsDeliverySelect.addEventListener('change', (e) => {
        if (e.target.value === 'yes') {
            partyAddressGroup.style.display = 'block';
            partyAddressInput.setAttribute('required', 'required');
        } else {
            partyAddressGroup.style.display = 'none';
            partyAddressInput.removeAttribute('required');
            partyAddressInput.value = '';
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
