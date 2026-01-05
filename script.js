// 🎨 MODERN PROFESSIONAL HERO JAVASCRIPT - UI/UX EXPERT LEVEL

// Device Performance Detection
const isLowEndDevice = () => {
    return navigator.hardwareConcurrency <= 4 || 
           /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const isMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Modern Role Carousel Animation
function initRoleCarousel() {
    const roleItems = document.querySelectorAll('.role-item');
    if (roleItems.length === 0) return;
    
    let currentIndex = 0;
    
    function showNextRole() {
        // Remove active class from current item
        roleItems[currentIndex].classList.remove('active');
        
        // Move to next item
        currentIndex = (currentIndex + 1) % roleItems.length;
        
        // Add active class to new item
        roleItems[currentIndex].classList.add('active');
    }
    
    // Start the carousel
    setInterval(showNextRole, 3000);
}

// Smooth Scroll with Modern Easing
function initSmoothScrolling() {
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = button.getAttribute('onclick')?.match(/#(\w+)/)?.[1];
            if (targetId) {
                e.preventDefault();
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Professional Skill Tags Interaction
function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                // Create subtle glow effect
                tag.style.boxShadow = '0 5px 20px rgba(0, 255, 136, 0.3)';
            }
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.boxShadow = '';
        });
        
        // Add click interaction for mobile
        tag.addEventListener('click', () => {
            const skillName = tag.querySelector('span').textContent;
            showSkillTooltip(skillName, tag);
        });
    });
}

// Modern Skill Tooltip
function showSkillTooltip(skillName, element) {
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.innerHTML = `
        <div class="tooltip-content">
            <h4>${skillName}</h4>
            <p>Click to learn more about my ${skillName} expertise</p>
        </div>
    `;
    
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        border: 1px solid var(--primary-color);
        border-radius: 12px;
        padding: 1.5rem;
        z-index: 1000;
        color: white;
        text-align: center;
        backdrop-filter: blur(10px);
        animation: fadeInScale 0.3s ease-out;
        max-width: 300px;
    `;
    
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.style.animation = 'fadeOutScale 0.3s ease-out';
        setTimeout(() => tooltip.remove(), 300);
    }, 2000);
}

// Professional Button Interactions
function initModernButtons() {
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary');
    
    buttons.forEach(button => {
        // Add ripple effect on click
        button.addEventListener('click', (e) => {
            if (!isLowEndDevice()) {
                createRippleEffect(e, button);
            }
        });
        
        // Add hover sound effect (optional)
        button.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                button.style.transform = 'translateY(-3px) scale(1.02)';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
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

// Professional Social Links
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                link.style.transform = 'translateY(-3px) scale(1.1)';
                link.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.3)';
            }
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = '';
            link.style.boxShadow = '';
        });
    });
}

// Modern Profile Card Interactions
function initProfileCard() {
    const profileCard = document.querySelector('.profile-card-modern');
    const techItems = document.querySelectorAll('.tech-item');
    
    if (profileCard) {
        profileCard.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                profileCard.style.transform = 'translateY(-10px)';
                profileCard.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.4)';
            }
        });
        
        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = '';
            profileCard.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
        });
    }
    
    // Tech stack hover effects
    techItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                item.style.transform = 'translateY(-2px) scale(1.1)';
                // Animate other items slightly
                techItems.forEach((otherItem, otherIndex) => {
                    if (otherIndex !== index) {
                        otherItem.style.opacity = '0.6';
                    }
                });
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            techItems.forEach(otherItem => {
                otherItem.style.opacity = '';
            });
        });
    });
}

// Modern Scroll Indicator
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Hide scroll indicator when user scrolls
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }, { passive: true });
    }
}

// Performance Optimizations for Modern Design
function initModernPerformanceOptimizations() {
    // Reduce animations on low-end devices
    if (isLowEndDevice()) {
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
        
        // Disable floating elements on low-end devices
        const floatingElements = document.querySelector('.floating-elements');
        if (floatingElements) {
            floatingElements.style.display = 'none';
        }
        
        // Simplify gradient orbs
        const gradientOrbs = document.querySelectorAll('.gradient-orb');
        gradientOrbs.forEach(orb => {
            orb.style.filter = 'blur(30px)';
            orb.style.opacity = '0.2';
        });
    }
    
    // Optimize for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Disable role carousel animation
        const roleItems = document.querySelectorAll('.role-item');
        roleItems.forEach(item => {
            item.style.transition = 'none';
        });
    }
}

// Modern Loading Animation
function initModernLoading() {
    if (isMobile()) {
        const mobileLoading = document.getElementById('mobile-loading');
        if (mobileLoading) {
            mobileLoading.style.display = 'flex';
            
            // Hide loading after hero is ready
            setTimeout(() => {
                mobileLoading.classList.add('fade-out');
                setTimeout(() => {
                    mobileLoading.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }
}

// Resume Modal Functionality - RESTORED
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

// Initialize all modern effects
document.addEventListener('DOMContentLoaded', () => {
    // Show modern loading on mobile devices
    initModernLoading();
    
    // Initialize performance optimizations first
    initModernPerformanceOptimizations();
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Initialize modern hero features
    setTimeout(() => {
        initRoleCarousel();
        initSmoothScrolling();
        initSkillTags();
        initModernButtons();
        initSocialLinks();
        initProfileCard();
        initScrollIndicator();
        initResumeModal(); // RESTORED
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

// Add modern CSS animations
const modernCSS = `
/* Modern Professional Animations */
@keyframes fadeInScale {
    0% { 
        opacity: 0; 
        transform: translate(-50%, -50%) scale(0.8); 
    }
    100% { 
        opacity: 1; 
        transform: translate(-50%, -50%) scale(1); 
    }
}

@keyframes fadeOutScale {
    0% { 
        opacity: 1; 
        transform: translate(-50%, -50%) scale(1); 
    }
    100% { 
        opacity: 0; 
        transform: translate(-50%, -50%) scale(0.8); 
    }
}

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

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInStagger {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Mobile touch feedback */
@media (max-width: 768px) {
    .touch-feedback {
        position: relative;
        overflow: hidden;
    }
    
    .touch-feedback::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(0, 255, 136, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease;
        pointer-events: none;
    }
    
    .touch-feedback:active::after {
        width: 100px;
        height: 100px;
    }
    
    .cta-primary:active,
    .cta-secondary:active {
        transform: scale(0.98);
    }
    
    .skill-tag:active {
        transform: scale(0.95);
    }
    
    .social-link:active {
        transform: scale(0.95);
    }
}

/* Reduced motion support */
.reduced-motion * {
    animation-duration: 0.3s !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.2s !important;
}

/* Performance optimizations */
.low-performance * {
    animation-duration: 0s !important;
    transition-duration: 0.1s !important;
}

.low-performance .floating-elements,
.low-performance .gradient-orb {
    display: none !important;
}

/* Modern tooltip styles */
.skill-tooltip {
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.skill-tooltip h4 {
    margin: 0 0 0.5rem 0;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.skill-tooltip p {
    margin: 0;
    color: var(--text-gray);
    font-size: 0.9rem;
}
`;

const style = document.createElement('style');
style.textContent = modernCSS;
document.head.appendChild(style);

// Initialize modern optimizations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTouchInteractions();
    initMobileOptimizations();
    
    // Add touch feedback class to interactive elements
    if (isMobile()) {
        const touchElements = document.querySelectorAll('.cta-primary, .cta-secondary, .skill-tag, .social-link');
        touchElements.forEach(el => el.classList.add('touch-feedback'));
    }
});