// 🚀 ENHANCED PORTFOLIO - DARK/LIGHT MODE + ADVANCED ANIMATIONS + PERFORMANCE

// Device Performance Detection
const isLowEndDevice = () => {
    return navigator.hardwareConcurrency <= 4 || 
           /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const isMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// 1. DARK/LIGHT MODE TOGGLE
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }
    
    init() {
        this.applyTheme();
        this.bindEvents();
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        
        // Update meta theme color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', this.theme === 'light' ? '#ffffff' : '#0a0a0a');
        }
    }
    
    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        
        // Add smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// 2. ADVANCED SCROLL ANIMATIONS
class ScrollAnimations {
    constructor() {
        this.animatedElements = [];
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.bindScrollEvents();
        this.initParallax();
    }
    
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);
        
        // Observe all scroll-animate elements
        document.querySelectorAll('.scroll-animate').forEach(el => {
            this.observer.observe(el);
        });
    }
    
    animateElement(element) {
        const delay = parseFloat(element.dataset.delay) || 0;
        
        setTimeout(() => {
            element.classList.add('animate');
            this.animatedElements.push(element);
        }, delay * 1000);
        
        // Stop observing once animated
        this.observer.unobserve(element);
    }
    
    bindScrollEvents() {
        let ticking = false;
        
        const updateAnimations = () => {
            this.updateParallax();
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking && !isLowEndDevice()) {
                requestAnimationFrame(updateAnimations);
                ticking = true;
            }
        }, { passive: true });
    }
    
    initParallax() {
        if (isLowEndDevice()) return;
        
        this.parallaxElements = document.querySelectorAll('.gradient-orb, .floating-shapes');
        this.parallaxElements.forEach(el => {
            el.classList.add('parallax-element');
        });
    }
    
    updateParallax() {
        if (isLowEndDevice()) return;
        
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        this.parallaxElements.forEach((el, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// 3. PERFORMANCE OPTIMIZATIONS
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.optimizeImages();
        this.optimizeAnimations();
        this.setupResourceHints();
        this.monitorPerformance();
    }
    
    optimizeImages() {
        // Convert images to WebP if supported
        const supportsWebP = this.checkWebPSupport();
        
        if (supportsWebP) {
            document.querySelectorAll('img').forEach(img => {
                if (img.src.includes('.jpg') || img.src.includes('.png')) {
                    const webpSrc = img.src.replace(/\.(jpg|png)$/, '.webp');
                    // Check if WebP version exists (you'd implement this check)
                    img.src = webpSrc;
                }
            });
        }
    }
    
    checkWebPSupport() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    
    optimizeAnimations() {
        // Reduce animations on low-end devices
        if (isLowEndDevice()) {
            document.documentElement.style.setProperty('--animation-duration', '0.2s');
            document.body.classList.add('low-performance');
            
            // Disable heavy animations
            document.querySelectorAll('.gradient-orb, .floating-shapes').forEach(el => {
                el.style.animation = 'none';
            });
        }
        
        // Respect user's motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduced-motion');
        }
    }
    
    setupResourceHints() {
        // Preload critical resources
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
    
    monitorPerformance() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                        console.log('FID:', entry.processingStart - entry.startTime);
                    }
                    if (entry.entryType === 'layout-shift') {
                        console.log('CLS:', entry.value);
                    }
                });
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        }
    }
}

// Modern Role Carousel Animation
function initRoleCarousel() {
    const roleItems = document.querySelectorAll('.role-item');
    if (roleItems.length === 0) return;
    
    let currentIndex = 0;
    
    function showNextRole() {
        roleItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % roleItems.length;
        roleItems[currentIndex].classList.add('active');
    }
    
    setInterval(showNextRole, 3000);
}

// Professional Skill Tags Interaction
function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                tag.style.transform = 'translateY(-2px) scale(1.05)';
                tag.style.boxShadow = '0 5px 20px rgba(0, 255, 136, 0.3)';
            }
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = '';
            tag.style.boxShadow = '';
        });
    });
}

// Modern Button Interactions
function initModernButtons() {
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (!isLowEndDevice()) {
                createRippleEffect(e, button);
            }
        });
    });
}

