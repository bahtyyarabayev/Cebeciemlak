// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    let currentLanguage = 'tr';
    const langButtons = document.querySelectorAll('.lang-btn');

    function switchLanguage(lang) {
        currentLanguage = lang;
        
        // Update all elements with data attributes
        document.querySelectorAll('[data-tr]').forEach(el => {
            if (el.getAttribute('data-' + lang)) {
                el.textContent = el.getAttribute('data-' + lang);
            }
        });

        // Update nav buttons active state
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Store language preference
        localStorage.setItem('language', lang);
    }

    // Get saved language preference
    const savedLang = localStorage.getItem('language') || 'tr';
    switchLanguage(savedLang);

    // Handle button clicks
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });
});

// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Background Image Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        if (slides.length === 0) return;
        
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to next slide
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    if (slides.length > 0) {
        setInterval(showNextSlide, 5000);
    }
});

// Parallax effect on mouse move
document.addEventListener('mousemove', function(e) {
    const overlay = document.querySelector('.overlay');
    if (!overlay) return;

    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    overlay.style.background = `linear-gradient(
        135deg,
        rgba(0, 0, 0, ${0.7 + mouseX * 0.1}) 0%,
        rgba(0, 0, 0, ${0.5 + mouseY * 0.1}) 100%
    )`;
});

// Add smooth hover effect to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .listing-card, .contact-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Support Notification
window.addEventListener('load', function() {
    const notification = document.getElementById('supportNotification');
    const notificationSound = new Audio('data:audio/mpeg;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'+'//8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/8f/agrotecnologica');

    // Show notification after 2.5 seconds
    setTimeout(() => {
        notification.classList.add('show');
        notificationSound.play().catch(e => console.log("Audio play failed: " + e));

        // Hide notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }, 2500);
});
