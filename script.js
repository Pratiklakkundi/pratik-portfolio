// 🔥 OPTIMIZED LEGENDARY HERO JAVASCRIPT - SMOOTH ON ALL DEVICES 🔥

// Device Performance Detection
const isLowEndDevice = () => {
    return navigator.hardwareConcurrency <= 4 || 
           /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const isMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Optimized Matrix Digital Rain Effect
function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    // Optimize for device performance
    const fontSize = isLowEndDevice() ? 12 : 10;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    
    // Reduce columns on low-end devices
    const maxColumns = isLowEndDevice() ? Math.min(columns, 50) : columns;
    
    for (let x = 0; x < maxColumns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = isLowEndDevice() ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.04)';
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
    
    // Adjust frame rate based on device
    const frameRate = isLowEndDevice() ? 60 : 35;
    setInterval(drawMatrix, frameRate);
    
    // Throttled resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }, 250);
    });
}

// Optimized Matrix Title Rotation
function initMatrixTitleRotation() {
    const matrixLines = document.querySelectorAll('.matrix-line');
    let currentIndex = 0;
    
    if (matrixLines.length === 0) return;
    
    // Slower rotation on low-end devices
    const rotationSpeed = isLowEndDevice() ? 4000 : 2500;
    
    setInterval(() => {
        matrixLines.forEach(line => line.classList.remove('active'));
        matrixLines[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % matrixLines.length;
    }, rotationSpeed);
}

// Optimized Legendary Typing Effect
function initLegendaryTyping() {
    const typedCommand = document.querySelector('.typed-command');
    if (!typedCommand) return;
    
    const commands = [
        'cat /etc/passwd',
        'nmap -sS target.com',
        'python exploit.py',
        'sudo rm -rf /vulnerabilities',
        'git commit -m "Secured"',
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
        
        // Optimize typing speed for performance
        let typeSpeed = isDeleting ? (isLowEndDevice() ? 80 : 50) : (isLowEndDevice() ? 150 : 100);
        
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

// Optimized Hexagon Skill Interactions
function initHexagonSkills() {
    const hexagons = document.querySelectorAll('.skill-hexagon');
    
    hexagons.forEach((hex, index) => {
        // Use passive listeners for better performance
        hex.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                // Only create energy burst on high-end devices
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
            }
        }, { passive: true });
        
        hex.addEventListener('click', () => {
            const level = hex.getAttribute('data-level');
            const skillName = hex.getAttribute('data-skill');
            showSkillPopup(skillName, level, hex);
        });
    });
}

// Optimized Skill Popup Display
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
        animation: ${isLowEndDevice() ? 'popupAppearSimple' : 'popupAppear'} 0.3s ease-out;
        backdrop-filter: blur(10px);
        text-align: center;
        color: white;
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.style.animation = `${isLowEndDevice() ? 'popupDisappearSimple' : 'popupDisappear'} 0.3s ease-out`;
        setTimeout(() => popup.remove(), 300);
    }, 2000);
}

// Optimized Legendary Button Effects
function initLegendaryButtons() {
    const buttons = document.querySelectorAll('.btn-legendary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            if (!isLowEndDevice()) {
                createParticleExplosion(button);
            }
        }, { passive: true });
        
        button.addEventListener('click', (e) => {
            createShockwave(e.target);
        });
    });
}