// Modern Ripple Effect
function createRippleEffect(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Resume Modal Functionality
function initResumeModal() {
    const resumeBtn = document.getElementById('resume-btn');
    const resumeModal = document.getElementById('resume-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (resumeBtn && resumeModal) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resumeModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeModal && resumeModal) {
        closeModal.addEventListener('click', () => {
            resumeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Enhanced form submission handling with proper AJAX
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Always prevent default form submission
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
        submitBtn.disabled = true;
        formStatus.innerHTML = '';
        
        try {
            // Use fetch with proper headers for Formspree AJAX
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const result = await response.json();
            
            if (response.ok) {
                // Success - show success message
                formStatus.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <span>Thank you ${name}! Your message has been sent successfully. I'll get back to you soon!</span>
                    </div>
                `;
                contactForm.reset();
                showNotification('Message sent successfully!', 'success');
                
                // Scroll to success message
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                // Handle Formspree errors
                let errorMessage = 'Sorry, there was an error sending your message. Please try again.';
                if (result.errors) {
                    errorMessage = result.errors.map(error => error.message).join(', ');
                }
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            // Error - show error message
            formStatus.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <span>Sorry, there was an error sending your message. Please try again or contact me directly at pratiklakkundi@gmail.com</span>
                </div>
            `;
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff0066' : '#0066ff'};
        color: #0a0a0a;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core enhancements
    const themeManager = new ThemeManager();
    const scrollAnimations = new ScrollAnimations();
    const performanceOptimizer = new PerformanceOptimizer();
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Initialize modern hero features
    setTimeout(() => {
        initRoleCarousel();
        initSkillTags();
        initModernButtons();
        initResumeModal();
    }, 100);
});

// Mobile Navigation Handler
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Touch-friendly interactions for mobile
function initTouchInteractions() {
    if (isMobile()) {
        // Add touch feedback to interactive elements
        const interactiveElements = document.querySelectorAll('.skill-hexagon, .btn-legendary, .project-card, .skill-item');
        
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
        });
        
        // Improve scroll performance on mobile
        let ticking = false;
        
        function updateScrollElements() {
            // Update any scroll-dependent animations here
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        }, { passive: true });
    }
}

// Mobile-specific optimizations
function initMobileOptimizations() {
    if (isMobile()) {
        // Reduce animation complexity on mobile
        const complexAnimations = document.querySelectorAll('.legendary-name .name-glitch, .legendary-name .name-shadow');
        complexAnimations.forEach(el => el.style.display = 'none');
        
        // Optimize matrix rain for mobile
        const matrixContainer = document.querySelector('.matrix-container');
        if (matrixContainer) {
            matrixContainer.style.opacity = '0.3';
        }
        
        // Pause heavy animations when not visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                } else {
                    entry.target.style.animationPlayState = 'paused';
                }
            });
        });
        
        const heavyAnimations = document.querySelectorAll('.hologram-rings, .profile-cube, .tech-orbs-legendary');
        heavyAnimations.forEach(el => observer.observe(el));
    }
}

// Add enhanced CSS animations and performance optimizations
const enhancedCSS = `
/* Enhanced Ripple Animation */
@keyframes ripple {
    0% { 
        transform: scale(0); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
}

/* Smooth Theme Transitions */
.theme-transition {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Advanced Scroll Animations */
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes rotateIn {
    from {
        opacity: 0;
        transform: rotate(-180deg) scale(0.8);
    }
    to {
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
}

/* Performance Optimizations */
.gpu-accelerated {
    transform: translateZ(0);
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
}

/* Light Mode Specific Styles */
[data-theme="light"] .hero-modern {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
}

[data-theme="light"] .gradient-orb {
    opacity: 0.1;
}

[data-theme="light"] .professional-badge {
    background: rgba(0, 255, 136, 0.05);
    border-color: rgba(0, 255, 136, 0.2);
}

[data-theme="light"] .profile-card-modern {
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

[data-theme="light"] .skill-tag {
    background: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.1);
}

[data-theme="light"] .floating-card {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(0, 0, 0, 0.1);
    color: var(--light-text);
}

/* Mobile Performance Optimizations */
@media (max-width: 768px) {
    .scroll-animate {
        transition-duration: 0.5s;
    }
    
    .parallax-element {
        transform: none !important;
    }
    
    .gpu-accelerated {
        will-change: auto;
    }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    .scroll-animate {
        transition: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
    
    .theme-toggle-thumb {
        transition: none !important;
    }
    
    .parallax-element {
        transform: none !important;
    }
}

/* High Performance Mode */
.low-performance .scroll-animate {
    transition: none;
    opacity: 1;
    transform: none;
}

.low-performance .gradient-orb,
.low-performance .floating-shapes {
    display: none;
}

/* Touch Feedback for Mobile */
@media (max-width: 768px) {
    .cta-primary:active,
    .cta-secondary:active {
        transform: scale(0.98);
    }
    
    .skill-tag:active {
        transform: scale(0.95);
    }
    
    .theme-toggle:active {
        transform: scale(0.95);
    }
}
`;

const style = document.createElement('style');
style.textContent = enhancedCSS;
document.head.appendChild(style);

// Initialize enhanced optimizations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add GPU acceleration to key elements
    document.querySelectorAll('.hero-modern, .profile-card-modern, .floating-elements').forEach(el => {
        el.classList.add('gpu-accelerated');
    });
    
    // Add touch feedback class to interactive elements on mobile
    if (isMobile()) {
        const touchElements = document.querySelectorAll('.cta-primary, .cta-secondary, .skill-tag, .theme-toggle');
        touchElements.forEach(el => el.classList.add('touch-feedback'));
    }
});