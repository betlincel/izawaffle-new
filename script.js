// Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('language') || 'tr';
    
    // Set initial language
    setLanguage(currentLang);
    updateActiveButton(currentLang);
    
    // Language button click handlers
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            updateActiveButton(lang);
            localStorage.setItem('language', lang);
        });
    });
    
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-tr], [data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    function updateActiveButton(lang) {
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Logo placeholder handling
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('error', function() {
            // If logo image fails to load, create a text-based logo
            this.style.display = 'none';
            const logoSection = document.querySelector('.logo-section');
            if (logoSection && !logoSection.querySelector('.logo-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'logo-placeholder';
                placeholder.textContent = 'IW';
                placeholder.style.cssText = `
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #ff69b4, #ff1493);
                    color: white;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: bold;
                `;
                logoSection.insertBefore(placeholder, logoSection.firstChild);
            }
        });
    }
    
    // Smooth scroll for anchor links
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
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe menu items and features
    document.querySelectorAll('.menu-item, .feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

