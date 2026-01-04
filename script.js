// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('fade-out');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1000);
    }
});

// Optimized scroll handling with throttling
let ticking = false;

function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Only update if elements exist
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.transform = `translateY(${rate}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Typing Animation for Hero Section
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

if (typedTextSpan) {
    const textArray = [
        'Full Stack Developer',
        'Certified Ethical Hacker',
        'Cloud Solutions Architect',
        'Cybersecurity Professional',
        'IoT Developer',
        'Machine Learning Engineer'
    ];
    
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Start the typing animation
    setTimeout(type, newTextDelay + 250);
}

// Terminal Typing Animation
const terminalCommands = [
    'ls -la',
    'cat projects.txt',
    'python malware_analyzer.py',
    'nmap -sS target.com',
    'wireshark -i eth0'
];

const typingCommand = document.querySelector('.typing-command');
if (typingCommand) {
    let commandIndex = 0;
    let charIndex = 0;

    function typeCommand() {
        if (charIndex < terminalCommands[commandIndex].length) {
            typingCommand.textContent += terminalCommands[commandIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeCommand, 150);
        } else {
            setTimeout(() => {
                typingCommand.textContent = '';
                charIndex = 0;
                commandIndex = (commandIndex + 1) % terminalCommands.length;
                setTimeout(typeCommand, 1000);
            }, 3000);
        }
    }

    setTimeout(typeCommand, 2000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-card')) {
                const numberElement = entry.target.querySelector('.stat-number');
                const target = parseInt(numberElement.getAttribute('data-target'));
                animateCounter(numberElement, target);
            }
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
const animateElements = document.querySelectorAll('.section-title, .about-content, .timeline-item, .project-card, .skill-category, .contact-content, .stat-card');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Counter animation function
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Matrix Rain Effect
function createMatrixRain() {
    const matrixContainer = document.querySelector('.matrix-rain');
    if (!matrixContainer) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.color = '#00ff88';
        drop.style.fontSize = '14px';
        drop.style.fontFamily = 'monospace';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 3 + 2) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        drop.style.opacity = Math.random() * 0.5 + 0.1;
        drop.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        drop.style.animation = 'matrixFall linear infinite';
        matrixContainer.appendChild(drop);
    }
}

// Add matrix fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes matrixFall {
        0% {
            transform: translateY(-100vh);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize matrix rain
createMatrixRain();

// Floating Particles Animation
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#00ff88';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.boxShadow = '0 0 10px #00ff88';
        particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Add particle float animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
        }
        25% {
            transform: translate(100px, -100px) rotate(90deg);
            opacity: 1;
        }
        50% {
            transform: translate(-100px, -200px) rotate(180deg);
            opacity: 0.5;
        }
        75% {
            transform: translate(-200px, -100px) rotate(270deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize floating particles
createFloatingParticles();

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

// Skill items interactive effect
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'scale(1.1) rotate(5deg)';
        skill.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.3)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'scale(1) rotate(0deg)';
        skill.style.boxShadow = 'none';
    });
});

// Project cards 3D tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Glitch effect on scroll
window.addEventListener('scroll', () => {
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement && window.scrollY > 100) {
        glitchElement.style.animation = 'glitch 0.3s infinite';
    } else if (glitchElement) {
        glitchElement.style.animation = 'glitch 2s infinite';
    }
});

// Add loading screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading';
    loadingScreen.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loadingScreen);
});

// Reveal sections on scroll
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.pageYOffset;
        
        if (scrollY > (sectionTop - windowHeight + sectionHeight / 4)) {
            section.classList.add('section-visible');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Add section reveal animation
const sectionStyle = document.createElement('style');
sectionStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    section.section-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(sectionStyle);
// Resume Modal Functionality
const resumeBtn = document.getElementById('resume-btn');
const resumeModal = document.getElementById('resume-modal');
const closeModal = document.querySelector('.close-modal');

if (resumeBtn && resumeModal) {
    // Open modal when resume button is clicked
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resumeModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            resumeModal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close modal when clicking outside the modal content
    resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) {
            resumeModal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resumeModal.classList.contains('show')) {
            resumeModal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
}

// Add click tracking for resume downloads
document.addEventListener('click', (e) => {
    if (e.target.closest('a[href*="drive.google.com"]')) {
        console.log('Resume download/view initiated');
        // You can add analytics tracking here if needed
    }
});
// Interactive Skills Section
const skillTabs = document.querySelectorAll('.skill-tab');
const skillContents = document.querySelectorAll('.skill-category-content');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        skillTabs.forEach(t => t.classList.remove('active'));
        skillContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const category = tab.getAttribute('data-category');
        const targetContent = document.getElementById(category);
        if (targetContent) {
            targetContent.classList.add('active');
            
            // Animate skill bars
            setTimeout(() => {
                animateSkillBars(targetContent);
            }, 300);
        }
    });
});

// Animate skill progress bars
function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
}

// Initialize first tab
document.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.skill-tab.active');
    if (firstTab) {
        const category = firstTab.getAttribute('data-category');
        const targetContent = document.getElementById(category);
        if (targetContent) {
            setTimeout(() => {
                animateSkillBars(targetContent);
            }, 500);
        }
    }
});

// Animate skill bars when skills section comes into view
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeContent = document.querySelector('.skill-category-content.active');
                if (activeContent) {
                    animateSkillBars(activeContent);
                }
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}
// 🔥 LEGENDARY HERO JAVASCRIPT - MIND-BLOWING EFFECTS 🔥

// Matrix Digital Rain Effect
function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Matrix Title Rotation
function initMatrixTitleRotation() {
    const matrixLines = document.querySelectorAll('.matrix-line');
    let currentIndex = 0;
    
    if (matrixLines.length === 0) return;
    
    setInterval(() => {
        matrixLines.forEach(line => line.classList.remove('active'));
        matrixLines[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % matrixLines.length;
    }, 2500);
}

// Legendary Typing Effect
function initLegendaryTyping() {
    const typedCommand = document.querySelector('.typed-command');
    if (!typedCommand) return;
    
    const commands = [
        'cat /etc/passwd',
        'nmap -sS target.com',
        'python exploit.py',
        'sudo rm -rf /vulnerabilities',
        'git commit -m "Secured the matrix"',
        'docker run --security-opt',
        'aws s3 sync --encrypt'
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeCommand() {
        const currentCommand = commands[commandIndex];
        
        if (isDeleting) {
            typedCommand.textContent = currentCommand.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedCommand.textContent = currentCommand.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentCommand.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            commandIndex = (commandIndex + 1) % commands.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeCommand, typeSpeed);
    }
    
    typeCommand();
}

// Hexagon Skill Interactions
function initHexagonSkills() {
    const hexagons = document.querySelectorAll('.skill-hexagon');
    
    hexagons.forEach((hex, index) => {
        hex.addEventListener('mouseenter', () => {
            // Create energy burst effect
            const burst = document.createElement('div');
            burst.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(0, 255, 136, 0.8) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: energyBurst 0.6s ease-out;
                pointer-events: none;
                z-index: 10;
            `;
            
            hex.appendChild(burst);
            
            setTimeout(() => burst.remove(), 600);
        });
        
        hex.addEventListener('click', () => {
            // Show skill level animation
            const level = hex.getAttribute('data-level');
            const skillName = hex.getAttribute('data-skill');
            
            showSkillPopup(skillName, level, hex);
        });
    });
}

