/* ==================== FRYMEDIAOFFICIAL MAIN SCRIPT ==================== */
// Main JavaScript file for FryMediaOfficial Website
// Modular structure for easy development and maintenance

// ==================== DOM ELEMENTS ==================== */
const DOM = {
    // Loading Screen
    loadingScreen: document.getElementById('loading-screen'),
    loadingProgress: document.getElementById('loading-progress'),
    loadingPercent: document.getElementById('loading-percent'),

    // Navbar
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('nav-menu'),
    navHamburger: document.getElementById('nav-hamburger'),
    navLinks: document.querySelectorAll('.nav-link'),

    // Theme
    themeToggle: document.getElementById('theme-toggle'),

    // Cursor
    cursor: document.getElementById('cursor'),
    cursorFollower: document.getElementById('cursor-follower'),

    // Particles
    particlesCanvas: document.getElementById('particles-canvas'),

    // Back to Top
    backToTop: document.getElementById('back-to-top'),

    // Toast
    toastContainer: document.getElementById('toast-container'),

    // Modal
    loginModal: document.getElementById('login-modal'),
    loginBtn: document.getElementById('login-btn'),
    modalClose: document.getElementById('modal-close'),

    // Forms
    contactForm: document.getElementById('contact-form'),
    loginForm: document.getElementById('login-form'),

    // Containers
    servicesContainer: document.getElementById('services-container'),
    portfolioContainer: document.getElementById('portfolio-container'),
    showcaseContainer: document.getElementById('showcase-container'),
    blogContainer: document.getElementById('blog-container'),
    pricingContainer: document.getElementById('pricing-container'),

    // Filter Buttons
    filterBtns: document.querySelectorAll('.filter-btn'),

    // Load More Buttons
    loadMorePortfolio: document.getElementById('load-more-portfolio'),
    loadMoreBlog: document.getElementById('load-more-blog')
};

// ==================== STATE MANAGEMENT ==================== */
const STATE = {
    isLoading: true,
    loadingProgress: 0,
    theme: 'dark',
    isNavOpen: false,
    scrollPosition: 0,
    particles: [],
    animationFrameId: null,
    portfolio: {
        filter: 'all',
        visible: 6
    },
    blog: {
        visible: 3
    }
};

// ==================== UTILITY FUNCTIONS ==================== */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Animate number counter
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

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// ==================== LOADING SCREEN ==================== */

function initLoadingScreen() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            setTimeout(() => {
                DOM.loadingScreen.classList.add('hidden');
                STATE.isLoading = false;
                initParticles();
                revealAnimations();
            }, 500);
        }

        DOM.loadingProgress.style.width = progress + '%';
        DOM.loadingPercent.textContent = Math.floor(progress) + '%';
    }, 100);
}

// ==================== PARTICLES BACKGROUND ==================== */

