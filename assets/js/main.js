// ========================================
// Happy Memories Rentals - Main JavaScript
// ========================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Set active navigation link based on current page
    setActiveNavLink();
});

// ========================================
// Set Active Navigation Link
// ========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Form Submission Handler (Reusable)
// ========================================
/**
 * Handles form submission using fetch API
 * @param {string} formId - The ID of the form element
 * @param {string} formspreeUrl - Your Formspree endpoint URL
 */
function handleFormSubmission(formId, formspreeUrl) {
    const form = document.getElementById(formId);
    if (!form) return;

    const messageDiv = document.getElementById('formMessage');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent default form submission and page reload

        // Disable submit button to prevent multiple submissions
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Hide any previous messages
        if (messageDiv) {
            messageDiv.classList.remove('show', 'success', 'error');
        }

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            // Send data to Formspree using fetch
            const response = await fetch(formspreeUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Success! Show success message
                showMessage('success', 'Thank you! Your request has been submitted successfully. We\'ll get back to you soon!');
                form.reset(); // Clear the form
            } else {
                // Error from Formspree
                const errorData = await response.json();
                showMessage('error', 'Oops! There was a problem submitting your form. Please try again or contact us directly.');
                console.error('Formspree error:', errorData);
            }
        } catch (error) {
            // Network or other error
            showMessage('error', 'Oops! There was a problem submitting your form. Please check your internet connection and try again.');
            console.error('Submission error:', error);
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// ========================================
// Show Message Function
// ========================================
/**
 * Displays a success or error message
 * @param {string} type - 'success' or 'error'
 * @param {string} message - The message text to display
 */
function showMessage(type, message) {
    const messageDiv = document.getElementById('formMessage');
    if (!messageDiv) return;

    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type} show`;

    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-hide success messages after 8 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.classList.remove('show');
        }, 8000);
    }
}

// ========================================
// Calculate Booking Total (for Rentals Page)
// ========================================
/**
 * Calculates the total price based on selected quantities
 * Note: Call this function on the rentals page after quantities are updated
 */
function calculateTotal() {
    // Define rental prices
    const prices = {
        'white-chairs': 1.50,
        'adult-tables': 10.00,
        'kids-chairs': 3.00,
        'kids-tables': 10.00
    };

    let total = 0;
    
    // Loop through each rental item and calculate subtotal
    for (const [itemId, price] of Object.entries(prices)) {
        const quantityInput = document.getElementById(itemId);
        if (quantityInput) {
            const quantity = parseInt(quantityInput.value) || 0;
            total += quantity * price;
        }
    }

    // Display total if element exists
    const totalDisplay = document.getElementById('totalPrice');
    if (totalDisplay) {
        totalDisplay.textContent = `$${total.toFixed(2)}`;
    }

    return total;
}

// ========================================
// Initialize Quantity Listeners (for Rentals Page)
// ========================================
function initQuantityListeners() {
    const quantityInputs = document.querySelectorAll('.quantity-selector input');
    
    quantityInputs.forEach(input => {
        // Update total when quantity changes
        input.addEventListener('input', calculateTotal);
        
        // Ensure minimum value is 0
        input.addEventListener('change', function() {
            if (this.value < 0) this.value = 0;
        });
    });
    
    // Calculate initial total
    calculateTotal();
}

// ========================================
// Initialize Forms Based on Page
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and initialize accordingly
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Initialize booking form on rentals page
    if (currentPage === 'rentals.html') {
        initQuantityListeners();
        
        // TODO: Replace with your actual Formspree URL
        // Get your Formspree URL from https://formspree.io/
        const formspreeUrl = 'https://formspree.io/f/xjggwkja';
        handleFormSubmission('bookingForm', formspreeUrl);
    }

    // Initialize contact form on contact page
    if (currentPage === 'contact.html') {
        // TODO: Replace with your actual Formspree URL
        const formspreeUrl = 'https://formspree.io/f/xjggwkja';
        handleFormSubmission('contactForm', formspreeUrl);
    }
});

// ========================================
// Smooth Scroll for Anchor Links (Optional Enhancement)
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