// Skill Popup Display
function showSkillPopup(skill, level, element) {
    const popup = document.createElement('div');
    popup.className = 'skill-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h3>${skill}</h3>
            <div class="skill-meter">
                <div class="meter-fill" style="width: ${level}%"></div>
            </div>
            <span class="skill-percentage">${level}% Mastery</span>
        </div>
    `;
    
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 255, 136, 0.1));
        border: 2px solid var(--primary-color);
        border-radius: 15px;
        padding: 2rem;
        z-index: 1000;
        animation: popupAppear 0.3s ease-out;
        backdrop-filter: blur(20px);
        text-align: center;
        color: white;
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.style.animation = 'popupDisappear 0.3s ease-out';
        setTimeout(() => popup.remove(), 300);
    }, 2000);
}

// Legendary Button Effects
function initLegendaryButtons() {
    const buttons = document.querySelectorAll('.btn-legendary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Create particle explosion
            createParticleExplosion(button);
        });
        
        button.addEventListener('click', (e) => {
            // Create shockwave effect
            createShockwave(e.target);
        });
    });
}

// Particle Explosion Effect
function createParticleExplosion(element) {
    const particles = element.querySelector('.btn-particles');
    if (!particles) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: particleExplode 1s ease-out forwards;
            animation-delay: ${i * 0.05}s;
        `;
        
        particles.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// Shockwave Effect
function createShockwave(element) {
    const shockwave = document.createElement('div');
    shockwave.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border: 2px solid rgba(0, 255, 136, 0.6);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: shockwaveExpand 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.appendChild(shockwave);
    setTimeout(() => shockwave.remove(), 600);
}

// Hologram Cube Interaction
function initHologramCube() {
    const cube = document.querySelector('.profile-cube');
    if (!cube) return;
    
    let isRotating = true;
    
    cube.addEventListener('mouseenter', () => {
        isRotating = false;
        cube.style.animationPlayState = 'paused';
    });
    
    cube.addEventListener('mouseleave', () => {
        isRotating = true;
        cube.style.animationPlayState = 'running';
    });
    
    cube.addEventListener('click', () => {
        // Trigger special rotation
        cube.style.animation = 'cubeSpecialRotate 2s ease-in-out';
        setTimeout(() => {
            cube.style.animation = 'cubeRotate 20s linear infinite';
        }, 2000);
    });
}

// Network Node Connections
function initNetworkNodes() {
    const nodes = document.querySelectorAll('.network-node');
    const connections = document.querySelector('.network-connections');
    
    nodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            // Activate all connection lines
            const lines = connections.querySelectorAll('.connection-line');
            lines.forEach(line => {
                line.style.stroke = '#00ffff';
                line.style.strokeWidth = '3';
                line.style.filter = 'drop-shadow(0 0 5px #00ffff)';
            });
        });
        
        node.addEventListener('mouseleave', () => {
            // Reset connection lines
            const lines = connections.querySelectorAll('.connection-line');
            lines.forEach(line => {
                line.style.stroke = 'var(--primary-color)';
                line.style.strokeWidth = '2';
                line.style.filter = 'none';
            });
        });
    });
}