// Optimized Particle Explosion Effect
function createParticleExplosion(element) {
    const particles = element.querySelector('.btn-particles');
    if (!particles) return;
    
    // Reduce particles on low-end devices
    const particleCount = isLowEndDevice() ? 8 : 15;
    
    for (let i = 0; i < particleCount; i++) {
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

// Optimized Shockwave Effect
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

// Optimized Hologram Cube Interaction
function initHologramCube() {
    const cube = document.querySelector('.profile-cube');
    if (!cube) return;
    
    // Disable complex interactions on low-end devices
    if (isLowEndDevice()) {
        cube.style.animation = 'cubeRotateSimple 30s linear infinite';
        return;
    }
    
    let isRotating = true;
    
    cube.addEventListener('mouseenter', () => {
        isRotating = false;
        cube.style.animationPlayState = 'paused';
    }, { passive: true });
    
    cube.addEventListener('mouseleave', () => {
        isRotating = true;
        cube.style.animationPlayState = 'running';
    }, { passive: true });
    
    cube.addEventListener('click', () => {
        cube.style.animation = 'cubeSpecialRotate 2s ease-in-out';
        setTimeout(() => {
            cube.style.animation = 'cubeRotate 20s linear infinite';
        }, 2000);
    });
}

// Optimized Network Node Connections
function initNetworkNodes() {
    const nodes = document.querySelectorAll('.network-node');
    const connections = document.querySelector('.network-connections');
    
    if (isLowEndDevice()) return; // Skip on low-end devices
    
    nodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            const lines = connections.querySelectorAll('.connection-line');
            lines.forEach(line => {
                line.style.stroke = '#00ffff';
                line.style.strokeWidth = '3';
                line.style.filter = 'drop-shadow(0 0 5px #00ffff)';
            });
        }, { passive: true });
        
        node.addEventListener('mouseleave', () => {
            const lines = connections.querySelectorAll('.connection-line');
            lines.forEach(line => {
                line.style.stroke = 'var(--primary-color)';
                line.style.strokeWidth = '2';
                line.style.filter = 'none';
            });
        }, { passive: true });
    });
}

// Optimized Quantum Terminal Interaction
function initQuantumTerminal() {
    const terminal = document.querySelector('.quantum-terminal');
    if (!terminal) return;
    
    terminal.addEventListener('click', () => {
        const terminalBody = terminal.querySelector('.terminal-body-quantum');
        const newLine = document.createElement('div');
        newLine.className = 'quantum-line';
        newLine.innerHTML = `
            <span class="q-prompt">quantum@pratik:~$</span>
            <span class="q-command">access_granted --level=legendary</span>
        `;
        
        const cursorLine = terminalBody.lastElementChild;
        terminalBody.insertBefore(newLine, cursorLine);
        
        setTimeout(() => {
            const responseLine = document.createElement('div');
            responseLine.className = 'quantum-line';
            responseLine.innerHTML = `<span class="q-output success">🚀 Welcome to the legendary experience!</span>`;
            terminalBody.insertBefore(responseLine, cursorLine);
        }, 1000);
    });
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

// Performance Monitor
function initPerformanceOptimizations() {
    // Disable animations on very low-end devices
    if (navigator.hardwareConcurrency <= 2) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
        document.body.classList.add('low-performance');
    }
    
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
    
    // Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
            scrollTimeout = null;
        }, 16); // ~60fps
    }, { passive: true });
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

// Initialize all optimized effects
document.addEventListener('DOMContentLoaded', () => {
    // Initialize performance optimizations first
    initPerformanceOptimizations();
    
    setTimeout(() => {
        initMatrixRain();
        initMatrixTitleRotation();
        initLegendaryTyping();
        initHexagonSkills();
        initLegendaryButtons();
        initHologramCube();
        initNetworkNodes();
        initQuantumTerminal();
        initResumeModal(); // RESTORED
    }, 100);
});

// Add optimized CSS animations
const optimizedCSS = `
/* Simplified animations for low-end devices */
@keyframes popupAppearSimple {
    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

@keyframes popupDisappearSimple {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
}

@keyframes cubeRotateSimple {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

/* Performance optimizations */
.low-performance * {
    animation-duration: 0s !important;
    transition-duration: 0.1s !important;
}

.reduced-motion * {
    animation-duration: 0.3s !important;
    animation-iteration-count: 1 !important;
}

/* Optimized existing animations */
@keyframes energyBurst {
    0% { width: 0; height: 0; opacity: 1; }
    100% { width: 150px; height: 150px; opacity: 0; }
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
        transform: translate(-50%, -50%) translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) scale(0); 
        opacity: 0; 
    }
}

@keyframes shockwaveExpand {
    0% { width: 0; height: 0; opacity: 1; }
    100% { width: 200px; height: 200px; opacity: 0; }
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

/* Mobile optimizations */
@media (max-width: 768px) {
    .hacker-elements {
        display: none;
    }
    
    .tech-orbs-legendary {
        display: none;
    }
    
    .hologram-rings .ring {
        animation-duration: 20s;
    }
}
`;

const style = document.createElement('style');
style.textContent = optimizedCSS;
document.head.appendChild(style);