function initParticles() {
    const canvas = DOM.particlesCanvas;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', debounce(resize, 200));

    // Create particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));

    for (let i = 0; i < particleCount; i++) {
        STATE.particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        STATE.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Boundary check
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(10, 132, 255, ${particle.opacity})`;
            ctx.fill();
        });

        // Draw connections
        STATE.particles.forEach((p1, i) => {
            STATE.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    const opacity = (1 - distance / 120) * 0.15;
                    ctx.strokeStyle = `rgba(10, 132, 255, ${opacity})`;
                    ctx.stroke();
                }
            });
        });

        STATE.animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

// ==================== CUSTOM CURSOR ==================== */

function initCursor() {
    if (!DOM.cursor || window.innerWidth <= 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .portfolio-item, .service-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            DOM.cursor.classList.add('hover');
            DOM.cursorFollower.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            DOM.cursor.classList.remove('hover');
            DOM.cursorFollower.classList.remove('hover');
        });
    });

    function animateCursor() {
        // Cursor follows immediately
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        DOM.cursor.style.left = cursorX + 'px';
        DOM.cursor.style.top = cursorY + 'px';

        // Follower has more lag
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        DOM.cursorFollower.style.left = followerX + 'px';
        DOM.cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();
}

// ==================== NAVBAR SYSTEM ==================== */

function initNavbar() {
    // Scroll effect
    function handleScroll() {
        const scrolled = window.scrollY > 50;
        DOM.navbar.classList.toggle('scrolled', scrolled);
        DOM.backToTop.classList.toggle('visible', window.scrollY > 500);

        // Update active nav link
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        DOM.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', throttle(handleScroll, 10));

    // Mobile menu toggle
    DOM.navHamburger.addEventListener('click', () => {
        STATE.isNavOpen = !STATE.isNavOpen;
        DOM.navHamburger.classList.toggle('active', STATE.isNavOpen);
        DOM.navMenu.classList.toggle('active', STATE.isNavOpen);
    });

    // Close menu on link click
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            STATE.isNavOpen = false;
            DOM.navHamburger.classList.remove('active');
            DOM.navMenu.classList.remove('active');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!DOM.navMenu.contains(e.target) && !DOM.navHamburger.contains(e.target) && STATE.isNavOpen) {
            STATE.isNavOpen = false;
            DOM.navHamburger.classList.remove('active');
            DOM.navMenu.classList.remove('active');
        }
    });
}

// ==================== THEME TOGGLE ==================== */

function initTheme() {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    STATE.theme = savedTheme || (systemDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', STATE.theme);

    DOM.themeToggle.addEventListener('click', () => {
        STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', STATE.theme);
        localStorage.setItem('theme', STATE.theme);
    });
}

// ==================== SMOOTH SCROLL ==================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== BACK TO TOP ==================== */

function initBackToTop() {
    DOM.backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== MODAL SYSTEM ==================== */

function initModal() {
    // Open modal
    DOM.loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    DOM.modalClose.addEventListener('click', closeModal);
    DOM.loginModal.querySelector('.modal-overlay').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.loginModal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        DOM.loginModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==================== TOAST NOTIFICATIONS ==================== */

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';

    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <span class="toast-message">${message}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== RENDER SERVICES ==================== */

function renderServices() {
    const services = getServices();

    DOM.servicesContainer.innerHTML = services.map(service => `
        <div class="service-card" data-aos="fade-up" data-aos-delay="${service.id * 100}">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
        </div>
    `).join('');
}

// ==================== RENDER PORTFOLIO ==================== */

function renderPortfolio() {
    const filteredPortfolio = getPortfolioByCategory(STATE.portfolio.filter);
    const visiblePortfolio = filteredPortfolio.slice(0, STATE.portfolio.visible);

    DOM.portfolioContainer.innerHTML = visiblePortfolio.map(item => `
        <div class="portfolio-item" data-category="${item.category}" data-aos="fade-up">
            <div class="portfolio-thumb">
                ${item.thumbnail
                    ? `<img src="${item.thumbnail}" alt="${item.title}" loading="lazy">`
                    : '<div class="portfolio-placeholder">📷</div>'
                }
                <div class="portfolio-overlay">
                    <button class="portfolio-view-btn" data-id="${item.id}">View Project</button>
                </div>
            </div>
            <div class="portfolio-info">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-desc">${item.description}</p>
                <span class="portfolio-category">${item.category}</span>
            </div>
        </div>
    `).join('');

    // Hide load more if all items visible
    const hasMore = filteredPortfolio.length > STATE.portfolio.visible;
    DOM.loadMorePortfolio.style.display = hasMore ? 'inline-flex' : 'none';

    // Reinitialize cursor for new elements
    initCursor();
}

// ==================== PORTFOLIO FILTER ==================== */

function initPortfolioFilter() {
    DOM.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            DOM.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter
            STATE.portfolio.filter = btn.dataset.filter;
            STATE.portfolio.visible = 6;

            renderPortfolio();
        });
    });

    // Load more
    DOM.loadMorePortfolio.addEventListener('click', () => {
        STATE.portfolio.visible += 3;
        renderPortfolio();
    });
}

// ==================== RENDER SHOWCASE ==================== */

function renderShowcase() {
    const showcases = getShowcases();

    DOM.showcaseContainer.innerHTML = showcases.map(showcase => `
        <div class="showcase-card" data-aos="fade-up">
            <div class="showcase-image">
                ${showcase.thumbnail
                    ? `<img src="${showcase.thumbnail}" alt="${showcase.title}">`
                    : '🚀'
                }
            </div>
            <div class="showcase-content">
                <div class="showcase-badge">
                    <span class="showcase-status">${showcase.status}</span>
                    <span class="showcase-year">${showcase.year}</span>
                </div>
                <h3 class="showcase-title">${showcase.title}</h3>
                <p class="showcase-desc">${showcase.description}</p>
                <a href="#" class="btn btn-outline showcase-btn">View Details</a>
            </div>
        </div>
    `).join('');
}

// ==================== RENDER BLOG ==================== */

function renderBlog() {
    const posts = getPosts();
    const visiblePosts = posts.slice(0, STATE.blog.visible);

    DOM.blogContainer.innerHTML = visiblePosts.map(post => `
        <article class="blog-card" data-aos="fade-up">
            <div class="blog-thumb">
                ${post.thumbnail
                    ? `<img src="${post.thumbnail}" alt="${post.title}">`
                    : '📝'
                }
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${formatDate(post.date)}
                    </span>
                    <span class="blog-tag">${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-link">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </article>
    `).join('');

    // Hide load more if all items visible
    const hasMore = posts.length > STATE.blog.visible;
    DOM.loadMoreBlog.style.display = hasMore ? 'inline-flex' : 'none';
}

// ==================== BLOG LOAD MORE ==================== */

function initBlogLoadMore() {
    DOM.loadMoreBlog.addEventListener('click', () => {
        STATE.blog.visible += 3;
        renderBlog();
    });
}

// ==================== RENDER PRICING ==================== */

function renderPricing() {
    const pricing = getPricing();

    DOM.pricingContainer.innerHTML = pricing.map(plan => `
        <div class="pricing-card ${plan.featured ? 'featured' : ''}" data-aos="fade-up">
            <div class="pricing-header">
                <h3 class="pricing-name">${plan.name}</h3>
                <div class="pricing-price">${plan.price}<span> ${plan.period}</span></div>
                <p class="pricing-desc">${plan.description}</p>
            </div>
            <ul class="pricing-features">
                ${plan.features.map(feature => `
                    <li class="pricing-feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
            <button class="btn ${plan.featured ? 'btn-primary' : 'btn-outline'} pricing-cta">
                Get Started
            </button>
        </div>
    `).join('');
}

// ==================== ANIMATED COUNTERS ==================== */

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ==================== SCROLL REVEAL ANIMATIONS ==================== */

function revealAnimations() {
    const elements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// ==================== FORM HANDLERS ==================== */

function initForms() {
    // Contact Form
    DOM.contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(DOM.contactForm);
        const data = Object.fromEntries(formData);

        // Simulate submission
        const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        setTimeout(() => {
            showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
            DOM.contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Send Message
            `;
        }, 1500);

        // Log for debugging
        console.log('Contact form data:', data);
    });

    // Login Form (Future Feature)
    DOM.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Login feature coming soon!', 'success');
        DOM.loginModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// ==================== PRICING CTA HANDLERS ==================== */

function initPricingButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.pricing-cta')) {
            const card = e.target.closest('.pricing-card');
            const planName = card.querySelector('.pricing-name').textContent;

            // Scroll to contact
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });

            // Pre-fill subject
            setTimeout(() => {
                const subjectInput = document.getElementById('contact-subject');
                if (subjectInput) {
                    subjectInput.value = `Inquiry for ${planName} Plan`;
                }
            }, 500);
        }
    });
}

// ==================== LAZY LOADING IMAGES ==================== */

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== KEYBOARD NAVIGATION ==================== */

function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Press '/' to focus search (future feature)
        if (e.key === '/' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            // Future: Focus search input
        }
    });
}

// ==================== PERFORMANCE OPTIMIZATION ==================== */

function optimizePerformance() {
    // Stop particle animation when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(STATE.animationFrameId);
        } else if (!STATE.isLoading && !document.hidden) {
            initParticles();
        }
    });

    // Reduce particles on mobile
    if (window.innerWidth <= 768) {
        STATE.particles = STATE.particles.slice(0, 20);
    }
}

// ==================== INITIALIZATION ==================== */

function init() {
    // Start loading screen
    initLoadingScreen();

    // Initialize core features
    initTheme();
    initNavbar();
    initSmoothScroll();
    initBackToTop();
    initModal();
    initCursor();

    // Render content from database
    renderServices();
    renderPortfolio();
    renderShowcase();
    renderBlog();
    renderPricing();

    // Initialize interactive features
    initPortfolioFilter();
    initBlogLoadMore();
    initForms();
    initPricingButtons();
    initCounters();
    initLazyLoading();
    initKeyboardNav();

    // Performance
    optimizePerformance();

    console.log('FryMediaOfficial website initialized successfully!');
}

// ==================== START APPLICATION ==================== */

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==================== EXPORT FOR FUTURE USE ==================== */

// Make database and functions available globally for debugging
window.FryMediaDB = FryMediaDB;
window.FryMedia = {
    showToast,
    STATE,
    getPortfolio,
    getServices,
    getPosts,
    getShowcases,
    getPricing
};