// Quantum Terminal Interaction
function initQuantumTerminal() {
    const terminal = document.querySelector('.quantum-terminal');
    if (!terminal) return;
    
    terminal.addEventListener('click', () => {
        // Add new command line
        const terminalBody = terminal.querySelector('.terminal-body-quantum');
        const newLine = document.createElement('div');
        newLine.className = 'quantum-line';
        newLine.innerHTML = `
            <span class="q-prompt">quantum@pratik:~$</span>
            <span class="q-command">access_granted --level=legendary</span>
        `;
        
        // Insert before cursor line
        const cursorLine = terminalBody.lastElementChild;
        terminalBody.insertBefore(newLine, cursorLine);
        
        // Add response
        setTimeout(() => {
            const responseLine = document.createElement('div');
            responseLine.className = 'quantum-line';
            responseLine.innerHTML = `<span class="q-output success">🚀 Welcome to the legendary experience!</span>`;
            terminalBody.insertBefore(responseLine, cursorLine);
        }, 1000);
    });
}

// Initialize all legendary effects
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initMatrixRain();
        initMatrixTitleRotation();
        initLegendaryTyping();
        initHexagonSkills();
        initLegendaryButtons();
        initHologramCube();
        initNetworkNodes();
        initQuantumTerminal();
    }, 100);
});

// Add legendary CSS animations
const legendaryCSS = `
@keyframes energyBurst {
    0% { width: 0; height: 0; opacity: 1; }
    100% { width: 200px; height: 200px; opacity: 0; }
}

@keyframes popupAppear {
    0% { transform: translate(-50%, -50%) scale(0) rotate(180deg); opacity: 0; }
    100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
}

@keyframes popupDisappear {
    0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(0) rotate(-180deg); opacity: 0; }
}

@keyframes particleExplode {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { 
        transform: translate(-50%, -50%) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0); 
        opacity: 0; 
    }
}

@keyframes shockwaveExpand {
    0% { width: 0; height: 0; opacity: 1; }
    100% { width: 300px; height: 300px; opacity: 0; }
}

@keyframes cubeSpecialRotate {
    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    25% { transform: rotateX(90deg) rotateY(180deg) rotateZ(90deg); }
    50% { transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg); }
    75% { transform: rotateX(270deg) rotateY(540deg) rotateZ(270deg); }
    100% { transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg); }
}

.skill-popup .meter-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 10px;
    transition: width 1s ease-out;
    animation: meterGlow 2s ease-in-out infinite;
}

.skill-meter {
    width: 200px;
    height: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    margin: 1rem 0;
    overflow: hidden;
}

@keyframes meterGlow {
    0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 136, 0.5); }
    50% { box-shadow: 0 0 20px rgba(0, 255, 136, 1); }
}
`;

const style = document.createElement('style');
style.textContent = legendaryCSS;
document.head.appendChild(style);
// Additional safeguard to prevent any form redirects
document.addEventListener('DOMContentLoaded', function() {
    // Ensure no form submissions cause page redirects
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Only allow AJAX submissions
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        });
    });
    
    // Prevent any accidental page navigation from form submissions
    window.addEventListener('beforeunload', function(e) {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.tagName === 'BUTTON' && activeElement.type === 'submit') {
            // If a submit button is active, it might be trying to navigate
            e.preventDefault();
            return false;
        }
    });
});