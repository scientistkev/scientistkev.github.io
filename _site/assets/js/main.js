// Main JavaScript functionality
(function() {
    'use strict';
    
    // Mobile menu toggle
    function initMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (mobileToggle && mobileNav) {
            mobileToggle.addEventListener('click', function() {
                mobileNav.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            const mobileLinks = document.querySelectorAll('.mobile-nav-link');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                    mobileToggle.classList.remove('active');
                });
            });
        }
    }
    
    // Newsletter form handling
    function initNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = this.querySelector('input[type="email"]').value;
                const button = this.querySelector('button');
                const originalText = button.textContent;
                
                // Basic email validation
                if (!isValidEmail(email)) {
                    showMessage('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Update button state
                button.textContent = 'Subscribing...';
                button.disabled = true;
                
                // Simulate API call (replace with actual newsletter service)
                setTimeout(() => {
                    showMessage('Thank you for subscribing! Check your email for confirmation.', 'success');
                    this.reset();
                    button.textContent = originalText;
                    button.disabled = false;
                }, 1000);
            });
        }
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show message helper
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `message message-${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            background-color: ${type === 'success' ? '#28a745' : '#dc3545'};
        `;
        
        document.body.appendChild(messageEl);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Add scroll-based header styling
    function initScrollHeader() {
        const header = document.querySelector('.site-header');
        if (!header) return;
        
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Add animation on scroll for elements
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate
        const animateElements = document.querySelectorAll('.post-card, .project-card, .section-title');
        animateElements.forEach(el => observer.observe(el));
    }
    
    // Add CSS for animations
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            
            .site-header.scrolled {
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            .post-card, .project-card, .section-title {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .post-card.animate-in, .project-card.animate-in, .section-title.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .mobile-menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize all functionality when DOM is loaded
    function init() {
        addAnimationStyles();
        initMobileMenu();
        initNewsletterForm();
        initSmoothScrolling();
        initScrollHeader();
        initScrollAnimations();
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
