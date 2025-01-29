document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Simplify the JavaScript to just handle the chocolate float effect
document.querySelector('.magic-text').addEventListener('click', function() {
    const text = this;
    text.classList.add('chocolate-effect');
    
    // Remove the class after animation completes
    setTimeout(() => {
        text.classList.remove('chocolate-effect');
    }, 1000);
});

// Split text into individual letters for the magic effect
document.addEventListener('DOMContentLoaded', () => {
    const magicText = document.querySelector('.magic-text');
    magicText.innerHTML = magicText.textContent.split('').map(letter => 
        `<span>${letter}</span>`
    ).join('');

    // Easter egg: Click letters to make chocolate emojis rain
    magicText.querySelectorAll('span').forEach(span => {
        span.addEventListener('click', () => {
            createChocolateRain();
        });
    });

    // Konami code easter egg
    let konamiCode = [];
    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === secretCode.join(',')) {
            triggerChocolateExplosion();
        }
    });

    // Fun zone functionality
    const cookieJar = document.querySelector('.cookie-jar');
    const factBubbles = document.querySelectorAll('.fact-bubble');
    let poppedBubbles = 0;

    if (cookieJar) {
        cookieJar.addEventListener('click', () => {
            // Add bounce effect to cookie jar
            cookieJar.style.animation = 'bounce 0.5s ease';
            
            // Create cookie explosion
            for (let i = 0; i < 12; i++) {
                createCookieParticle(cookieJar);
            }
            
            // Reset animation
            setTimeout(() => {
                cookieJar.style.animation = '';
            }, 500);
        });
    }

    const particles = ['✨', '🌟', '⭐', '💫', '🎇'];
    
    factBubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            if (!bubble.classList.contains('active')) {
                bubble.classList.add('active');
                
                // Create particle effects
                for (let i = 0; i < 12; i++) {
                    createParticle(bubble);
                }

                // Special effects based on bubble type
                if (bubble.classList.contains('magic-bubble')) {
                    createMagicEffect(bubble);
                } else if (bubble.classList.contains('shake-bubble')) {
                    createShakeEffect(bubble);
                } else if (bubble.classList.contains('spin-bubble')) {
                    createSpinEffect(bubble);
                }

                // Remove active state after animation
                setTimeout(() => {
                    bubble.classList.remove('active');
                }, 2000);
            }
        });
    });

    function createCookieParticle(element) {
        const treats = ['🍪', '🍫', '🧁', '🍰'];
        const particle = document.createElement('div');
        particle.className = 'cookie-particle';
        particle.textContent = treats[Math.floor(Math.random() * treats.length)];
        
        const rect = element.getBoundingClientRect();
        particle.style.left = `${rect.left + rect.width/2}px`;
        particle.style.top = `${rect.top + rect.height/2}px`;
        
        // Random direction
        const angle = (Math.random() * Math.PI * 2);
        const velocity = 10 + Math.random() * 15;
        particle.style.setProperty('--x', `${Math.cos(angle) * velocity}`);
        particle.style.setProperty('--y', `${Math.sin(angle) * velocity}`);
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }

    function createParticle(element) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        
        const rect = element.getBoundingClientRect();
        particle.style.left = `${rect.left + rect.width/2}px`;
        particle.style.top = `${rect.top + rect.height/2}px`;
        particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
        particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 100}px`);
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }

    function createMagicEffect(element) {
        const colors = ['#ff6b6b', '#6c5ce7', '#ff758c', '#a8e6cf'];
        let i = 0;
        const interval = setInterval(() => {
            element.style.backgroundColor = colors[i % colors.length];
            i++;
        }, 200);
        setTimeout(() => clearInterval(interval), 2000);
    }

    function createShakeEffect(element) {
        const emojis = ['🍫', '🍪', '🎂'];
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.className = 'particle';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = `${element.offsetLeft + Math.random() * element.offsetWidth}px`;
                emoji.style.top = `${element.offsetTop + Math.random() * element.offsetHeight}px`;
                document.body.appendChild(emoji);
                setTimeout(() => emoji.remove(), 1000);
            }, i * 200);
        }
    }

    function createSpinEffect(element) {
        const trail = element.querySelector('.spin-trail');
        const trailEffect = setInterval(() => {
            const trailParticle = document.createElement('div');
            trailParticle.className = 'particle';
            trailParticle.textContent = '✨';
            const angle = Math.random() * Math.PI * 2;
            const radius = 40;
            trailParticle.style.left = `${element.offsetLeft + element.offsetWidth/2 + Math.cos(angle) * radius}px`;
            trailParticle.style.top = `${element.offsetTop + element.offsetHeight/2 + Math.sin(angle) * radius}px`;
            document.body.appendChild(trailParticle);
            setTimeout(() => trailParticle.remove(), 500);
        }, 50);
        setTimeout(() => clearInterval(trailEffect), 2000);
    }

    const exclusiveTag = document.querySelector('.exclusive-tag');
    
    if (exclusiveTag) {
        exclusiveTag.addEventListener('click', () => {
            // Add click animation
            exclusiveTag.classList.add('clicked');
            
            // Create sparkles
            for (let i = 0; i < 8; i++) {
                createSparkle(exclusiveTag);
            }
            
            // Remove clicked class after animation
            setTimeout(() => {
                exclusiveTag.classList.remove('clicked');
            }, 500);
        });
    }

    function createSparkle(element) {
        const sparkle = document.createElement('span');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle-fade 1s ease-out forwards';
        element.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section id from the href
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to the section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // If on mobile, close the menu after clicking
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Prevent scroll when menu is open
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        document.body.style.overflow = 
            document.body.style.overflow === 'hidden' ? '' : 'hidden';
        menuToggle.classList.toggle('active');
    });

    // Handle touch events for interactive elements
    const interactiveElements = document.querySelectorAll('.product-card, .fact-bubble, .gallery-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.classList.add('touch-active');
        });
        
        element.addEventListener('touchend', () => {
            element.classList.remove('touch-active');
        });
    });
});

function createChocolateRain() {
    const emoji = ['🍫', '🍪', '🎂', '🧁', '🍰'];
    const drop = document.createElement('div');
    drop.className = 'chocolate-drop';
    drop.textContent = emoji[Math.floor(Math.random() * emoji.length)];
    drop.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(drop);
    
    // Remove the element after animation
    drop.addEventListener('animationend', () => drop.remove());
}

function triggerChocolateExplosion() {
    for(let i = 0; i < 50; i++) {
        setTimeout(createChocolateRain, i * 100);
    }
    
    // Add a golden glow to the header
    document.querySelector('.header').style.boxShadow = '0 0 50px var(--golden-caramel)';
    setTimeout(() => {
        document.querySelector('.header').style.boxShadow = '';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const chocolateBox = document.querySelector('.chocolate-box');
    const hiddenMessage = document.querySelector('.hidden-message');
    const chocolateEmojis = ['🍫', '🍪', '🎂', '🧁', '🍰'];
    let clickCount = 0;

    if (chocolateBox) {
        chocolateBox.addEventListener('click', () => {
            clickCount++;
            
            // Change emoji on click
            chocolateBox.firstChild.textContent = 
                chocolateEmojis[Math.floor(Math.random() * chocolateEmojis.length)];
            
            // Add bounce animation
            chocolateBox.style.animation = 'none';
            chocolateBox.offsetHeight; // Trigger reflow
            chocolateBox.style.animation = 'bounce 0.5s cubic-bezier(0.36, 0, 0.66, -0.56)';
            
            // Show hidden message after 3 clicks
            if (clickCount === 3 && hiddenMessage) {
                hiddenMessage.classList.add('visible');
                
                // Create a subtle sparkle effect
                createSparkles();
            }
        });
    }

    function createSparkles() {
        const sparkles = '✨';
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('span');
                sparkle.textContent = sparkles;
                sparkle.style.position = 'absolute';
                sparkle.style.left = `${Math.random() * 100}%`;
                sparkle.style.top = `${Math.random() * 100}%`;
                sparkle.style.fontSize = '1.5rem';
                sparkle.style.opacity = '0';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                hiddenMessage.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1000);
            }, i * 200);
        }
    }
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top-btn');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

document.querySelector('.back-to-top-btn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fix for iOS Safari 100vh issue
function fixMobileHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', fixMobileHeight);
fixMobileHeight();

// Add responsive header sizing
function adjustHeaderSize() {
    if (window.innerWidth <= 768) {
        const header = document.querySelector('.header');
        const elements = header.querySelectorAll('*');
        
        elements.forEach(el => {
            el.style.margin = '5px 0';
            if (el.tagName === 'H1') {
                el.style.fontSize = '14px';
            }
        });
    }
}

window.addEventListener('load', adjustHeaderSize);
window.addEventListener('resize', adjustHeaderSize);

function setupMobileHeader() {
    const header = document.querySelector('.header');
    if (window.innerWidth <= 768) {
        header.classList.add('mobile-header');
    } else {
        header.classList.remove('mobile-header');
    }
}

// Call on load and resize
window.addEventListener('load', setupMobileHeader);
window.addEventListener('resize', setupMobileHeader);

// Easter Egg Handler
document.addEventListener('DOMContentLoaded', function() {
    const brandLogo = document.querySelector('.brand-logo');
    let clickCount = 0;
    let lastClick = 0;

    if (brandLogo) {
        brandLogo.addEventListener('click', function() {
            const currentTime = new Date().getTime();
            
            if (currentTime - lastClick < 500) { // 500ms between clicks
                clickCount++;
                
                if (clickCount === 3) {
                    // Trigger easter egg
                    brandLogo.classList.add('clicked');
                    createTreatsExplosion(brandLogo);
                    clickCount = 0;
                }
            } else {
                clickCount = 1;
            }
            
            lastClick = currentTime;
        });
    }

    function createTreatsExplosion(element) {
        const treats = ['🍫', '🍪', '🧁', '🍰'];
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 15; i++) {
            const treat = document.createElement('div');
            treat.className = 'treat-particle';
            treat.textContent = treats[Math.floor(Math.random() * treats.length)];
            treat.style.position = 'fixed';
            treat.style.left = rect.left + rect.width/2 + 'px';
            treat.style.top = rect.top + rect.height/2 + 'px';
            treat.style.setProperty('--angle', (i * 24) + 'deg');
            document.body.appendChild(treat);
            
            setTimeout(() => treat.remove(), 1000);
        }

        // Remove animation class after completion
        setTimeout(() => {
            brandLogo.classList.remove('clicked');
        }, 800);
    }
});
