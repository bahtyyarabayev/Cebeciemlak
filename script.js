// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    // Support Notification
    const notification = document.getElementById('supportNotification');
    const notificationSound = document.getElementById('notificationSound');
    
    if (notification && notificationSound) {
        // Show notification after 2.5 seconds
        setTimeout(() => {
            notification.classList.add('show');
            notification.classList.add('shake');
            
            // Try to play sound
            notificationSound.play().catch(e => {
                // Kullanıcı etkileşimi olmadan ses çalınamadı. 
                // Bu normal bir tarayıcı davranışıdır.
                console.log("Ses çalınamadı: Tarayıcı etkileşim bekliyor olabilir.");
            });

            // Hide notification after 5 seconds (total 7.5s from load)
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);

            // Remove shake animation after it's done
            notification.addEventListener('animationend', () => {
                 notification.classList.remove('shake');
            });

        }, 2500);
    }
});


// All other scripts to run after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Language Switcher
    let currentLanguage = localStorage.getItem('language') || 'tr';
    const langButtons = document.querySelectorAll('.lang-btn');

    function switchLanguage(lang) {
        currentLanguage = lang;
        
        document.querySelectorAll('[data-tr]').forEach(el => {
            const text = el.getAttribute('data-' + lang);
            if (text) {
                el.textContent = text;
            }
        });

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        localStorage.setItem('language', lang);
    }

    switchLanguage(currentLanguage); // Set initial language on load

    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });

    // Navigation Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if(mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    if(navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
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
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === "") return; // Boş href'leri veya sadece # olanları atla
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70; // 70px navbar yüksekliği için
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Background Image Slider
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        slides[0].classList.add('active'); // İlk slaytı göster
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // 5 saniyede bir değiştir
    }

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    if (testimonialSlides.length > 0) {
        let currentTestimonial = 0;
        testimonialSlides[0].classList.add('active'); // İlk yorumu göster
        
        setInterval(() => {
            testimonialSlides[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
            testimonialSlides[currentTestimonial].classList.add('active');
        }, 5000); // 5 saniyede bir değiştir
    }

    // Parallax effect on mouse move
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            overlay.style.background = `linear-gradient(
                135deg,
                rgba(0, 0, 0, ${0.7 + mouseX * 0.1}) 0%,
                rgba(0, 0, 0, ${0.5 + mouseY * 0.1}) 100%
            )`;
        });
    }

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
                // observer.unobserve(entry.target); // İsteğe bağlı: Animasyon bir kez tetiklendikten sonra durulabilir.
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .listing-card, .contact-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});
